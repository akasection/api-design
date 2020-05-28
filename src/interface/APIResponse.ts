import Meta from "./Meta";
import { Basic } from "./Response";

interface APIResponse<T> extends Basic {
  data: T;
  meta: Meta;
}
export default APIResponse;
