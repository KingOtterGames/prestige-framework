import * as PreviousVersion from './v0'
import * as InventoryTypes from '@modules/Inventory/_types'
import * as UpgradeTypes from '@modules/Upgrades/_types'

export interface State {
    version: number
    currencies: {
        gold: number
    }
    items: InventoryTypes.InventoryItemType[]
    achievements: string[]
    upgrades: UpgradeTypes.CurrentUpgradeType[]
}

export const DefaultSave: State = {
    version: 1,
    currencies: {
        gold: 0,
    },
    items: [],
    achievements: [],
    upgrades: [],
}

export const convertPreviousVersion = (v0: PreviousVersion.State): State => {
    return {
        version: DefaultSave.version,
        currencies: {
            gold: DefaultSave.currencies.gold,
        },
        items: DefaultSave.items,
        achievements: DefaultSave.achievements,
        upgrades: DefaultSave.upgrades,
    }
}
