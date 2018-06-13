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
    getedData: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let _self = this;
    function success(res) {
      let data = net.parseData(res);
      _self.setData({
        newsList: data
      })
      console.log(_self.data.newsList)
    }
    function failed(err) {
      _self.setData({
        getedData: false
      })
    }
    net.toRequest(url).then(success, failed)
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
     success: function(res) {},
     fail: function(res) {},
     complete: function(res) {},
   })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
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