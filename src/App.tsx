import { useEffect } from 'react'
import * as settings from './constants/settings'

function App() {
    useEffect(() => {
        // Set Page Title
        document.title = settings.PROJECT_NAME || document.title

        // Load Data through promise
        // If found, set state correctly and patch/update
        // If didn't find, set default save
    }, [])
    return (
        <div className="App">
            <h1>{settings.PROJECT_NAME}</h1>
            <h2>{settings.PROJECT_VERSION}</h2>
        </div>
    )
}

export default App
