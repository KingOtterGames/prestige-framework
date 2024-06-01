import { IpcMain } from 'electron'
import * as utils from './utils'
import * as fs from 'fs'
import { shell } from 'electron'

export const init = (ipcMain: IpcMain, steamClient: any, db: any, gamedir: string) => {
    ipcMain.handle('save', (event, data) => {
        try {
            // Logging
            console.log('====> Currently Saving data...')

            // String data
            const stringData: string = JSON.stringify(data)

            // Overwrite save
            fs.writeFileSync(gamedir + '/save.json', stringData, { flag: 'w+' })
            console.log('= Save Written')

            // Add a backup
            const backupdir = gamedir + '/backups'
            const backups = fs.readdirSync(backupdir).sort()

            // Remove last backup if full
            if (backups.length > 100) {
                fs.unlinkSync(backupdir + '/' + backups[0])
                console.log('= Old Backup Removed')
            }

            // Write new backup
            try {
                fs.writeFileSync(backupdir + '/' + utils.formatBackupName(), stringData, { flag: 'w+' })
                console.log('= New Backup Made')
            } catch (err) {
                console.error(err)
            }
        } catch (err) {
            console.error(err)
        }
    })

    ipcMain.handle('load', (event) => {
        return new Promise((res, rej) => {
            // Logging
            console.log('====> Currently Saving data...')

            // Attempt to Load Data
            try {
                const data = fs.readFileSync(gamedir + '/save.json', 'utf8')
                console.log('= Found data and returning it')
                res(JSON.parse(data))
            } catch (err) {
                console.log('= Failed to find a save... Returning null')
                res(null)
            }
        })
    })

    ipcMain.handle('delete', (event) => {
        try {
            fs.unlinkSync(gamedir + '/save.json')
            console.log('Save has been deleted...')
        } catch (err) {
            console.error(err)
        }
    })

    ipcMain.handle('db', (event, query) => {
        return new Promise((res) => {
            res(db.prepare(query).all())
        })
    })

    ipcMain.handle('achievement', (event, key) => {
        steamClient.achievement.activate(key)
    })

    ipcMain.handle('link', (event, url) => {
        shell.openExternal(url)
    })
}
