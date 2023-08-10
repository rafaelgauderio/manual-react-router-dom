import { Outlet } from "react-router-dom";
import { getInvoices } from "../../data";
import { NavLink } from "react-router-dom";
import './styles.css';

const Invoices = () => {

    const invoices = getInvoices();

    return (<>
        <main style={{
            padding: "1rem 1rem",
            margin: "20px",
            border: "1px solid black",
            borderRadius: "10px",
            fontFamily: "Arial"
        }}>
            <h2 style={{
                margin: "10px",
                textAlign: "left"
            }}>Invoices</h2>
            <div style={{
                display: "flex"
            }}>
                <nav style={{
                    borderRight: "1.5px solid black",
                    padding: "1rem",
                }}>
                    {invoices.map((fatura) =>

                    (<NavLink
                        className={
                            ({ isActive}) => isActive ? "nav-active" : "nav-inactive"
                        }
                        to={`/invoices/${fatura.number}`}
                        key={fatura.number}
                    >
                        {fatura.name}
                    </NavLink>
                    )
                    )}
                </nav>
                {/* sub route with data from each invoice*/}
                <Outlet></Outlet>
            </div>
        </main>

    </>
    );
};

export default Invoices;
