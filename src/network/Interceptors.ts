/* eslint-disable @typescript-eslint/no-explicit-any */
import { RESPONSE_CODE } from "./config";

export const AccessTokenInterceptor = {
  addAccessToken: (config: any) => {
    // if (token) {
    //   const headers = {
    //     ...config.headers,
    //     Authorization: `Bearer ${token}`,
    //   };
    //   config.headers = headers;
    // }
    return config;
  },
  onRejected: (error: any) => {
    console.log("onRejected AccessTokenInterceptor");
    // return Promise.reject(error);
    return Promise.resolve(error);
  },
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
let timeStart = 0;
// let messageResponse = '';
export const LogInterceptor = {
  requestLog: (config: any) => {
    timeStart = new Date().getTime();
    return config;
  },

  requestError: (error: any) => {
    console.log("onRejected LogInterceptor");
    return Promise.resolve(error);
  },

  responseLog: (response: any) => {
    return response;
  },

  responseError: (error: any) => {
    const { config, response } = error;

    if (response) {
      console.log(
        `<<< ${config?.method}: ${config?.url} status:${response?.status}`
      );
      console.log("responseError: ", response?.data);
      return Promise.resolve(response);
    } else {
      console.log(`<<< ${config.method}: ${config.url}`);
      console.log("network log error", error);
      return Promise.resolve({
        status: response?.status ?? RESPONSE_CODE.INTERNAL_SERVER_ERROR,
        error: "Có lỗi xảy ra!!!",
      });
    }
  },
};
// let timeoutRef: any = null;
