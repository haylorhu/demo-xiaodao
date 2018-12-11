// pages/my/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    authorized:false,
    userInfo:null
  },
  onGetUserInfo(event){
    console.log(event);

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.getUserInfo({
      withCredentials: false,
      success: res => {
        console.log(res)
      },
      fail: () => {},
      complete: () => {}
    }),
      function qaa(e) {
        console.log("aaaaa");
        
      };
      this.userAuthorized()
  },
  userAuthorized(){
    wx.getSetting({ 
      success: res => {

        if(this.data.authSetting){
          wx.getUserInfo({
            withCredentials: false,
            success: res => {

              this.setData({
                authorized:true,
                userInfo:userInfo
              })
            },
            fail: () => {},
            complete: () => {}
          });
        }else{

        }
      } });
  },
  onGetUserInfo(event){
    let userInfo = event.detail.userInfo
    this.setData({
      authorized:true,
      userInfo:userInfo
    })
    console.log(this.data.userInfo)
  },



  onReady: function() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {}
});
