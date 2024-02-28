import App from '@/App.tsx'
import '@/index.scss'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import 'rodal/lib/rodal.css'

ReactDOM.createRoot(document.getElementById('root')!).render(

  <BrowserRouter>
    <App />
  </BrowserRouter>
)
