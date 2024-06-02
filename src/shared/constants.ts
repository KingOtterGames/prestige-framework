import * as CurrentVersion from './versions/v1'
import * as SharedTypes from './types'

export * as CurrentVersion from './versions/v1'
export const DefaultSave: SharedTypes.State = CurrentVersion.DefaultSave

const toTitleCase = (str: string) => {
    return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    })
}

export const PROJECT_NAME: string | undefined = toTitleCase(process.env.REACT_APP_NAME?.replaceAll('-', ' ') || 'Undefined Name')
export const PROJECT_VERSION: string | undefined = process.env.REACT_APP_VERSION

export const AUTO_SAVE_TIMER_MINUTES: number = 0.5
export const OFFLINE_PROGRESS: boolean = true
