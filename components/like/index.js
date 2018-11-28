// components/like/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    like:{
      type:Boolean,
    },
    cont:{
      type:Number
    }


  },

  /**
   * 组件的初始数据
   */
  data: {
    yes_url:'images/like.png',
    no_url:'images/like@dis.png',
    count:5

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLike:function(e){
      let like = this.properties.like
      let count= this.properties.count

      count = like?count-1:count+1
      this.setData({
        count:count,
        like:!like
      })
      console.log(this.properties.like)
      let hehavior = this.properties.like ? 'like' : 'cancle'
      this.triggerEvent('like',{
        behavior: hehavior
      },{})
    }


  }
})
