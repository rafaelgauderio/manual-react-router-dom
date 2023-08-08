import { Link, Outlet } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>
      <h1>Tutorial projeto com a lib React Router DOM</h1>
      <nav style={{        
        margin: "0",
        paddingBottom: "1rem",
        paddingTop: "1rem",
        paddingLeft: "20px",       
        fontSize: "20px",
        fontFamily: "Arial",
        backgroundColor: "#add8e6"
      }}>
        <Link to="/invoices">Invoices</Link> | {"  "}
        <Link to="/expenses">Expenses</Link> | {"  "}
        <Link to="documents">Documents</Link>
      </nav>
      <Outlet></Outlet>
    </>
  )
}

export default App
