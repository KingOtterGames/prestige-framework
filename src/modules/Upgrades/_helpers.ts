import Content from '@content'
import * as SharedTypes from '@shared/types'
import * as Types from './_types'
import * as Constants from './_constants'

/**
 * Get level of an upgrade
 */
export const get = (state: SharedTypes.State, id: string) => {
    const upgrade = state.upgrades.find((upgrade) => upgrade.id === id)
    if (upgrade) return upgrade.level
    return 0
}
