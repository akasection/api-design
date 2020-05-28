import APIPayload from "./APIPayload";
import APIResponse from "./APIResponse";

interface IAPICaller {
  baseURL: string;
  callAPI<T>(apiPayload?: APIPayload): Promise<APIResponse<T>>;
}

export default IAPICaller;
