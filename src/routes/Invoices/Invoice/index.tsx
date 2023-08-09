import { useParams } from "react-router-dom";
import { getInvoiceData } from "../../../data";

import './styles.css';


const Invoice = () => {

    const params = useParams();

    const invoice = getInvoiceData(Number(params.invoiceId));

    return (
        <>
            {
                invoice &&
                <main style={{
                    paddingLeft: "10px"                    
                }}>
                    <h2>Invoice number: {invoice.number}</h2>
                    <p>Invoice name:  {invoice.name}</p>
                    <p>Due date: {invoice.due}</p>
                    <p>Total due: R$ {Number(invoice.amount).toFixed(2)}</p>
                </main>
            }
        </>
    );
};

export default Invoice;