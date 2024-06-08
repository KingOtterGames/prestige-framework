import { Action } from '@core/Dispatcher/_types'
import * as Inventory from '@modules/Inventory'

/**
 * Inventory - Add
 * @param dispatch
 * @param id
 * @param amount
 */
export const add = (dispatch: React.Dispatch<Action>, id: string, amount: number = 1) => {
    const payload: Inventory.actions.addPayloadType = {
        id,
        amount,
    }

    dispatch({
        func: Inventory.actions.add,
        payload,
    })
}

/**
 * Inventory - Remove Amount
 * @param dispatch
 * @param id
 * @param amount
 */
export const removeAmount = (dispatch: React.Dispatch<Action>, id: string, amount: number = 1) => {
    const payload: Inventory.actions.removeAmountPayloadType = {
        id,
        amount,
    }

    dispatch({
        func: Inventory.actions.removeAmount,
        payload,
    })
}

/**
 * Inventory - Remove Instance
 * @param dispatch
 * @param instanceId
 */
export const removeInstance = (dispatch: React.Dispatch<Action>, instanceId: string) => {
    const payload: Inventory.actions.removeInstancePayloadType = {
        instanceId,
    }

    dispatch({
        func: Inventory.actions.removeInstance,
        payload,
    })
}
