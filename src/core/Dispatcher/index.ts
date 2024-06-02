import * as Modules from '@modules'
import * as SharedConstants from '@shared/constants'
import * as SharedTypes from '@shared/types'
import * as SharedHelpers from '@shared/helpers'

import * as Types from './_types'

const ModuleKeys = Object.keys(Modules)

export const reducer = (state: SharedTypes.State, action: Types.Action): SharedTypes.State => {
    return JSON.parse(JSON.stringify(action.func(state, action.payload)))
}

export const update = (dispatch: any, deltaTime: number) => {
    ModuleKeys.forEach((Module) => {
        dispatch({ func: ((Modules as any)[Module] as Types.Module).onUpdate, payload: { deltaTime } })
    })
}

export const fixedUpdate = (dispatch: any, deltaTime: number) => {
    ModuleKeys.forEach((Module) => {
        dispatch({ func: ((Modules as any)[Module] as Types.Module).onFixedUpdate, payload: { deltaTime } })
    })
}
