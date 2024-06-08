import * as Constants from './_constants'
import * as Helpers from './_helpers'
import * as Types from './_types'
import Content from '@content'
import * as SharedConstants from '@shared/constants'
import * as SharedTypes from '@shared/types'
import * as SharedHelpers from '@shared/helpers'

/**
 * Awards an achievement to a player if they haven't earned it yet
 */
export const give = (state: SharedTypes.State, payload: givePayloadType): SharedTypes.State => {
    const achievements = state.achievements
    const achievement = achievements.find((id) => id === payload.id)
    if (!achievement) {
        window.api.achievement(payload.id)
        achievements.push(payload.id)
    }
    return state
}
export type givePayloadType = {
    id: string
}
