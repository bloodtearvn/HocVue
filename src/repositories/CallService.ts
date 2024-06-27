import http from "./http-common.ts";

class CallSerVice{
    LoginAppSever(): Promise<any> {
        return http.get("/tutorials");
      }
}