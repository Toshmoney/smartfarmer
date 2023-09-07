import del from '../../Images/del.svg'

export const columns = [
  {
    title:'No',
    dataIndex:'No'
  },
  {
    title: "Loan ID No",
    dataIndex: "LoanID"
  },
  {
    title: "Amount",
    dataIndex: "Amount",
    sorter:true
  },
  {
    title: "Phone Number",
    dataIndex: "PhoneNumber",
    sorter:(numb1, numb2)=>{
      return(numb1.PhoneNumber > numb2.PhoneNumber)
    }
  },
  {
    title: "Status",
    dataIndex: "LoanStatus",
    sorter:true
  },
  {
    title: "Loan Date",
    dataIndex: "LoanDate",
    sorter:true
  },
  {
    title: "Action",
    dataIndex: "action"
  },
]
export const LoandData = [
  {
    No:1,
    LoanID: 79214204,
    Amount: 'NGN 200,000.00',
    PhoneNumber: '+234913392374',
    LoanStatus: 'Pending',
    LoanDate: '17 Oct, 2020',
    action: <img src={del}/>
  },
  {
    No:1,
    LoanID: 79214204,
    Amount: 'NGN 200,000.00',
    PhoneNumber: '+224913392374',
    LoanStatus: 'Pending',
    LoanDate: '17 Oct, 2020',
    action: <img src={del}/>
  },
  {
    No:1,
    LoanID: 79214204,
    Amount: 'NGN 200,000.00',
    PhoneNumber: '+234813392374',
    LoanStatus: 'Pending',
    LoanDate: '17 Oct, 2020',
    action: <img src={del}/>
  },
]