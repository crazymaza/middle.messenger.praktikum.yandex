import { router } from "..";
import { SugninApi } from "../api/signin-api";
import { SignupApi } from "../api/signup-api";
import { UserApi } from "../api/user-api";
import { LoginFormDataInterface, RegisterFormDataInterface } from "../types/interfaces";
import { CHATS_1_PATH } from "../utils/constants";
import UserController from "./UserController";

class AuthController {
    authUser = (data: LoginFormDataInterface) => {
        const expectedData = Object.keys(data)
            .reduce((acc, curr: keyof LoginFormDataInterface) => ({ ...acc, [curr]: data[curr] }), {});
        new SugninApi().create(expectedData as LoginFormDataInterface)
            ?.then((response: any) => {
                if (response.status !== 200) {
                    throw new Error(JSON.parse(response.response).reason)
                }
                router.go(CHATS_1_PATH);
                // UserController.getUserAndSave();
            })
            .catch((err) => alert(err.message))
    }

    registerUser = (data: RegisterFormDataInterface) => {
        new SignupApi().create(data)
            ?.then((data: any) => {
                if (data.status !== 200) {
                    throw new Error(JSON.parse(data.response).reason)
                }
                return JSON.parse(data.response)
            })
            .then(({ id }: { id: number }) => {
                if (typeof id === 'number') {
                    router.go(CHATS_1_PATH);
                    UserController.getUserAndSave();
                }
            })
            .catch((err) => alert(err.message))
    }

    getUser = () => {
        return UserApi.getUser()
            ?.then((data: any) => JSON.parse(data.response))
    }

    logout = () => UserApi.logout();
}

export default new AuthController();
