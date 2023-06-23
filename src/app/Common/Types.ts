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

export type userDataType = {
    "id": number,
    "name": string,
    "email": string,
    "role": string,
    "password": string,
    "status": boolean,
    "checkboxState": boolean
}

export type modalStatesType = {
    [key: string]: boolean;
    deleteModal: boolean
}
export type isEmptyType = {
    [controlName: string]: boolean;
    companyCode: boolean,
    email: boolean,
    password: boolean
}