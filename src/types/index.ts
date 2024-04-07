export type UserType = {
    id: number ,
    name : string,
    phone : string,
    amount : number,
    account_no : string,
    state : string,
    township: string,
    role : string,
    }

export type TransHistoryType =  {
    id : number,
    balance : number,
    from_account : string,
    to_account : string,
    date : string,
}

export type FastAmountType = {
    id: number,
    amount : number,
    }