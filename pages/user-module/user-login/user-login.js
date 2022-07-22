// pages/user-module/user-login.js
import Toast from 'tdesign-miniprogram/toast/index';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userName:"",
    passWord:"",
    value:true
  },
  checkboxChange(e){
    console.log(e)
    let length = e.detail.value.length
    if(length == 1){
      wx.setStorageSync('remember', 1)
    }else{
      wx.setStorageSync('remember', 0)
    }
    console.log(wx.getStorageSync('remember')) 
  },
  userLogin(){
    // this.data.value = false
    this.setData({value:false})
    console.log(this.userName)
    console.log(this.data.value)
    if(this.data.userName == "" || this.data.passWord == "" ){
      console.log('222')
      Toast({
        context: this,
        selector: '#t-toast',
        message: '账号密码不能为空',
      });
    }else{
      
      wx.switchTab({
        url: '../user/user',
      })
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
    let remember = wx.getStorageSync('remember')
    wx.getStorage({
      key:"remember",
      success: (result) => {
        if(remember && remember == 1){
          this.setData({value:true})
        }else{
          this.setData({value:false})
        }
      },
    })
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

  }
})