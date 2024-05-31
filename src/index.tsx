import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

declare global {
    interface Window {
        api: {
            save: Function
            load: Function
            delete: Function
            db: Function
            achievement: Function
        }
    }
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(<App />)
