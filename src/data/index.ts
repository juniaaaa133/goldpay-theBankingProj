import { FastAmountType, TransHistoryType, UserType } from "@/types"

export const dummy_history_data :TransHistoryType[] = [
    {
        id: 1,
        balance : 5000,
        from_account : 'Kyaw Kyaw',
        to_account : "John Pork",
        date : '15.2.23'
    },
    {
        id: 1,
        balance : 5000,
        from_account : 'Kyaw Kyaw',
        to_account : "John Pork",
        date : '15.2.23'
    },
]

export const dummy_users : UserType[] = [
{
  id: 1, 
  name : "Rein Ogga Myo",
  phone : '09953523241',
  amount : 30000,
  account_no : 'AVS#4idi88',
  state : "Yangon",
  township : "South Okkalapa",
  role : "User"
},
{
  id: 5, 
  name : "William Jack",
  phone : '09420076653',
  amount : 200000,
  account_no : 'ss&f9888',
  state : "Yangon",
  township : "North Dagon",
  role : "User"
},
{
  id: 51, 
  name : "Mrs. Rose",
  phone : '09987746109',
  amount : 5500,
  account_no : '4FF4021',
  state : "Yangon",
  township : "South Dagon",
  role : "User"
},
{
  id: 52, 
  name : "Kyaw Zaya",
  phone : '09798864772',
  amount : 90000,
  account_no : 'DF9383ls8',
  state : "Yangon",
  township : "South Okkalapa",
  role : "User"
},
{
  id: 54, 
  name : "Nwe",
  phone : '09792287345',
  amount : 80000,
  account_no : 'F439888',
  state : "Yangon",
  township : "South Okkalapa",
  role : "User"
},
]

export const dummy_fast_amount : FastAmountType[] = [
  {
    id: 1,
    amount : 10000,
  },
  {
    id: 2,
    amount : 20000,
  },
  {
    id: 3,
    amount : 50000,
  },
  {
    id: 4,
    amount : 100000,
  },
  {
    id: 5,
    amount : 300000,
  },
  {
    id: 6,
    amount : 800000,
  },
]