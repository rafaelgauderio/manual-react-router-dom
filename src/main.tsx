import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Expenses from './routes/Expenses/index.tsx'
import Invoices from './routes/Invoices/index.tsx'
import Documents from './routes/Documents/index.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App></App>}>
          <Route path="expenses" element={<Expenses></Expenses>} />
          <Route path="invoices" element={<Invoices></Invoices>} />
          <Route path="documents" element={<Documents></Documents>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
