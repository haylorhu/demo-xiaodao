import { HTTP } from "../util/http.js";

class ClassicModel extends HTTP {
  getLateset(sCallback) {
    this.request({
      url: "classic/latest",
      success: res => {
        sCallback(res);
        this._setLatesrIndex(res.index);
      }
    });
  }
  getClassic(index, change, sCallback) {
    console.log(change);
    let key = this._getKey(index)
    let classic = wx.getStorageSync(key);
    
    console.log(key);
    console.log(classic);
    if (!classic) {
      this.request({
        url: "classic/" + index,
        success: res => {
          wx.setStorageSync(this._getKey(res.index), res);
          sCallback(res);
        }
      });
    } else {
      sCallback(classic);
    }
  }

  isFirst(index) {
    return index == 0 ? true : false;
  }
  isLatest(index) {
    let latestIndex = this._getLatestIndex();
    return index === 7 ? true : false;
  }
  _setLatesrIndex(index) {
    wx.setStorageSync("latest", index);
  }
  _getLatestIndex() {
    let index = wx.getStorageSync("latest");
    return index;
  }
  _getKey(index) {
    let key = "classic-" + index;
    return key;
  }
}

export { ClassicModel };
