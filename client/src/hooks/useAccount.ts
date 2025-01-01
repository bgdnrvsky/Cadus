import {useAccountStore} from "./useAccountStore";

export function useAccount() {
    const { account } = useAccountStore();

    if (!account) {
        throw new Error("User must be authenticated when using this hook");
    }

    return {
        account
    };
}