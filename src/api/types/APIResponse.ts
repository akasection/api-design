import Meta from "./Meta";
import { Basic } from "./Basic";

interface APIResponse extends Basic {
  data: Record<string, unknown>;
  meta: Meta;
}
export default APIResponse;
