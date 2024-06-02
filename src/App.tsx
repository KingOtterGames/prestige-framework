import { useState, useEffect } from 'react'
import * as Core from '@core'
import * as SharedTypes from '@shared/types'
import * as SharedConstants from '@shared/constants'
import * as SharedHelpers from '@shared/helpers'

import Game from '@views/Game'

function App() {
    const [data, setData] = useState<SharedTypes.State>()

    useEffect(() => {
        // Set Page Title
        document.title = SharedConstants.PROJECT_NAME || document.title

        // Load Data through promise
        Core.Saves.load().then((res: SharedTypes.State) => {
            setData(res)
        })
    }, [])
    return (
        <center>
            <div>{data && <Game data={data} />}</div>
        </center>
    )
}

export default App
