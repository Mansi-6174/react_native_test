import { LoginResponse, PayloadApiResponse } from "../utils/types";
import client from "./client";

const URL_LOGIN_USER = () => `auth/login`;

export const login = async (
    email: string,
    password: string,
): Promise<PayloadApiResponse<LoginResponse>> => {
    const response = await client.post<PayloadApiResponse<LoginResponse>>(
        URL_LOGIN_USER(),
        {
            username: email,
            password: password,
        }
    );
    return response.data
};
