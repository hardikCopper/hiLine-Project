export type loginData = {
    company_code: string;
    email: string;
    password: string;
    rememberMe?: boolean;
}
export type activeTabType = { activeState: boolean, text: string }

export type jobDataType = {
    "id": number | undefined,
    "description": string | undefined,
    "date": string | undefined,
    "quantity": number | undefined,
    "invoiced": string | undefined,
    "checkboxState": boolean | undefined
}

export type modalStatesType = {
    [key: string]: boolean;
    deleteModal: boolean
}