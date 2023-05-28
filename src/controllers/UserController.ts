import { UserApi } from "../api/user-api"
import store from "../utils/store"
import { parseJson } from "../utils/utils"

class UserController {
    getUserAndSave = () => {
        return UserApi.getUser()
            ?.then((data: any) => store.set('user', parseJson(data.response)))
    }

    changeProfile = (data: any) => {
        const filteredData = Object.keys(data).filter(key => key !== '' && key !== 'password' && key !== 'avatar')
            .reduce((acc, curr) => ({ ...acc, [curr]: data[curr] }), {});
        return UserApi.changeProfile(filteredData)
            ?.then((data: any) => {store.set('user', parseJson(data.response))
            return data;
        })
    }

    changePassword = (data: any) => {
        const filteredData = {
            oldPassword: data.oldPassword,
            newPassword: data.password
        }
        UserApi.changePassword(filteredData);
    }

    changeAvatar = (data: any) => {
       return UserApi.changeAvatar(data)
    }
}
export default new UserController();
