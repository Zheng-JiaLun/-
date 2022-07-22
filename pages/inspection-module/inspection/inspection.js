// pages/inspection-module/inspection/inspection.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[
      {
        garbageCanId:'1',
        garbageCanName:'2021年8月光明街道垃圾分类',
        garbageCanType:'投放点类型',
        address:'光明区玉律街道玉塘社区玉律五区一巷',
        patrolType:'1',
        ticketId:'1',
        ticketType:'1'
      },
      {
        garbageCanId:'1',
        garbageCanName:'2021年8月光明街道垃圾分类',
        garbageCanType:'投放点类型',
        address:'光明区玉律街道玉塘社区玉律五区一巷',
        patrolType:'1',
        ticketId:'1',
        ticketType:'1'
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
  //修改巡查
  intoMsg(e){
    wx.navigateTo({
      url: '../inspection-edit/inspection-edit?id='+e.currentTarget.dataset.id,
    })
  },
  //添加巡查
  addMsg(){
    wx.navigateTo({
      url: '../inspection-edit/inspection-edit',
    })
  }
})