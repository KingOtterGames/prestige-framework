import { useState, useEffect } from 'react'
import * as Core from '@core'
import Content from '@content'
import * as SharedTypes from '@shared/types'
import * as SharedConstants from '@shared/constants'
import * as SharedHelpers from '@shared/helpers'

import Game from '@views/Game'

function App() {
    const [data, setData] = useState<SharedTypes.State>()

    useEffect(() => {
        // Set Page Title
        document.title = SharedConstants.PROJECT_NAME || document.title

        // Load Save Data
        Core.Saves.load().then((res: SharedTypes.State) => {
            setData(res)
        })

        // Load Content Data
        const content = Content
        console.log(content)
    }, [])
    return (
        <center>
            <div>{data && <Game data={data} />}</div>
        </center>
    )
}

export default App
