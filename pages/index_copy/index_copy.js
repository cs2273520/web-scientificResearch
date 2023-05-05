// pages/courseCategory/courseCategory.js
const DEFAULT_PAGE = 0;
const DEFAULT_PAGE1 = -1;
var app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        category1:[
            {proName:'A项目',pages:[{
                'proIntroduce':[' 送哦吧v哦对吧v哦不对吧v哦啊吧v哦不波v宝宝v哦送哦吧v哦对吧v哦不对吧v哦啊吧v哦不波v宝宝v哦送哦吧v哦对吧v哦不对吧v哦啊吧v哦不波v宝宝v哦送哦吧v哦对吧v哦不对吧v哦啊吧v哦不波v宝宝v哦送哦吧v哦对吧v哦不对吧v哦啊吧v哦不波v宝宝v哦送哦吧v哦对吧v哦不对吧v哦啊吧v哦不波v宝宝v哦送哦吧v哦对吧v哦不对吧v哦啊吧v哦不波v宝宝v哦',' 送哦吧v哦对吧v哦不对吧v哦啊吧v哦不波v宝宝v哦送哦吧v哦对吧v哦不对吧v哦啊吧v哦不波v宝宝v哦送哦吧v哦对吧v哦不对吧v哦啊吧v哦不波v宝宝v哦送哦吧v哦对吧v哦不对吧v哦啊吧v哦不波v宝宝v哦送哦吧v哦对吧v哦不对吧v哦啊吧v哦不波v宝宝v哦送哦吧v哦对吧v哦不对吧v哦啊吧v哦不波v宝宝v哦送哦吧v哦对吧v哦不对吧v哦啊吧v哦不波v宝宝v哦'],
            },{
                'harvest':['收获1','收获2','收获3','收获4','收获5','收获6','收获7','收获8','收获9',],
            },{
                'proPeriod':{'time':'16','research':['过程1','过程2','过程3','过程1','过程2','过程3'],'Write':['过程7'],PageIntroduction:[0,1,2]}
            }]},
            {proName:'B项目','proIntroduce':[' 送哦吧v哦对吧v哦不对吧v哦啊吧v哦不波v宝宝v哦送哦吧v哦对吧v哦不对吧v哦啊吧v哦不波v宝宝v哦送哦吧v哦对吧v哦不对吧v哦啊吧v哦不波v宝宝v哦送哦吧v哦对吧v哦不对吧v哦啊吧v哦不波v宝宝v哦送哦吧v哦对吧v哦不对吧v哦啊吧v哦不波v宝宝v哦送哦吧v哦对吧v哦不对吧v哦啊吧v哦不波v宝宝v哦送哦吧v哦对吧v哦不对吧v哦啊吧v哦不波v宝宝v哦',' 送哦吧v哦对吧v哦不对吧v哦啊吧v哦不波v宝宝v哦送哦吧v哦对吧v哦不对吧v哦啊吧v哦不波v宝宝v哦送哦吧v哦对吧v哦不对吧v哦啊吧v哦不波v宝宝v哦送哦吧v哦对吧v哦不对吧v哦啊吧v哦不波v宝宝v哦送哦吧v哦对吧v哦不对吧v哦啊吧v哦不波v宝宝v哦送哦吧v哦对吧v哦不对吧v哦啊吧v哦不波v宝宝v哦送哦吧v哦对吧v哦不对吧v哦啊吧v哦不波v宝宝v哦'],harvest:['收获1','收获2','收获3','收获4','收获5','收获6','收获7','收获8','收获9',],proPeriod:{'time':'16',research:['过程1','过程2','过程3','过程1','过程2','过程3'],Write:['过程7']}}
        
        ],
        
        toView: `card_${DEFAULT_PAGE}`,
        startPageY:0,
        startPageX:0,
        startPageY1:0,
        currentView:0,
        chooseSubIndex:0,
        showPage:true,
        isFixed:false,//页面吸顶
        indexPage:0,//当前滚动页
        toPage: `card_${DEFAULT_PAGE1}`,
        // list: ['Javascript', 'Typescript', 'Java', 'PHP', 'Go']
    },


    // 大类选择
    toTitleItem(e){
        console.log(e.currentTarget.dataset.totitleitem);
        this.setData({
            toView: `card_${e.currentTarget.dataset.totitleitem}`,
            currentView:e.currentTarget.dataset.totitleitem
        })
    },

    // 详情页
    toCourseDetail(e){
        wx.navigateTo({
          url: '/pages/courseDetail/courseDetail',
        })
    },

    //小类选择
    chooseSub(e){
        this.setData({
            chooseSubIndex:e.currentTarget.dataset.choosesub
        })
    },

    scrollTo() {
        wx.createSelectorQuery().select('#top').boundingClientRect(res => {
          wx.pageScrollTo({
            scrollTop: res.height, // 滚动到的位置（距离顶部 px）
            duration: 400 //滚动所需时间 如果不需要滚动过渡动画，设为0（ms）
          })
        }).exec()
    },
    onPageScroll(e){
        wx.createSelectorQuery().select('#top').boundingClientRect(res => {
            if(e.scrollTop>res.height-50){
               this.setData({
                   isFixed:true
               })
            }else{
                this.setData({
                    isFixed:false
                })
            }
          }).exec()

    },


    touchStart(e) {
        this.data.startPageX = e.changedTouches[0].pageX;
        this.data.startPageY = e.changedTouches[0].pageY;
        console.log('开始1',e.changedTouches[0].pageY);
      },
    
      touchEnd(e) {
        const moveX = e.changedTouches[0].pageX - this.data.startPageX;
        console.log('结束1',e.changedTouches[0].pageY);
        const moveY=e.changedTouches[0].pageY - this.data.startPageY;
        // console.log('滑动距离',moveY);
        const maxPage = this.data.category1.length - 1;
        if (Math.abs(moveX) >= 50){
            // console.log('触发横向滚动条件',moveX);
          if (moveX > 0) {
              this.setData({
                currentView:this.data.currentView !== 0 ? this.data.currentView - 1 : 0
              })
          } else {
            this.setData({
                currentView:this.data.currentView !== maxPage ? this.data.currentView + 1 : maxPage
            })
          }
        }
        console.log(Math.abs(moveY));
        if(Math.abs(moveY)>15){
            if (moveY<0){
                console.log('moveY',moveY);
                this.scrollTo()
                this.setData({
                    showPage:false
                })
              }
        }
       
        
        this.setData({
          toView: `card_${this.data.currentView}`,
          toBottom:`card_${this.data.currentLocation}`
        });
      },


      
    touchStart1(e) {
        this.data.startPageY1 = e.changedTouches[0].pageY;
      },
    touchEnd1(e) {
        const moveY=e.changedTouches[0].pageY - this.data.startPageY1;
        const maxPage1 = 2;
        console.log('滑动距离',moveY);
        if(Math.abs(moveY)>30){
            if (moveY<0){
                this.setData({
                  indexPage:this.data.indexPage !== maxPage1 ? this.data.indexPage + 1 : maxPage1
                })
          }else{
            this.setData({
                indexPage:this.data.indexPage !== -1 ? this.data.indexPage - 1 : -1
            })
          }  
        }
        this.setData({
         toPage:`card_${this.data.indexPage}`
        });
        if(this.data.indexPage==-1){
            setTimeout(()=>{
                this.setData({
                    showPage:true
                })
            },0)
     
        }
        console.log(this.data.toPage);
      },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        let url=app.globalData.Testurl
        wx.request({
          url: url+'/course/listCourseAndCategory?category=计算机科学',
          success: function(res) {
            console.log(res);
          }
        })
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