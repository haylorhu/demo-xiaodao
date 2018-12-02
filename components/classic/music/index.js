// components/classic/music/index.js
const mMgr = wx.getBackgroundAudioManager();

import { classicBeh } from "../classic-beh";
Component({
  /**
   * 组件的属性列表
   */
  behaviors: [classicBeh],
  properties: {
    src: String
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
