import * as Constants from './_constants'
import * as Helpers from './_helpers'
import * as Types from './_types'
import Content from '@content'
import * as SharedConstants from '@shared/constants'
import * as SharedTypes from '@shared/types'
import * as SharedHelpers from '@shared/helpers'

/**
 * Adds a currency based on an amount
 */
export const add = (state: SharedTypes.State, payload: addPayloadType): SharedTypes.State => {
    state.currencies[payload.currency] += payload.amount
    return state
}
export type addPayloadType = {
    currency: Types.Currencies
    amount: number
}

/**
 * Removes an amount of a specific currency
 */
export const remove = (state: SharedTypes.State, payload: removePayloadType): SharedTypes.State => {
    if (state.currencies[payload.currency] - payload.amount >= 0) state.currencies[payload.currency] -= payload.amount
    return state
}
export type removePayloadType = {
    currency: Types.Currencies
    amount: number
}
