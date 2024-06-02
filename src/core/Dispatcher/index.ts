import * as Modules from '@modules'
import * as SharedConstants from '@shared/constants'
import * as SharedTypes from '@shared/types'
import * as SharedHelpers from '@shared/helpers'

import * as Types from './_types'

export const reducer = (state: SharedTypes.State, action: Types.Action): SharedTypes.State => {
    return action.func(state, action.payload)
}

export const update = () => {}

export const fixedUpdate = () => {}
