import { useEffect } from 'react'
import * as constants from './shared/constants'

function App() {
    useEffect(() => {
        // Set Page Title
        document.title = constants.PROJECT_NAME || document.title

        // Load Data through promise
        // If found, set state correctly and patch/update
        // If didn't find, set default save
    }, [])
    return (
        <center>
            <div className="App">
                <h1>{constants.PROJECT_NAME}</h1>
                <h2>{constants.PROJECT_VERSION}</h2>
            </div>
        </center>
    )
}

export default App
