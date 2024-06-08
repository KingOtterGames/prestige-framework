import Content from '@content'
import * as SharedTypes from '@shared/types'
import * as Types from './_types'
import * as Constants from './_constants'

/**
 * Checks if you can afford an amount of a specific currency
 */
export const canAfford = (state: SharedTypes.State, currency: Types.Currencies, needed: number): boolean => {
    const amount = state.currencies[currency]
    return amount >= needed
}
