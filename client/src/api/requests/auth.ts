import axios from "axios";
import IApiResponse from "../dto/responses/IApiResponse";
import ISignupData from "../dto/responses/ISignupData";
import ISigninData from "../dto/responses/ISigninData";
import ISigninCredentials from "../dto/sent/ISigninCredentials";
import ISignupCredentials from "../dto/sent/ISignupCredentials";


const BASE_URI: string = "http://localhost:8080";


/**
 * Do not treat expected response codes from the server as exceptions
 * @param status
 */
axios.defaults.validateStatus = status => status >= 200 && status <= 500;


export async function signup(creds: ISignupCredentials): Promise<IApiResponse<ISignupData>> {
    const endpoint: string = BASE_URI + "/signup";

    const response = await axios.post<IApiResponse<ISignupData>>(
        endpoint,
        JSON.stringify({
            "register-email": creds.email,
            "register-password": creds.passw,
            "register-password-confirm": creds.repassw,
            "accept-terms": creds.acceptedTerms
        }),
        {
            headers: {
                "Content-Type": "text/plain"
            }
        }
    );

    return response.data;
}

export async function signin(creds: ISigninCredentials): Promise<IApiResponse<ISigninData>> {
    const endpoint: string = BASE_URI + "/signin";

    const response = await axios.post<IApiResponse<ISigninData>>(
        endpoint,
        JSON.stringify({
            "login-email": creds.email,
            "login-password": creds.passw
        }),
        {
            headers: {
                "Content-Type": "text/plain"
            }
        }
    );

    return response.data;
}
