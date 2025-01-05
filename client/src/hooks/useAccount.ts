import {useAccountStore} from "./useAccountStore";
import {useCallback} from "react";
import {deleteAccount} from "../api/requests/auth";

export function useAccount() {
    const { account, setAccount } = useAccountStore();

    if (!account) {
        throw new Error("User must be authenticated when using this hook");
    }

    const email: string = account.memberEmail;
    const isAdministrator: boolean = account.admin;

    const accountDelete = useCallback(async () => {
        const response = await deleteAccount();

        if (response.status === 'success') {
            setAccount(null);
        }

        return response;
    }, [setAccount]);

    return {
        email,
        isAdministrator,
        accountDelete
    };
}