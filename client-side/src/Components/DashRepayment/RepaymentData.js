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
    title: "Loan Duration",
    dataIndex: "LoanDuration",
    sorter:(numb1, numb2)=>{
      return(numb1.PhoneNumber > numb2.PhoneNumber)
    }
  },
  {
    title: "Status",
    dataIndex: "RepaymentStatus",
    render:(RepaymentStatus)=>{
      if(RepaymentStatus=== "Paid"){
      return(
        <h6 className='text-[#35CD8D]'>Paid</h6>
      ) 
      }else if(RepaymentStatus === "Pending"){
        return(<h6 className='text-[#FFA500]'> Pending</h6>)
      }
    },
    sorter:(paid, pending)=>{
      return(paid.RepaymentStatus !== pending.RepaymentStatus)
    }
  },
  {
    title: "Repaid Date",
    dataIndex: "RepaidDate",
    sorter:true
  },
  {
    title: "Action",
    dataIndex: "action"
  },
]
export const RepaymentData = [
  {
    No:1,
    LoanID: 79214204,
    Amount: 'NGN 10,000.00',
    LoanDuration: '2 months',
    RepaymentStatus: 'Paid',
    RepaidDate: '17 Oct, 2020',
    action: <img src={del} alt='' />
  },
  {
    No:2,
    LoanID: 79214204,
    Amount: 'NGN 200,000.00',
    LoanDuration: '12 months',
    RepaymentStatus: 'Pending',
    RepaidDate: '17 Oct, 2020',
    action: <img src={del} alt=''/>
  },
  {
    No:3,
    LoanID: 79214204,
    Amount: 'NGN 200,000.00',
    LoanDuration: '12 months',
    RepaymentStatus: 'Pending',
    RepaidDate: '17 Oct, 2020',
    action: <img src={del} alt=''/>
  },
  {
    No:4,
    LoanID: 79214204,
    Amount: 'NGN 200,000.00',
    LoanDuration: '2 years',
    RepaymentStatus: 'Pending',
    RepaidDate: '17 Oct, 2020',
    action: <img src={del} alt=''/>
  },
  {
    No:5,
    LoanID: 79214204,
    Amount: 'NGN 200,000.00',
    LoanDuration: '2 years',
    RepaymentStatus: 'Pending',
    RepaidDate: '17 Oct, 2020',
    action: <img src={del} alt=''/>
  },
  {
    No:6,
    LoanID: 79214204,
    Amount: 'NGN 200,000.00',
    LoanDuration: '6 months',
    RepaymentStatus: 'Pending',
    RepaidDate: '17 Oct, 2020',
    action: <img src={del} alt=''/>
  },
  {
    No:7,
    LoanID: 79214204,
    Amount: 'NGN 200,000.00',
    LoanDuration: '8 months',
    RepaymentStatus: 'Pending',
    RepaidDate: '17 Oct, 2020',
    action: <img src={del} alt=''/>
  },
  {
    No:8,
    LoanID: 79214204,
    Amount: 'NGN 200,000.00',
    LoanDuration: '4 months',
    RepaymentStatus: 'Paid',
    RepaidDate: '17 Oct, 2020',
    action: <img src={del} alt=''/>
  },
  {
    No:9,
    LoanID: 79214204,
    Amount: 'NGN 200,000.00',
    LoanDuration: '10 months',
    RepaymentStatus: 'Paid',
    RepaidDate: '17 Oct, 2020',
    action: <img src={del} alt=''/>
  },
  {
    No:10,
    LoanID: 79214204,
    Amount: 'NGN 200,000.00',
    LoanDuration: '7 months',
    RepaymentStatus: 'Paid',
    RepaidDate: '17 Oct, 2020',
    action: <img src={del} alt=''/>
  },
  {
    No:11,
    LoanID: 79214204,
    Amount: 'NGN 200,000.00',
    LoanDuration: '9 months',
    RepaymentStatus: 'Paid',
    RepaidDate: '17 Oct, 2020',
    action: <img src={del} alt=''/>
  },
]