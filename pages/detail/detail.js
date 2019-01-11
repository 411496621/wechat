// pages/datail/detail.js
const data = require('../../datas/list-data.js')
const result = data.list_data

Page({

  /**
   * 页面的初始数据
   */
  data: {
    listItem:{},
    isCollected:false
  },
  changedCollected(){
    const isCollected =!this.data.isCollected
    wx.showToast({
      title:isCollected?'收藏成功':'取消收藏',
      icon:'success',
      duration:1000
    })
    // 修改状态
    this.setData({
      isCollected
    })
    // 保存在缓存中
    let obj = wx.getStorageSync('isCollected')
    const index = this.data.index
    if(!obj){
      obj = {}
    }
    obj[index] = isCollected
    wx.setStorage({
      key: 'isCollected',
      data:obj,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const index = options.index
    const listItem = result[index]
    // 得到缓存的对应的isCollected的值
    const obj = wx.getStorageSync('isCollected')
    const isCollected = obj[index] ? obj[index]:false
    this.setData({
      listItem,
      index,
      isCollected
    })


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

  }
})