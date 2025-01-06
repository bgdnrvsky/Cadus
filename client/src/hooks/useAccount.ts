import {useAccountStore} from "./useAccountStore";
import {useCallback} from "react";
import IUpdateRequest from "../api/dto/sent/IUpdateRequest";
import {requests} from "../api/requests/account";

export function useAccount() {
    const { account, setAccount, updateAccount } = useAccountStore();

    if (!account) {
        throw new Error("User must be authenticated when using this hook");
    }

    const email: string = account.memberEmail;
    const isAdministrator: boolean = account.admin;

    const accountUpdate = useCallback(async (info: IUpdateRequest) => {
        const response = await requests.account.updateAccount(info);

        if (response.status === 'success' && response.additionalData) {
            updateAccount(response.additionalData);
        }

        return response;
    }, [updateAccount]);

    const accountDelete = useCallback(async () => {
        const response = await requests.account.deleteAccount();

        if (response.status === 'success') {
            setAccount(null);
        }

        return response;
    }, [setAccount]);


    return {
        email,
        isAdministrator,
        accountUpdate,
        accountDelete
    };
}