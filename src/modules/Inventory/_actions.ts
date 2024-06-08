import * as Constants from './_constants'
import * as Helpers from './_helpers'
import * as Types from './_types'
import Content from '@content'
import * as SharedConstants from '@shared/constants'
import * as SharedTypes from '@shared/types'
import * as SharedHelpers from '@shared/helpers'

/**
 * Add an item to the inventory
 */
export const add = (state: SharedTypes.State, { id, amount = 1 }: addPayloadType): SharedTypes.State => {
    const itemFromInventory = Helpers.getItemFromInventory(state, id)
    const itemInfo = Helpers.getItemInfo(id)

    if (!itemInfo) {
        console.error('Item info was not found')
        return state
    }

    if (itemFromInventory?.amount) {
        itemFromInventory.amount += amount
    } else {
        state.items.push({
            id: itemInfo!.id,
            amount: itemInfo.stackable ? amount : 1,
            instanceId: !itemInfo.stackable ? SharedHelpers.InstanceID.create() : '',
        })
    }

    return state
}
export type addPayloadType = {
    id: string
    amount: number
}

/**
 * Removes an item that's stackable from your inventory
 */
export const removeAmount = (state: SharedTypes.State, { id, amount = 1 }: removeAmountPayloadType): SharedTypes.State => {
    if (!Helpers.isStackable(id)) {
        console.error('Trying to remove an amount from a instanced item.')
        return state
    }

    const itemFromInventory = Helpers.getItemFromInventory(state, id)

    if (!itemFromInventory) {
        console.error('Could not find your stackable item.')
        return state
    }

    itemFromInventory.amount -= amount
    if (itemFromInventory.amount <= 0) {
        const indexFromInventory = state.items.findIndex((item) => item.id === id)
        state.items.splice(indexFromInventory, 1)
    }

    return state
}
export type removeAmountPayloadType = {
    id: string
    amount: number
}

/**
 * Remove an instanced item from your inventory
 */
export const removeInstance = (state: SharedTypes.State, { instanceId }: removeInstancePayloadType): SharedTypes.State => {
    const indexFromInventory = state.items.findIndex((item) => item.instanceId === instanceId)

    if (indexFromInventory < 0) {
        console.error('Could not find your instanced item.')
        return state
    }

    const item: Types.InventoryItemType = state.items[indexFromInventory]
    if (Helpers.isStackable(item.id)) {
        console.error('Trying to remove an instance item from a stacked item.')
        return state
    }

    state.items.splice(indexFromInventory, 1)

    return state
}
export type removeInstancePayloadType = {
    instanceId: string
}
