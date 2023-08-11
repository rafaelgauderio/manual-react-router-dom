let invoices = [
    {
        name: "Rafael de Luca",
        number: 1995,
        amount: "10.800",
        due: "12/05/1995",
    },
    {
        name: "Reginaldo Souza",
        number: 1996,
        amount: "90.800",
        due: "12/05/1996",
    },
    {
        name: "Claudia da Silva",
        number: 2000,
        amount: "8.000",
        due: "10/31/2000",
    },
    {
        name: "Luciana de Luca",
        number: 2003,
        amount: "9.500",
        due: "07/22/2003",
    },
    {
        name: "Carolina Almeida",
        number: 1997,
        amount: "14.000",
        due: "09/01/1997",
    },
    {
        name: "Marlon da Silva",
        number: 1998,
        amount: "4.600",
        due: "01/27/1998",
    },
    {
        name: "Paola da Luca",
        number: 2006,
        amount: "9.600",
        due: "01/27/2006",
    },
];

export function getInvoices() {
    return invoices;
}

export function getInvoiceData(number: number) {
    return invoices.find((fatura) => (fatura.number === number)

    );
}

export function deleteInvoice(invoiceNumber: number) {
    invoices = invoices.filter(
        (invoice) => invoice.number !== invoiceNumber
    );
}