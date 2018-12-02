import { HTTP } from "../util/http-p";

class BookModel extends HTTP {
  constructor() {
    super();
  }
  getHostList() {
    return this.request("book/hot_list");
  }
  getMyBookCount() {
    return this.request("book/favor/count");
  }
  GetDetail(bid) {
    return this.request(
 `book/${bid}/detail`
    );
  }
  getLikeStatus(bid) {
    return this.request({
      url: `book/${bid}/favor`
    });
  }
  getComments(bid) {
    return this.request(`/book/${bid}/short_comment`);
  }
  getIntroduce(bid) {
    return this.request(`/book/${bid}/introduce`);
  }
}
export { BookModel };
