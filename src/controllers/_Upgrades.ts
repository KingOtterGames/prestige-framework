import { Action } from '@core/Dispatcher/_types'
import * as Upgrades from '@modules/Upgrades'

/**
 * Upgrades - upgrade
 * @param dispatch
 * @param id
 */
export const upgrade = (dispatch: React.Dispatch<Action>, id: string) => {
    const payload: Upgrades.actions.upgradePayloadType = {
        id,
    }

    dispatch({
        func: Upgrades.actions.upgrade,
        payload,
    })
}
