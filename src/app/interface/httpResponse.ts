export interface AppHttpResponse<T = any> {
  codeError?: string;
  data?: T;
}
