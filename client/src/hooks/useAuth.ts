import { useCallback } from "react";
import {useAccountStore} from "./useAccountStore";
import {signin} from "../api/requests/auth";
import ISigninCredentials from "../api/dto/sent/ISigninCredentials";
import IApiResponse from "../api/dto/responses/IApiResponse";
import ISigninData from "../api/dto/responses/ISigninData";

export enum AuthStatus {
    UNKNOWN,
    UNAUTHENTICATED,
    AUTHENTICATED
}

export function useAuth() {
    const { account, setAccount } = useAccountStore();
    
    let status;
    
    switch (account) {
        case null:
            status = AuthStatus.UNAUTHENTICATED;
            break;
        case undefined:
            status = AuthStatus.UNKNOWN;
            break;
        default:
            status = AuthStatus.AUTHENTICATED;
            break;
    }

    const login = useCallback(async (email: string, passw: string): Promise<IApiResponse<ISigninData>> => {
        const creds: ISigninCredentials = { email, passw };
        
        const response: IApiResponse<ISigninData> = await signin(creds);

        setAccount(response.data);

        return response;
    }, [setAccount]);

    return {
        status,
        login,
    };
}