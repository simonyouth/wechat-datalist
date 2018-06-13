import util from './util.js';
/**
 * promise, network request
 */
function toRequest(url){
  let p = new Promise((resolve, reject) => {
    wx.request({
      url: url,
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function (res) {
        resolve(res)
      },
      fail: function (res) {
        reject(res)
      },
      complete: function (res) { },
    })
  });
  return p;
}
/**
 * parse the returned data
 */
function parseData (res) {
  let data = res.data.hits;

  let neatData = new Array(data.length);  
  //initialize undefined item in neatData 
      neatData.fill(new Object());
      data.map((value,index) => {
        let obj = new Object();
        obj.authors = value.author;
        obj.title = value.title;
        obj.story_title = value.story_title;
        obj.story_url = value.story_url;
        obj.url = value.url;
        obj.create_at = util.transTime(value.created_at);
        neatData[index] = obj;
       
        //because of Closure,will cover the previous time result
        // neatData[index].create_at = value.created_at;
      })
     
  return neatData;
}
module.exports = {
  toRequest: toRequest,
  parseData: parseData
}