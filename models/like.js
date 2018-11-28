import {HTTP} from '../util/http.js'

class LikeModel extends HTTP {
  like(behavior,artID,category){
    let url = behavior=='like'?'like':'like/cancle'
    this.request({
      url:url,
      method:'POST',
      data:{
        art_id:artID,
        type:category
      },
      success:(res)=>{
        console.log
      }
    })
  }
  getPrevious(index,){
    
  }
}

export {LikeModel}