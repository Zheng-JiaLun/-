// pages/delivery-point/delivery-edit/delivery-edit.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    btnText:'提交',
    id:"",
    delivery:{
      garbageCanId:'1',
      garbageCanName:'投放点测试名称',
      garbageCanType:'投放点类型',
      areaName:"光明区",
      streetName:"玉塘街道",
      communityName:"玉律社区",
      housingEstate:"玉律五区",
      address:"光明区玉塘街道玉律社区五区一巷01号"
    },
    markers: [{
      latitude: 39.916527,
      longitude: 116.397128,
      name: 'T.I.T 创意园',
      desc: '我现在的位置'
    }],
    longitude:116.397128,
    latitude:39.916527,
    markers: [{
      latitude: 23.099994,
      longitude: 113.324520,
      name: '标记点位'
    }],
    array: ['美国', '中国', '巴西', '日本'],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log(options.id)
    
    let that = this
    wx.getLocation({
      type: 'gcj02', //返回可以用于 wx.openLocation 的经纬度
      success (res) {
        console.log(res)
        that.setData({
          latitude:res.latitude,
          longitude:res.longitude,
          'markers[0].latitude':res.latitude,
          'markers[0].longitude':res.longitude,
        })
      }
     })
    if(options.id){
      this.setData({id:options.id})
      wx.setNavigationBarTitle({
        title: '投放点编辑',
      })
    }else{
      wx.setNavigationBarTitle({
        title: '投放点新增',
      })
    }
    
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
  //获取中心点位置
  getCenterLatLong(){
    let mapObjs = wx.createMapContext('mapId', this) // 得到map实例对象
    mapObjs.getCenterLocation({
            success: res=>{
                console.log('p000:',res)
        
            },
            fail: res=>{
                console.log('p1111:',res)

            },
            complete: res=>{
                console.log('p222:',res)

            }
          })
  },
      // 地图移动时触发
      onRegionChange(e){
        if (e.type === 'end') { //在安卓中是 end 事件
          console.log("移动触发")
          this.getCenterLatLong()  // 地图移动时获取中心点的经纬度
        }else if(e.type ==='regionchange'){ // 在ios中是 regionchange
          console.log("移动触发")
          this.getCenterLatLong() 
        }
      },

})