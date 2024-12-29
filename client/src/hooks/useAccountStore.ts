import { create } from "zustand";
import {combine, persist} from "zustand/middleware";
import ISigninData from "../api/dto/responses/ISigninData";

export const useAccountStore = create(
    persist(
        combine(
            {
                account: null as undefined | null | ISigninData,
            },
            (set) => ({
                setAccount: (account: ISigninData | null) => {
                    console.log(account);
                    set({ account });
                },
            })
        ),
        {
            name: "account"
        }
    )
);