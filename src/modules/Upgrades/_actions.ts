import * as Constants from './_constants'
import * as Helpers from './_helpers'
import * as Types from './_types'
import Content from '@content'
import * as SharedConstants from '@shared/constants'
import * as SharedTypes from '@shared/types'
import * as SharedHelpers from '@shared/helpers'

/**
 * Adds a level to an upgrade
 */
export const upgrade = (state: SharedTypes.State, payload: upgradePayloadType): SharedTypes.State => {
    const upgrades = state.upgrades
    const currentUpgrade = upgrades.find((upgrade) => upgrade.id === payload.id)
    if (currentUpgrade) {
        currentUpgrade.level++
    } else {
        upgrades.push({ id: payload.id, level: 1 })
    }
    return state
}
export type upgradePayloadType = {
    id: string
}
