import { Action } from '@core/Dispatcher/_types'
import * as Achievements from '@modules/Achievements'

/**
 * Achievements - give
 * @param dispatch
 * @param id
 */
export const give = (dispatch: React.Dispatch<Action>, id: string) => {
    const payload: Achievements.actions.givePayloadType = {
        id,
    }

    dispatch({
        func: Achievements.actions.give,
        payload,
    })
}
