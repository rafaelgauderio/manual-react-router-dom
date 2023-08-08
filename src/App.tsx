import { Link } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>
      <h1>Tutorial projeto com a lib React Router DOM</h1>
      <nav style={{
        borderBottom: "1px solid black",
        paddingBottom: "1rem",
        marginLeft: "20px",
        fontSize: "20px",
        fontFamily: "Arial"
      }}>
        <Link to="/invoices">Invoices</Link> | {" "}
        <Link to="/expenses">Expenses</Link>
      </nav>
    </>
  )
}

export default App
