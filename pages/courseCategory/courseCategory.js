// pages/courseCategory/courseCategory.js
const DEFAULT_PAGE = 0;
var app = getApp();
var urls = app.globalData.Testurl;
Page({

    /**
     * 页面的初始数据
     */
    startPageX: 0,
    currentView: DEFAULT_PAGE,
    isLoading: false, //图片加载

    imgUrl2: '', //第二张图片缓存
    data: {
        category0: ['计算机科学','金融商科','理工科','人文社科'],
        course: [{
            'courseName': '系统及信息安全方向',
            'EName':'System Security',
            'startTime': '5月6日',
            'school': '麻省理工学院',
            'enterprise': '阿里巴巴（中国）有限公司',
            'Surplus': '99'
        }, 
        {
            'courseName': '系统及信息安全方向',
            'EName':'System Security',
            'startTime': '5月6日',
            'school': '麻省理工学院',
            'enterprise': '阿里巴巴（中国）有限公司',
            'Surplus': '99'
        }, {
            'courseName': '系统及信息安全方向',
            'EName':'System Security',
            'startTime': '5月6日',
            'school': '麻省理工学院',
            'enterprise': '阿里巴巴（中国）有限公司',
            'Surplus': '99'
        }, {
            'courseName': '系统及信息安全方向',
            'EName':'System Security',
            'startTime': '5月6日',
            'school': '麻省理工学院',
            'enterprise': '阿里巴巴（中国）有限公司',
            'Surplus': 99
        }],
        // category0: [],
        // course: [],
        toView: `card_${DEFAULT_PAGE}`,
        startPageY: 0,
        startPageX: 0,
        currentView: 0,
        chooseSubIndex: 0,
        isFixed: false, //页面吸顶
        showDialog: false, //弹出框
        dialogTitle: "提示",
        dialogContent: "请登录查看课程详情!",
        allImg1Loading: 0, //大图加载数量
    },
    // 图片加载完毕触发事件
    onImageLoad() {
        wx.hideLoading()
        let res1 = this.data.allImg1Loading;
        res1 = res1 + 1
        this.setData({
            isLoading: false,
            allImg1Loading: res1
        })

        if (this.data.allImg1Loading == this.data.category0.length) {
            wx.hideLoading()
        }
    },
    // 图片加载失败
    onImageError() {
        wx.hideLoading()
        this.setData({
            isLoading: false
        })

        wx.hideLoading()
        wx.showModal({
            title: '提示',
            content: '资源数据失败',
            success(res) {
                if (res.confirm) {
                    console.log('用户点击了确定按钮')
                } else if (res.cancel) {
                    console.log('用户点击了取消按钮')
                }
            }
        })
    },


    // 大类选择
    toTitleItem(e) {
        this.setData({
            toView: `card_${e.currentTarget.dataset.totitleitem}`,
            currentView: e.currentTarget.dataset.totitleitem
        })
        this.getCourse(this.data.category0[e.currentTarget.dataset.totitleitem])
    },



    // dialout传值过来
    fromDialogData(e) {
        console.log(e.detail.showDialog);
        this.setData({
            showDialog: e.detail.showDialog
        })
    },

    // 详情页
    toCourseDetail(e) {
        let that = this
        let id = e.currentTarget.dataset.id
        let type=this.data.category0[this.data.currentView]
        wx.navigateTo({
            url: '/pages/courseDetail/courseDetail?id=' + id+'&type='+type,
        })
    },

    // 滚动到
    scrollTo() {
        wx.createSelectorQuery().select('#top').boundingClientRect(res => {
            wx.pageScrollTo({
                scrollTop: res.height,
                duration: 400
            })
        }).exec()
    },
    onPageScroll(e) {
        wx.createSelectorQuery().select('#top').boundingClientRect(res => {
            if (e.scrollTop > res.height - 50 && e.scrollTop > 200) {
                this.setData({
                    isFixed: true
                })
            } else {
                this.setData({
                    isFixed: false
                })
            }
        }).exec()

    },
    touchStart(e) {
        this.data.startPageX = e.changedTouches[0].pageX;
        this.data.startPageY = e.changedTouches[0].pageY;
        // console.log('开始',e.changedTouches[0].pageY);
    },

    touchEnd(e) {
        const moveX = e.changedTouches[0].pageX - this.data.startPageX;
        const moveY = e.changedTouches[0].pageY - this.data.startPageY;
        const maxPage = this.data.category0.length - 1;
        if (Math.abs(moveX) >= 80) {
            if (moveX > 0) {
                this.setData({
                    currentView: this.data.currentView !== 0 ? this.data.currentView - 1 : 0
                })

            } else {
                this.setData({
                    currentView: this.data.currentView !== maxPage ? this.data.currentView + 1 : maxPage
                })
            }
            this.getCourse(this.data.category0[this.data.currentView])
          
        }
        if (Math.abs(moveY) > 10) {
            if (moveY < 0) {
                this.scrollTo()
            }
        }
        this.setData({
            toView: `card_${this.data.currentView}`,
            toBottom: `card_${this.data.currentLocation}`
        });
       
        this.getCourse()
    },


    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        wx.showLoading({
            title: '加载中',
        })
        this.setData({
            isLoading: true
        })
        this.getCourse();
    },
    handleImgError1: function(e) {
        console.log('图片加载失败', e);
        console.log(this.data.imgUrl2);
    },
    // 请求第二张图片并将图片进行缓存
    loadImg2: function (e) {
        const that = this;
        if (e == undefined) {
            e = this.data.category0[0]
        }
        console.log('当前学科', e);
        wx.downloadFile({
            url: 'https://eralab.oss-cn-guangzhou.aliyuncs.com/static/' + e + '_s.svg',
            success: function (res) {
                const tempFilePath = res.tempFilePath;
                      that.setData({
                        imgUrl2: tempFilePath
                    }, function() {
                        console.log(that.data.imgUrl2);
                    });
                // wx.saveFile({
                //   tempFilePath: tempFilePath,
                //   success: function(res) {
                //     const savedFilePath = res.savedFilePath;
                    
                //     that.setData({
                //         imgUrl2: savedFilePath
                //     }, function() {
                //         console.log(that.data.imgUrl2);
                //     });
                    
       
                //   }
                // });
            }
        })

    },

    getCourse(e) {

        let that = this
        let data1;
        if (e) {
            data1 = e;
        }

        wx.showLoading({
            title: '加载中'
        })
        wx.request({
            url: urls + '/course/listCourseAndCategory',
            data: {
                category: data1
            },
            success: function (res) {
                console.log('成功', res);

                let arr = [];
                if (res.data.data.CategoryList) {
                    for (let i = 0; i < res.data.data.CategoryList.length; i++) {
                        arr.push(res.data.data.CategoryList[i].name)
                    }
                    that.setData({
                        category0: arr
                    })
                }
                // that.loadImg2(e);
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