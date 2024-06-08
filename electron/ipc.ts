import { IpcMain } from 'electron'
import * as utils from './utils'
import * as fs from 'fs'
import { shell } from 'electron'

export const init = (ipcMain: IpcMain, steamClient: any, db: any, gamedir: string) => {
    ipcMain.handle('save', (event, data) => {
        try {
            // String data
            const stringData: string = JSON.stringify(data)

            // Overwrite save
            fs.writeFileSync(gamedir + '/save.json', stringData, { flag: 'w+' })

            // Add a backup
            const backupdir = gamedir + '/backups'
            const backups = fs.readdirSync(backupdir).sort()

            // Remove last backup if full
            if (backups.length > 100) {
                fs.unlinkSync(backupdir + '/' + backups[0])
            }

            // Write new backup
            try {
                fs.writeFileSync(backupdir + '/' + utils.formatBackupName(), stringData, { flag: 'w+' })
            } catch (err) {
                console.error(err)
            }
        } catch (err) {
            console.error(err)
        }
    })

    ipcMain.handle('load', (event) => {
        return new Promise((res, rej) => {
            // Attempt to Load Data
            try {
                const data = fs.readFileSync(gamedir + '/save.json', 'utf8')
                res(JSON.parse(data))
            } catch (err) {
                res(null)
            }
        })
    })

    ipcMain.handle('remove', (event) => {
        try {
            fs.unlinkSync(gamedir + '/save.json')
        } catch (err) {
            console.error(err)
        }
    })

    ipcMain.on('db', (event, query) => {
        const data = db.prepare(query).all()
        event.returnValue = data
    })

    ipcMain.handle('achievement', (event, key) => {
        steamClient.achievement.activate(key)
    })

    ipcMain.handle('link', (event, url) => {
        shell.openExternal(url)
    })
}
