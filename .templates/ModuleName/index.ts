// @ts-nocheck
import * as SharedConstants from '@shared/constants'
import * as SharedTypes from '@shared/types'
import * as SharedHelpers from '@shared/helpers'
import Content from '@content'
import * as ModuleTypes from '@modules/_types'
export * as actions from './_actions'
export * as helpers from './_helpers'
export * as types from './_types'
export * as constants from './_constants'

export const onUpdate = (state: SharedTypes.State, { deltaTime }: ModuleTypes.UpdatePayload) => {
    return state
}

export const onFixedUpdate = (state: SharedTypes.State, { deltaTime }: ModuleTypes.FixedUpdatePayload) => {
    return state
}
