import { useState, useEffect, useReducer } from 'react'
import { ModuleName } from '@modules'
import * as Core from '@core'
import * as SharedTypes from '@shared/types'
import * as SharedConstants from '@shared/constants'
import * as SharedHelpers from '@shared/helpers'

function Game({ data }: SharedTypes.DataProps) {
    const [state, dispatch] = useReducer(Core.Dispatcher.reducer, data)

    useEffect(() => {
        dispatch({ func: ModuleName.actions.exampleAction, payload: {} })
    }, [])

    return (
        <div>
            <h1>{SharedConstants.PROJECT_NAME}</h1>
            <p>Save Verson: {data.version}</p>
        </div>
    )
}

export default Game
