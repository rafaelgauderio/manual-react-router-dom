import { useNavigate, useParams } from "react-router-dom";
import { deleteInvoice, getInvoiceData } from "../../../data";

import './styles.css';


const Invoice = () => {

    const params = useParams();
    const navigate = useNavigate();

    const invoice = getInvoiceData(Number(params.invoiceId));

    return (
        <>
            {
                invoice &&
                <main style={{
                    paddingLeft: "10px"
                }}>
                    <h3>Invoice number: {invoice.number}</h3>
                    <p>Invoice name:  {invoice.name}</p>
                    <p>Due date: {invoice.due}</p>
                    <p>Total due: R$ {Number(invoice.amount).toFixed(2)}</p>
                    <p>
                        <button
                            onClick={() => {
                                deleteInvoice(invoice.number);
                                navigate("/invoices" + location.search);
                            }}>Delete Invoice
                        </button>
                    </p>
                </main>
            }
        </>
    );
};

export default Invoice;