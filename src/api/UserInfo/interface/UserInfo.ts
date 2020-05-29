import UserStatus from "./UserStatus";
import UserType from "./UserType";
import APIResponse from "../../interface/APIResponse";

interface UserInfo extends APIResponse {
  data: {
    user_id: number,
    user_status: UserStatus,
    user_type: UserType,
  }
}

export default UserInfo;
