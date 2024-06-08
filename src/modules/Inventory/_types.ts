export interface InventoryItemType {
    id: string
    instanceId: string
    amount: number
}

export type Item = {
    id: string
    name: string
    type: string
    description: string
    stackable: boolean
}
