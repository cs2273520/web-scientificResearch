// pages/course/course.js
var app = getApp();
var urls = app.globalData.Testurl;
Page({

    /**
     * 页面的初始数据
     */
    data: {
        category0: ['计算机科学','理工科','金融商科','人文社科'],
        course: [  {
                            "courseCnName": "系统及信息安全方向",
                            "courseEnName": "System Security, Information Security ",
                            "id": 109,
                            "school": "麻省理工学院",
                            "enterprise": "阿里巴巴（中国）有限公司",
                            "surplus": 99,
                            "startTime": null
                        },         {
                                "courseCnName": "人工智能",
                                "courseEnName": "System Security, Information Security ",
                                "id": 109,
                                "school": "麻省理工学院",
                                "enterprise": "阿里巴巴（中国）有限公司",
                                "surplus": 99,
                                "startTime": null
                            },         {
                                    "courseCnName": "网络完全",
                                    "courseEnName": "System Security, Information Security ",
                                    "id": 109,
                                    "school": "麻省理工学院",
                                    "enterprise": "阿里巴巴（中国）有限公司",
                                    "surplus": 99,
                                    "startTime": null
                     }],
        currentView: 0,
        UpandDown:0,
        leftAndright:0,
        currentType: '',
        imgUrl: '',
     
    },
    // 顶部选择
    topChoose(e){
        console.log(e.currentTarget.dataset.choose);
        this.setData({
            leftAndright:e.currentTarget.dataset.choose,
        })
    },
    // 底部选择
    bottomChoose(e){
        this.setData({
            leftAndright:e.currentTarget.dataset.choose,
        })
    },
    // 详情页
    toCourseDetail(e) {
        let that = this
        let id = e.currentTarget.dataset.id
        let type=this.data.currentType
        wx.navigateTo({
            url: '/pages/courseDetail/courseDetail?id=' + id+'&type='+type,
        })
    },
    // 滚动页面 上下
    swiperChangeAll(e) {
        // console.log('滚动',e);
        // this.setData({
        //     currentView: e.detail.current
        // })
    },
    // 滚动页面 左右
    swiperChangeLR(e){
        this.setData({
            leftAndright: e.detail.current,
            currentType:this.data.category0[e.detail.current]
        })
        // 测试
        wx.showLoading({
          title: '加载中',
        })
        // 测试
        this.getCourse(this.data.currentType);
    },


    //图片加载
    imgLoad(e){
        // console.log(e);
        wx.hideLoading()
    },
    // 滚动到下面
    toBottom(){
        this.setData({
            UpandDown:1
        })
    },


    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        wx.setNavigationBarTitle({
            title: '课程超市'
        })
        // 测试
        wx.showLoading({
            title: '加载中'
        })
        this.setData({
            currentType:'计算机科学'
        })
        // 测试
        this.getCourse();

    },

    // 获取课程列表
    getCourse(e) {
        let that = this
        let data1;
        if (e) {
            data1 = e;
        }
        wx.showLoading({
            title: '加载中'
        })
        console.log('参数',data1);
        wx.request({
            url: urls + '/course/listCourseAndCategory',
            data: {
                category: data1
            },
            success: function (res) {
                console.log('成功',  res);
                // 设置当前课题类型
                if(res.data.data.CategoryList){
                    that.setData({
                        currentType : res.data.data.CategoryList[that.data.currentView].name
                    })
                }
                let arr = [];
                if (res.data.data.CategoryList) {
                    for (let i = 0; i < res.data.data.CategoryList.length; i++) {
                        arr.push(res.data.data.CategoryList[i].name)
                    }
                    that.setData({
                        category0: arr
                    })
                }
                // 时间处理
                for (let i = 0; i < res.data.data.CourseList.length; i++) {

                    let date = new Date(res.data.data.CourseList[i].startTime);
                    let day = date.getDate();
                    let mon = date.getMonth() + 1;
                    res.data.data.CourseList[i].startTime = mon + '月' + day + '日';

                }
                that.setData({
                    course: res.data.data.CourseList
                })
                // that.downLoadImg();
            },
            fail: function (res) {
                wx.hideLoading()
                console.log('失败原因', res);
                wx.showModal({
                    title: '获取资源失败',
                    content: '是否确认重新进入小程序？',
                    success(res) {
                        if (res.confirm) {
                            wx.reLaunch({
                                url: '/pages/courseCategory/courseCategory'
                            })
                        }
                    }
                })
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