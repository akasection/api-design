// Implementation B

import APICaller from "./src/api/APICaller";
import APIPayload from "./src/api/interface/APIPayload";
import UserInfo from "./src/api/UserInfo/interface/UserInfo";
import UserStatus from "./src/api/UserInfo/interface/UserStatus";
import UserType from "./src/api/UserInfo/interface/UserType";

// API Adapter file
const API = new APICaller();

interface UserInfoPayload extends APIPayload {
  body: UserInfo;
}
const userAPI = {
  info: <APIPayload> {
    url: "/api/user/info",
    method: "GET",
  },
  activate: <UserInfoPayload> {
    url: "/api/user/activate",
    method: "POST",
    body: <UserInfo> {},
  }
}

Object.freeze(userAPI);

// Store/usage
const userInfo = await API.fetch<UserInfo>(userAPI.info);
console.log(userInfo.data.user_id);

const activateUser = await API.fetch<UserInfo>({
  ...userAPI.activate,
  body: {
    user_id: 1,
    user_status: UserStatus.Active,
    user_type: UserType.Solo
  },
});
console.log(activateUser.data.user_status);
