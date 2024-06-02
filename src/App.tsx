import { useEffect } from 'react'
import * as Constants from '@shared/constants'
import * as Core from '@core'

function App() {
    useEffect(() => {
        // Set Page Title
        document.title = Constants.PROJECT_NAME || document.title

        // Core.Saves.save({ version: '10000000' })

        // Load Data through promise
        Core.Saves.load().then((data) => {
            console.log(data)
        })

        // If found, set state correctly and patch/update
        // If didn't find, set default save
    }, [])
    return (
        <center>
            <div className="App">
                <h1>{Constants.PROJECT_NAME}</h1>
                <h2>{Constants.PROJECT_VERSION}</h2>
            </div>
        </center>
    )
}

export default App
