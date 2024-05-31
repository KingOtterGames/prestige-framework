import React, { useEffect, useState } from 'react'
import './App.css'

function App() {
    const [data, setData] = useState([])

    useEffect(() => {
        window.api.save({ data: 'testing a save' })
    }, [])

    return (
        <div className="App">
            <header className="App-header">
                {data.map((row, i) => {
                    return <p key={'row-' + i}>{JSON.stringify(row)}</p>
                })}
            </header>
        </div>
    )
}

export default App
