import APICaller from "../APICaller";
import APIPayload from "../types/APIPayload";
import { Method } from "axios";
import RequestLimit from "../../decorator/RequestLimit";
import UserInfo from "./types/UserInfo";

class UserInfoAPI extends APICaller implements APIPayload {
  url = `${this.baseURL}/api/user/info`;
  method: Method = "GET";

  constructor() {
    super();
  }

  @RequestLimit("xhr_user")
  async get(): Promise<UserInfo> {
    const resp: UserInfo = await super.fetch<UserInfo>(this);
    // TODO: Add some data transformation here

    return resp;
  }
}

export default UserInfoAPI;
