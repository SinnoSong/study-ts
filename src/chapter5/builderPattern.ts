class RequestBuilder {
  private data: object | null = null;
  private url: string | null = null;
  private method: "get" | "post" | null = null;

  setUrl(url: string): this {
    this.url = url;
    return this;
  }
  setMethod(method: "get" | "post"): this {
    this.method = method;
    return this;
  }
  setBody(data: object): this {
    this.data = data;
    return this;
  }
  send(): void {}
}

new RequestBuilder()
  .setUrl("https://example.com")
  .setMethod("post")
  .setBody({ foo: "bar" })
  .send();
export {};
