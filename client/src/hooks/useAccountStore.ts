import { create } from "zustand";
import {combine, persist} from "zustand/middleware";
import ISigninData from "../api/dto/responses/ISigninData";
import IUpdatedData from "../api/dto/responses/IUpdatedData";

export const useAccountStore = create(
    persist(
        combine(
            {
                account: null as undefined | null | ISigninData,
            },
            (set) => ({
                setAccount: (account: ISigninData | null) => {
                    set({ account });
                },
                updateAccount: (updatedFields: IUpdatedData) => {
                    set((state) => ({
                        account: state.account
                            ? { ...state.account, memberEmail: updatedFields.memberEmail }
                            : null, // Keep null if no account exists
                    }));
                },
            })
        ),
        {
            name: "account",
        }
    )
);