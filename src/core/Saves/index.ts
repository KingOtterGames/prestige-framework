import * as SharedConstants from '@shared/constants'
import * as SharedTypes from '@shared/types'
import * as SharedHelpers from '@shared/helpers'

import cloneDeep from 'lodash.clonedeep'

import * as V0 from '@shared/versions/v0'
import * as V1 from '@shared/versions/v1'

export const load = (): Promise<SharedTypes.State> => {
    return new Promise<SharedTypes.State>((res, rej) => {
        window.api.load().then((json: object) => {
            if (json) res(patch(version(json as SharedTypes.State), SharedConstants.DefaultSave as object) as SharedTypes.State)
            res(cloneDeep(SharedConstants.DefaultSave))
        })
    })
}

export const save = (state: SharedTypes.State): void => {
    window.api.save(state)
}

export const remove = () => {
    window.api.remove()
}

export const patch = (json: object, defaultJSON: object): object => {
    function isObject(item: any) {
        return item && typeof item === 'object' && !Array.isArray(item)
    }

    for (let key in json) {
        if (!defaultJSON.hasOwnProperty(key)) {
            delete json[key as keyof object]
        } else if (isObject(json[key as keyof object]) && isObject(defaultJSON[key as keyof object])) {
            patch(json[key as keyof object], defaultJSON[key as keyof object])
        }
    }

    for (let key in defaultJSON) {
        if (!json.hasOwnProperty(key)) {
            json[key as keyof object] = defaultJSON[key as keyof object]
        } else if (isObject(json[key as keyof object]) && isObject(defaultJSON[key as keyof object])) {
            patch(json[key as keyof object], defaultJSON[key as keyof object])
        }
    }
    return json
}

export const version = (json: SharedTypes.State): SharedTypes.State => {
    let state = json

    // Version 0 to 1
    if (state.version === 0) {
        state = cloneDeep(V1.convertPreviousVersion(state as V0.State))
    }

    return state
}
