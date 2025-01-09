import {resolveEndpoint} from "./endpoints";
import axios from "axios";
import IApiResponse from "../dto/responses/IApiResponse";
import IUpdatedData from "../dto/responses/IUpdatedData";
import IUpdateRequest from "../dto/sent/IUpdateRequest";


export namespace requests {
    export namespace account {
        export async function updateAccount(info: IUpdateRequest) {
            const endpoint: string = resolveEndpoint("/api/account/update");

            const response = await axios.put<IApiResponse<IUpdatedData>>(
                endpoint,
                JSON.stringify({
                    "new-email": info.newEmail,
                    "old-password": info.oldPassword,
                    "new-password": info.newPassword
                }),
                {
                    withCredentials: true,
                    headers: {
                        "Content-Type": "text/plain"
                    }
                }
            );

            return response.data;
        }

        export async function deleteAccount() {
            const endpoint: string = resolveEndpoint("/api/account/delete");

            const response = await axios.delete<IApiResponse<null>>(
                endpoint,
                {
                    withCredentials: true,
                }
            );

            return response.data;
        }
    }
}