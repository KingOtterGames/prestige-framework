import { useState, useEffect } from 'react'
import { ModuleName } from '@modules'
import * as Core from '@core'
import * as Types from '@shared/types'
import * as Constants from '@shared/constants'
import * as Helpers from '@shared/helpers'

function Game({ state, dispatch }: Types.Props) {
    console.log(ModuleName.actions.exampleAction.dispatch)
    useEffect(() => {}, [])

    return <div></div>
}

export default Game
