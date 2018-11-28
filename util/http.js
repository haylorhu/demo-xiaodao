import {config} from '../project.config.js'

const tips ={
  1:'抱歉，出现了一个错误'
}

 class HTTP{
  request(parames){
    if(!parames.method){
      parames.method="GET"
    }
    wx.request({
      url: config.api_base_url+parames.url,
      method:parames.method,
      data:{
        'content-type':'application/json',
        'appkey':config.appkey
      },
      success:(res)=>{
        let code = res.statusCode.toString()

        if(code.startsWith('2')){
          parames.success && parames.success(res.data)
        }
        else{
          let error_code = res.data.error_code
          wx.showToast({
            title: '错误',
            duration:2000
          })
        }
      },
      fail:()=>{
        wx.showToast({
          title: '错误',
          duration: 2000
        })
      }
    })
  }
  _show_error(error_code){
    if(!error_code){
      wx.showToast({
        title: 1,
      })
    }
  }
}

export {HTTP}