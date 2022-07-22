// pages/delivery-point/delivery-point/delivery-point.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[
      {
        garbageCanId:'1',
        garbageCanName:'投放点测试名称',
        garbageCanType:'投放点类型',
        areaName:"光明区",
        streetName:"玉塘街道",
        communityName:"玉律社区",
        housingEstate:"玉律五区",
        address:"光明区玉塘街道玉律社区五区一巷01号"
      }
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
  // 编辑投放点
  intiMsg(e){
    wx.navigateTo({
      url: '../delivery-edit/delivery-edit?id='+e.currentTarget.dataset.id,
    })
  },
  // 新增投放点
  addDelivery(){
    wx.navigateTo({
      url: '../delivery-edit/delivery-edit',
    })
  }
})