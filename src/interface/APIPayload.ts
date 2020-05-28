import { Method } from "axios";

interface APIPayload  {
  url: string;
  headers?: Record<string, string>;
  body?: Record<string, unknown>;
  method: Method;
}

export default APIPayload;
