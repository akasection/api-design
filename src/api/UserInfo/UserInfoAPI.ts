import APICaller from "../../model/APICaller";
import APIPayload from "../../interface/APIPayload";
import { Method } from "axios";
import RequestLimit from "../../decorator/RequestLimiter";
import UserInfo from "./UserInfo";
import APIResponse from "../../interface/APIResponse";

class UserInfoAPI extends APICaller implements APIPayload {
  url: string;
  method: Method;

  constructor() {
    super();
    this.url = `${this.baseURL}/api/user/info`;
    this.method = "GET";
  }

  @RequestLimit("xhr_user")
  async get(): Promise<UserInfo> {
    const resp: APIResponse<UserInfo> = await super.fetch<UserInfo>(this);
    // Add some post reflections
    return resp.data;
  }
}

export default UserInfoAPI;
