// pages/list/list.js
const url = 'https://hn.algolia.com/api/v1/search_by_date?query=javascript';
import net from '../../utils/netutils.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hidden: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
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
     function success(res) {
     let data = net.parseData(res);
  console.log(data)
  }
  function failed(err) {
    console.log(err)
  }
  net.toRequest(url).then(success,failed)
  }
})