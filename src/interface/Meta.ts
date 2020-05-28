import { Basic } from "./Response";

interface Meta extends Basic {
  http_status: number;
  limit?: number;
  offset?: number;
  total?: number;
}

export default Meta;
