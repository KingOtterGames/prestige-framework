import Content from '@content'
import * as SharedTypes from '@shared/types'
import * as Types from './_types'
import * as Constants from './_constants'

/**
 * Get Item Information
 */
export const getItemInfo = (itemId: string): Types.Item | null => {
    return Content.Items.find((item) => item.id === itemId) || null
}

/**
 * Get Item Information
 */
export const getItemFromInventory = (state: SharedTypes.State, itemId: string): Types.InventoryItemType => {
    return state.items.find((item) => item.id === itemId)!
}

/**
 * Get if Item is Stackable
 */
export const isStackable = (itemId: string) => getItemInfo(itemId)?.stackable
