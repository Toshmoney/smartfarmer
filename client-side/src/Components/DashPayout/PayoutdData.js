import del from '../../Images/del.svg'

export const columns = [
    {
        title: "No",
        dataIndex: 'No'
    },
    {
        title: "Recipient Name",
        dataIndex: 'RecipientName'
    },
    {
        title: "Bank Name",
        dataIndex: 'BankName'
    },
    {
        title: "Amount",
        dataIndex: 'Amount'
    },
    {
        title: "Date",
        dataIndex: 'Date'
    },
    {
        title: "Action",
        dataIndex: 'Action'
    }
]

export const PayoutData = [
    {
        No: 1,
        RecipientName: 'Ibrahim Abdulsalam',
        BankName: 'WEMA Bank',
        Amount: 'NGN 200,000',
        Date: '26 March, 2023',
        Action: <img src={del} alt=''/> 
    },
]