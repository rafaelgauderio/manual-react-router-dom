import { Outlet, useSearchParams } from "react-router-dom";
import { getInvoices } from "../../data";
import { NavLink } from "react-router-dom";
import './styles.css';
import QueryNavLink from "../../components/QueryNavLink";

const Invoices = () => {

    const invoices = getInvoices();

    // pega os parametros da url com parametros de busca
    const [searchParams, setSearchParams] = useSearchParams();

    return (<>
        <main style={{
            padding: "1rem 1rem",
            margin: "20px",
            border: "1px solid black",
            borderRadius: "10px",
            fontFamily: "Arial"
        }}>

            <input style={{
                border: "1px solid black"
            }}                
                placeholder="Inform the name"
                value={searchParams.get("params") || ""}
                onChange={(event) => {
                    const params = event.target.value;
                    if (params) {
                        setSearchParams({ params });
                    } else {
                        setSearchParams({}); // senão tiver preenchido o parametro, setar para vazio
                    }
                }}></input>

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


                    {invoices
                        .filter((fatura) => {
                            const filter = searchParams.get("params");
                            if (!filter) {
                                return true;
                            }
                            const invoiceName = fatura.name.toLowerCase();
                            return invoiceName.includes(filter.toLowerCase());
                        })

                        .map((fatura) =>

                        (<QueryNavLink
                            className={
                                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                ({ isActive } : any) => isActive ? "nav-active" : "nav-inactive"
                            }
                            to={`/invoices/${fatura.number}`}
                            key={fatura.number}
                        >
                            {fatura.name}
                        </QueryNavLink>
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
