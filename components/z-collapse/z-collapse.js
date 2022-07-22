// components/z-collapse/z-collapse.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    questList: [{
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
    originFiles: [
      {
        url: 'https://tdesign.gtimg.com/site/upload1.png',
        name: 'uploaded1.png',
        type: 'image',
      },
    ],
    gridConfig: {
      column: 4,
      width: 150,
      height: 150,
    },
    config: {
      count: 1,
    },
  },
  methods:{
    handleSuccess(e) {
      const { files } = e.detail;
      this.setData({
        originFiles: files,
      });
    },
    handleRemove(e) {
      const { index } = e.detail;
      const { originFiles } = this.data;
      originFiles.splice(index, 1);
      this.setData({
        originFiles,
      });
    },
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
  // 折叠面板
  panel: function (e) {
    this.data.questList[e.currentTarget.dataset.index].t = !this.data.questList[e.currentTarget.dataset.index].t
    this.setData({
      questList:this.data.questList
    })
    
  },
  // 折叠面板
  panel2: function (e) {
    console.log(e.currentTarget.dataset)
    this.data.questList[e.currentTarget.dataset.index1].questionContent[e.currentTarget.dataset.index].t = !this.data.questList[e.currentTarget.dataset.index1].questionContent[e.currentTarget.dataset.index].t
    this.setData({
      questList:this.data.questList
    })
    
  },
})