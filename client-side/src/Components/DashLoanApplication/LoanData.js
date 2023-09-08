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
    render:(LoanStatus)=>{
      if(LoanStatus=== "Approved"){
      return(
        <h6 className='text-[green] bg-[lightgreen]'>Approved</h6>
      ) 
      }else if(LoanStatus === "Pending"){
        return(<h6 className='text-[yellow] bg-[lightyellow]'> Pending</h6>)
      }else if( LoanStatus === "Failed"){
        return (<h6 className='text-red-300 bg-[lightred]'>Failed</h6>)
      }
    },
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
    LoanStatus: 'Approved',
    LoanDate: '17 Oct, 2020',
    action: <img src={del} alt='' />
  },
  {
    No:2,
    LoanID: 79214204,
    Amount: 'NGN 200,000.00',
    PhoneNumber: '+224913392374',
    LoanStatus: 'Pending',
    LoanDate: '17 Oct, 2020',
    action: <img src={del} alt=''/>
  },
  {
    No:3,
    LoanID: 79214204,
    Amount: 'NGN 200,000.00',
    PhoneNumber: '+234813392374',
    LoanStatus: 'Failed',
    LoanDate: '17 Oct, 2020',
    action: <img src={del} alt=''/>
  },
  {
    No:4,
    LoanID: 79214204,
    Amount: 'NGN 200,000.00',
    PhoneNumber: '+234813392374',
    LoanStatus: 'Failed',
    LoanDate: '17 Oct, 2020',
    action: <img src={del} alt=''/>
  },
  {
    No:5,
    LoanID: 79214204,
    Amount: 'NGN 200,000.00',
    PhoneNumber: '+234813392374',
    LoanStatus: 'Failed',
    LoanDate: '17 Oct, 2020',
    action: <img src={del} alt=''/>
  },
  {
    No:6,
    LoanID: 79214204,
    Amount: 'NGN 200,000.00',
    PhoneNumber: '+234813392374',
    LoanStatus: 'Failed',
    LoanDate: '17 Oct, 2020',
    action: <img src={del} alt=''/>
  },
  {
    No:7,
    LoanID: 79214204,
    Amount: 'NGN 200,000.00',
    PhoneNumber: '+234813392374',
    LoanStatus: 'Failed',
    LoanDate: '17 Oct, 2020',
    action: <img src={del} alt=''/>
  },
  {
    No:8,
    LoanID: 79214204,
    Amount: 'NGN 200,000.00',
    PhoneNumber: '+234813392374',
    LoanStatus: 'Failed',
    LoanDate: '17 Oct, 2020',
    action: <img src={del} alt=''/>
  },
  {
    No:9,
    LoanID: 79214204,
    Amount: 'NGN 200,000.00',
    PhoneNumber: '+234813392374',
    LoanStatus: 'Failed',
    LoanDate: '17 Oct, 2020',
    action: <img src={del} alt=''/>
  },
  {
    No:10,
    LoanID: 79214204,
    Amount: 'NGN 200,000.00',
    PhoneNumber: '+234813392374',
    LoanStatus: 'Failed',
    LoanDate: '17 Oct, 2020',
    action: <img src={del} alt=''/>
  },
  {
    No:11,
    LoanID: 79214204,
    Amount: 'NGN 200,000.00',
    PhoneNumber: '+234813392374',
    LoanStatus: 'Failed',
    LoanDate: '17 Oct, 2020',
    action: <img src={del} alt=''/>
  },
]