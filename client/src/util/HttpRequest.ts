export type HttpMethod =
  | "GET"
  | "HEAD"
  | "POST"
  | "PUT"
  | "DELETE"
  | "CONNECT"
  | "OPTIONS"
  | "TRACE"
  | "PATCH";

const DEFAULT_HEADERS = {
  "Content-Type": "application/json"
};

export default class HttpRequest {
  private request: Request;

  constructor(
    public method: HttpMethod,
    public url: string,
    private payload: RequestInit["body"] = null,
    private headers: Record<string, string> = DEFAULT_HEADERS
  ) {
    this.request = new Request(this.url, {
      method: this.method,
      body: this.payload,
      headers: this.headers
    });
  }

  public send(): Promise<Response> {
    return fetch(this.request);
  }

  public async as<T extends object>(): Promise<T> {
    return await this.send().then(r => r.json() as Promise<T>);
  }
}
