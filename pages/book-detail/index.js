// pages/book-detail/index.js
import { BookModel } from "../../models/book";
let bookModel = new BookModel();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    comments: [],
    book: null,
    likStatus: false,
    likeCount: 0,
    about: "",
    posting:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let id = options.bid;
    console.log(id);

    const detail = bookModel.GetDetail(id);
    detail.then(res => {
      this.setData({
        book: res
      });
    });
    bookModel.getComments(id).then(res => {
      this.setData({
        comments: res
      });
    });
    bookModel.getIntroduce(id).then(res => {
      this.setData({
        about: res.about
      });

      console.log(this.data.comments);
    });

  },
  onFakePost:function(){
    this.setData({
      posting:true
    })
  },
  cancle:function(){
    this.setData({
      posting:false
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
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
