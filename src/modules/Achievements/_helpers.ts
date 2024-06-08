import Content from '@content'
import * as SharedTypes from '@shared/types'
import * as Types from './_types'
import * as Constants from './_constants'

/**
 * Checks if they have the achievement
 */
export const has = (state: SharedTypes.State, id: string) => {
    const achievement = state.achievements.find((a) => a === id)
    return achievement ? true : false
}
