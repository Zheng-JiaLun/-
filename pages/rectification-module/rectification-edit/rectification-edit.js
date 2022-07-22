
Page({
  /**
   * 页面的初始数据
   */
  data: {
    questionImgShow:true,//是否显示问题图片
    questionImgBtnShow:true,//是否显示问题图片删除按钮
    rectificationImgShow:true,//是否显示整改图片
    rectificationImgBtnShow:true,//是否显示整改图片删除按钮
    PatrolObject:["城中村","小区"], //巡查对象列表
    patrolMsg:{
      garbageCanId:'2',
      garbageCanName:'投放点名称',
      garbageCanType:'小区',
      address:'投放点地址',
      patrolType:'0',//巡查状态 0为巡查 1 已巡查
      ticketId:'1',//巡查记录ID
      ticketType:'1'//若巡查状态为1则必填 1待整改，2待审核，3已完成
    },
    questionList: [{//问题列表
      questionType: '设备设施问题',
      t:false,
      questionContent:[
        {
          "questionId":"1",
          "questionName":"投放点未实现密闭化标准桶改造...",
          t:false,
        },
        {
          "questionId":"2",
          "questionName":"投放点未实现密闭化标准桶改造...",
          t:false,
        },
        {
          "questionId":"3",
          "questionName":"投放点未实现密闭化标准桶改造...",
          t:false,
        },
      ]
    }],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log(options)
    if(options.id){//如果id存在 为修改巡查 或 审核（只能修改状态）
      if(this.data.patrolMsg.ticketType == 1){
        this.setData({rectificationImgShow:false})
      }else{
        this.setData({questionImgBtnShow:false,rectificationImgBtnShow:false})
      }
    }else{//如果id不存在 为添加巡查
      this.setData({rectificationImgShow:false})
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
  //父组件接受子组件传递信息
  timeTabChange(e){
    console.log(e)
  }
})