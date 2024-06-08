import * as SharedTypes from '@shared/types'
import * as Modules from '@modules'

export interface ContentType {
    Items: Modules.Inventory.types.Item[]
}

const Items = window.api.db('SELECT * FROM items')

export default {
    Items: Items,
} as ContentType
