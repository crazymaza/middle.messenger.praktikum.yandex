import { router } from "..";
import { SugninApi } from "../api/signin-api";
import { SignupApi } from "../api/signup-api";
import { UserApi } from "../api/user-api";
import { LoginFormDataInterface, RegisterFormDataInterface } from "../types/interfaces";
import { CHATS_1_PATH } from "../utils/constants";
import { parseJson } from "../utils/utils";
import UserController from "./UserController";

class AuthController {
    authUser = (data: LoginFormDataInterface) => {
        const expectedData = Object.keys(data)
            .reduce((acc, curr: keyof LoginFormDataInterface) => ({ ...acc, [curr]: data[curr] }), {});
        new SugninApi().create(expectedData as unknown as LoginFormDataInterface)
            ?.then((response: any) => {
                if (response.status !== 200) {
                    throw new Error(parseJson(response.response).reason)
                }
                UserController.getUserAndSave();
                router.go(CHATS_1_PATH);
            })
            .catch((err) => {
                if (err.message === "User already in system") {
                    UserController.getUserAndSave();
                    router.go(CHATS_1_PATH);
                } else {
                    alert(err.message)
                }
            })
    }

    registerUser = (data: RegisterFormDataInterface) => {
        new SignupApi().create(data)
            ?.then((data: any) => {
                if (data.status !== 200) {
                    throw new Error(parseJson(data.response).reason)
                }
                return parseJson(data.response);
            })
            .then(({ id }: { id: number }) => {
                if (typeof id === 'number') {
                    UserController.getUserAndSave()
                    router.go(CHATS_1_PATH)
                }
            })
            .catch((err) => alert(err.message))
    }

    getUser = () => {
        return UserApi.getUser()
            ?.then((data: any) => parseJson(data.response))
    }

    logout = () => UserApi.logout();
}

export default new AuthController();
