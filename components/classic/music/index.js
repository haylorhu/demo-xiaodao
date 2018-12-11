// components/classic/music/index.js
const mMgr = wx.getBackgroundAudioManager();

mMgr.src =  'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E061FF02C31F716658E5C81F5594D561F2E88B854E81CAAB7806D5E4F103E55D33C16F3FAC506D1AB172DE8600B37E43FAD&fromtag=46';
mMgr.onError((err) => { // 真机调试
    console.log(err) 
})
 

import { classicBeh } from "../classic-beh";
Component({
  /**
   * 组件的属性列表
   */
  behaviors: [classicBeh],
  properties: {
    src: String,
    musicTitle: String
  },

  /**
   * 组件的初始数据
   */
  data: {
    playing: false,
    pauseSrc: "./images/player@pause.png",
    playSrc: "./images/player@play.png"
  },
  attached: function(e) {
    this._recoverStatus();
    this._monitorSwitch()
    console.log(this.data.playing);
  },
  /**
   * 组件的方法列表
   */

  methods: {
    onPlay(e) {
      if (this.data.playing === false) {
        this.setData({
          playing: !this.data.playing
        });
        mMgr.src = this.properties.src;
        mMgr.title = this.properties.musicTitle; 
        console.log(mMgr.title);
        console.log('====================================');
        console.log(mMgr.src);
        console.log('====================================');
      } else {
        this.setData({
          playing: !this.data.playing
        });
        mMgr.pause();
      }
    },
    _recoverStatus: function() {
      if (mMgr.paused) {
        this.setData({
          playing: false
        });
        return;
      }
      if (mMgr.src == this.properties.src) {
        this.setData({
          playing: true
        });
      }
    },
    _monitorSwitch: function() {
      mMgr.onPlay(() => {
        this._recoverStatus();
      });
      mMgr.onPause(() => {
        this._recoverStatus();
      });
      mMgr.onStop(() => {
        this._recoverStatus();
      });
      mMgr.onEnded(() => {
        this._recoverStatus();
      });
    }
  }
});
