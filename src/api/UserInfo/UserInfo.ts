import UserStatus from "../../interface/UserStatus";
import UserType from "../../interface/UserType";
import { Basic } from "../../interface/Response";

interface UserInfo extends Basic {
  user_id: number,
  user_status: UserStatus,
  user_type: UserType,
}

export default UserInfo;
