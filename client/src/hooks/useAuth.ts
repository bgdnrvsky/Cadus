import { useCallback } from "react";
import {useAccountStore} from "./useAccountStore";
import {requests} from "../api/requests/auth";
import ISigninCredentials from "../api/dto/sent/ISigninCredentials";
import IApiResponse from "../api/dto/responses/IApiResponse";
import ISigninData from "../api/dto/responses/ISigninData";

export enum AuthStatus {
    UNKNOWN,
    UNAUTHENTICATED,
    AUTHENTICATED_MEMBER,
    AUTHENTICATED_ADMIN
}

export function useAuth() {
    const { account, setAccount } = useAccountStore();
    
    let status: AuthStatus;
    
    switch (account) {
        case null:
            status = AuthStatus.UNAUTHENTICATED;
            break;
        case undefined:
            status = AuthStatus.UNKNOWN;
            break;
        default:
            status = account.admin ? AuthStatus.AUTHENTICATED_ADMIN : AuthStatus.AUTHENTICATED_MEMBER;
            break;
    }

    let isLoggedIn = status === AuthStatus.AUTHENTICATED_ADMIN || status === AuthStatus.AUTHENTICATED_MEMBER;

    const login = useCallback(async (email: string, passw: string): Promise<IApiResponse<ISigninData>> => {
        const creds: ISigninCredentials = { email, passw };
        
        const response: IApiResponse<ISigninData> = await requests.auth.signin(creds);

        if (response.status === 'success') {
            setAccount(response.additionalData);
        }

        return response;
    }, [setAccount]);

    const logout = useCallback(async () => {
        const response = await requests.auth.signout();

        if (response.status === 'success') {
            setAccount(null);
        }

        return response;
    }, [setAccount]);

    return {
        status,
        isLoggedIn,
        login,
        logout,
    };
}