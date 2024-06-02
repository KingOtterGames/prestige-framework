import ReactDOM from 'react-dom/client'
import '@styles/_main.css'
import App from './App'

declare global {
    interface Window {
        api: {
            save: Function
            load: Function
            remove: Function
            db: Function
            achievement: Function
            link: Function
        }
    }
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(<App />)
