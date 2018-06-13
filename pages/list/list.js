// pages/list/list.js
const url = 'https://hn.algolia.com/api/v1/search_by_date?query=javascript';
import net from '../../utils/netutils.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // news from API
    newsList: [],
    //request failed
    getedData: true,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: 'loading...',
      mask: true,
    })
    let _self = this;
    function success(res) {
      let data = net.parseData(res);
      //remove the items which both 'title' and 'story_title' are null
      data.map((value,index) => {
        if( !value.title && !value.story_title){
          data.splice(index,1)
        }
      })
      
      _self.setData({
        newsList: data
      })
      wx.hideLoading();
    }
    function failed(err) {
      _self.setData({
        getedData: false
      })
    }
    net.toRequest(url).then(success, failed)

    let current_time = new Date();
    // console.log(current_time.getFullYear())
  },

 deleteItem: function (event) {
   let _id = event.currentTarget.id;
   this.showModal();
 } ,

  showModal: function ( _id ){
    let _self = this;
    wx.showModal({
      title: 'Delete',
      content: 'Do you confirm to delete this news ?',
      showCancel: true,
      cancelText: 'No',
      cancelColor: '#af9999',
      confirmText: 'Yes',
      confirmColor: '#af9999',
      success: function(res) {
        if(res.confirm){
          //delete the specified item
          _self.data.newsList.splice(_id, 1);
          _self.setData({
            newsList: _self.data.newsList
          })
        }
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  },

  goDetails: function (event) {
    let _id = event.currentTarget.id;
    let url = this.data.newsList[_id].story_url
         ? this.data.newsList[_id].story_url 
         : this.data.newsList[_id].url;
    console.log(url)
   wx.navigateTo({
     url: '../webview/webview?url='+url,
   })
  },
  

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },

  test: function () {
    
  }
})