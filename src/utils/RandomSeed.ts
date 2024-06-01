const seedrandom = require('seedrandom')

export const create = (seed: string) => {
    return seedrandom(seed || new Date())
}
