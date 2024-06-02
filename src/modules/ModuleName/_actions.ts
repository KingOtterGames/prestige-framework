import * as Constants from './_constants'
import * as Helpers from './_helpers'
import * as Types from './_types'

import * as SharedConstants from '@shared/constants'
import * as SharedTypes from '@shared/types'
import * as SharedHelpers from '@shared/helpers'

export const exampleAction: SharedTypes.Action = (state: SharedTypes.State, payload: any) => {}
exampleAction.dispatch = SharedHelpers.Dispatch.format(Constants.moduleName, exampleAction)
