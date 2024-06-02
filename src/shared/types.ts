import * as Constants from './constants'

export type State = Constants.CurrentVersion.State

export interface Props {
    state: State
    dispatch: any
}

export interface Action {
    (state: State, payload: any): void
    dispatch: string
}
