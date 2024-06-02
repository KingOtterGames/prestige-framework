import * as SharedConstants from '@shared/constants'
import * as SharedTypes from '@shared/types'
import * as SharedHelpers from '@shared/helpers'

export * as actions from './_actions'
export * as helpers from './_helpers'
export * as types from './_types'
export * as constants from './_constants'

export const onUpdate = (state: SharedTypes.State, deltaTime: number) => {
    return state
}

export const onFixedUpdate = (state: SharedTypes.State, deltaTime: number) => {
    return state
}
