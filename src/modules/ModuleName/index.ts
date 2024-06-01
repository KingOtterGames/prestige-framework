import StateType from '@shared/stateType'
export * as actions from './_actions'
export * as helpers from './_helpers'
export * as types from './_types'
export * as constants from './_constants'

const moduleName = 'ModuleName.'
export enum DISPATCH {
    exampleAction = moduleName + 'exampleAction',
}

export const onUpdate = (state: StateType, deltaTime: number) => {
    return state
}

export const onFixedUpdate = (state: StateType, deltaTime: number) => {
    return state
}
