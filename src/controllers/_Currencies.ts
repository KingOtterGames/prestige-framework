import { Action } from '@core/Dispatcher/_types'
import * as Currencies from '@modules/Currencies'

/**
 * Currencies - Add
 * @param dispatch
 * @param currency
 * @param amount
 */
export const add = (dispatch: React.Dispatch<Action>, currency: Currencies.types.Currencies, amount: number) => {
    const payload: Currencies.actions.addPayloadType = {
        currency,
        amount,
    }

    dispatch({
        func: Currencies.actions.add,
        payload,
    })
}

/**
 * Currencies - Remove
 * @param dispatch
 * @param currency
 * @param amount
 */
export const remove = (dispatch: React.Dispatch<Action>, currency: Currencies.types.Currencies, amount: number) => {
    const payload: Currencies.actions.removePayloadType = {
        currency,
        amount,
    }

    dispatch({
        func: Currencies.actions.remove,
        payload,
    })
}
