export type inventoryTabsType = {
    log: boolean;
    add: boolean;
    return: boolean;
    [key: string]: boolean;
}

export type loginData = {
    company_code: string;
    email: string;
    password: string;
    rememberMe?: boolean;
}

// export type JobData = {
//     id: number | undefined,
//     description: string | undefined,
//     date: string | undefined,
//     quantity: number | undefined,
//     invoiced: string | undefined
// }