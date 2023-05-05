const DEFAULT_PAGE = 0;
// pages/projectDetails/projectDetails.js
Page({

    /**
     * 页面的初始数据
     */
    
    startPageX: 0,
    currentView: DEFAULT_PAGE,  
    data: {
        weekNum:[{num:1,intro:'教授介绍领域背景知识，分享前沿研究方向，同时学生分成3~4个小组确定科研项目选题，开始正式科研项目的推进。',title:'项目启动'},{num:4,intro:'硕/博导师帮助学生学习科研前置知识，搭建实验环境；并请行业专家分享当前课题在工业领域的应用',title:'开题汇报'},{num:8,intro:'硕/博导师跟进学生科研项目进度，与学生进行一对一的交流和讨论，提供帮助和支持',title:'中期考核'},{num:12,intro:'期刊主编向学生分享论文写作经验，讲解如何撰写高质量的论文，论文指导老师一对一指导学生精修论文并完成论文终稿',title:'结题验收'},{num:16,intro:'',title:'论文投递'}],
        colorArr: ["#1abc9c","#9b59b6","#3498db","#34495e","#f1c40f","#e74c3c","#95a5a6","#16a085","#2980b9","#8e44ad","#f39c12","#d35400","#7f8c8d",""],
        toView: `card_${DEFAULT_PAGE}`,
        startPageY:0,
        currentView:0,
    },
    touchStart(e) {
        this.data.startPageY = e.changedTouches[0].pageY;
      },
    
      touchEnd(e) {
        const moveY=e.changedTouches[0].pageY - this.data.startPageY;
        // console.log('滑动距离',moveY);
        const maxPage = this.data.weekNum.length - 1;
        // console.log(moveY);
        if(Math.abs(moveY)>30){
            if (moveY<0){
                this.setData({
                  currentView:this.data.currentView !== maxPage ? this.data.currentView + 1 : maxPage
                })
                // console.log(this.data.currentView);
          }else{
            this.setData({
                currentView:this.data.currentView !== 0 ? this.data.currentView - 1 : 0
            })
            // console.log(this.data.currentView);
          }  
        }
    
        
        this.setData({
          toView: `card_${this.data.currentView}`,
        });
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

    }
})