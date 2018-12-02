import { config } from "../project.config.js";

const tips = {
  1: "抱歉，出现了一个错误"
};

class HTTP {
  request(url,data={},method='GET'){
    console.log( url);
    
      return new Promise((resolve,reject)=>{
        this._request(url,resolve,reject,data,method)
      })
  }
  _request(url,resolve,reject,data={},method='GET') {

    wx.request({
      url: config.api_base_url + url,
      method: method,
      data:data,
      header: {
        "content-type": "application/json",
        appkey: config.appkey
      },
      success: res => {
        let code = res.statusCode.toString();

        if (code.startsWith("2")) {
         resolve(res.data);
        } else {
          reject()
          const error_code = res.data.error_code
          this._show_error(error_code)
        }
      },
      fail: () => {
        
        reject()
        wx.showToast({
          title: "错误",
          duration: 2000
        });
      }
    });
  }
  _show_error(error_code) {
    if (!error_code) {
      wx.showToast({
        title: 1
      });
    }
  }
}

export { HTTP };
