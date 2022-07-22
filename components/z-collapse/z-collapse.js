//自定义 多级下拉组件
Component({
  /**
  * 组件的属性列表
  */
 properties: {
  questionList:{//数据列表
    type:Array,
    value:[]
  },
  questionImgShow:{//是否显示问题图片
    type:Boolean,
    value:true
  },
  questionImgBtnShow:{//是否显示问题图片删除按钮
    type:Boolean,
    value:true
  },
  rectificationImgShow:{//是否显示整改图片
    type:Boolean,
    value:true
  },
  rectificationImgBtnShow:{//是否显示整改图片删除按钮
    type:Boolean,
    value:true
  },
  
 },
 /**
  * 页面的初始数据
  */
 data: {
   
   originFiles: [
     {
       url: 'https://tdesign.gtimg.com/site/upload1.png',
       name: 'uploaded1.png',
       type: 'image',
     },
   ],
   gridConfig: {
     column: 3,
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
   // 折叠面板
 panel(e) {
   console.log()
  this.data.questionList[e.currentTarget.dataset.index].t = !this.data.questionList[e.currentTarget.dataset.index].t
  this.setData({
    questionList:this.data.questionList
  })
  //向父组件发送信息
  this.triggerEvent('tabHandle',555)
},
// 折叠面板
panel2(e) {
  console.log(e.currentTarget.dataset)
  this.data.questionList[e.currentTarget.dataset.index1].questionContent[e.currentTarget.dataset.index].t = !this.data.questionList[e.currentTarget.dataset.index1].questionContent[e.currentTarget.dataset.index].t
  this.setData({
    questionList:this.data.questionList
  })
  
},
   
 },

 


 
})