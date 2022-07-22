// pages/user-module/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userMsg:{
      userName:"郑常人",
      compellation:"郑常人",
      phoneNumber:"182****4868",
      userType:"巡查",
      areaName:"光明区",
      streetName:"玉塘街道",
      communityName:"玉律社区",
      housingEstate:"玉律五区"
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },
  loginOut(){
    wx.clearStorageSync('token')
    wx.navigateTo({
      url: '../user-login/user-login',
    })
  }
})