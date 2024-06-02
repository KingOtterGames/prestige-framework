import * as PreviousVersion from './v0'

export interface State {
    version: number
}

export const DefaultSave: State = {
    version: 1,
}

export const convertPreviousVersion = (v0: PreviousVersion.State): State => {
    return {
        version: DefaultSave.version,
    }
}
