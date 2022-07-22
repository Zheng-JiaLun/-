// pages/rectification-module/rectification/rectification.js
//整改列表页
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[
      {
        ticketId:'1',
        garbageCanName:'2022年7月光明区垃圾分类',
        garbageCanType:'小区',
        address:'光明区',
        ticketType:'1'
      },
      {
        ticketId:'1',
        garbageCanName:'2022年7月光明区垃圾分类',
        garbageCanType:'小区',
        address:'光明区',
        ticketType:'1'
      },
    ]
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
  intiMsg(e){
    wx.navigateTo({
      url: '../rectification-edit/rectification-edit?id='+e.currentTarget.dataset.id,
    })
  }
})