import * as Constants from './constants'

export type State = Constants.CurrentVersion.State

export interface UpdatePayload {
    deltaTime: number
}

export interface FixedUpdatePayload {
    deltaTime: number
}

export interface Props {
    state: State
    dispatch: any
}

export interface DataProps {
    data: State
}
