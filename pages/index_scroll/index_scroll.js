// pages/index_scroll/index_scroll.js
// var app=getApp()
// var ImgUrl=app.globalData.ImgUrl;

var ImgUrls = "https://www.eralab.cn/static"

Page({

    /**
     * 页面的初始数据
     */
    data: {
        category1: [
            {
                proName: 'IR-深度版',
                proImgUrl: "",
                pages: [{
                    'proIntroduce': ["【金衣计划】是专为青少年设计的实践科研计划。无论你是高中或大学生，无需拥有科研经验，我们的课程和指导都将让你全面、深入地掌握科研方法和流程，提前接受同等高校研究生的教育和锻炼。","在项目中，您将有机会与业内翘楚交流互动，获得他们的研究经验和技术指导。并与志同道合的学员一起探索研究，共同成长和进步。","项目完成后，您不仅能获得丰富的收获，还将对自身未来学术发展道路有更清晰的认知。","加入【金衣计划】，开启您的科研学术之旅。"],
                    'pro_item': [{
                        iconfont:'icon-keyan',
                        color:'#b563f6',
                        t1: '纯正科研项目',
                        t2: '(依据高校研究生培养方案制定)'
                    }, {
                        iconfont:'icon-shixishengribao',
                        color:'#ffd131',
                        t1: '实习科研同步',
                        t2: '(同时收获科研与实习经历)'
                    }, {
                        iconfont:'icon-zuoyezhidaoshu',
                        color:'#d47466',
                        t1: '业界大佬指点',
                        t2: '(名校教授、行业专家、期刊主编)'
                    }, {
                        iconfont:'icon-tisheng',
                        color:'#fda834',
                        t1: '个人背景增强',
                        t2: '(丰富履历，提高申请成功率)'
                    }, {
                        iconfont:'icon-tishengxiaoliang',
                        color:'#085640',
                        t1: '综合素质提升',
                        t2: '(培养自我探索和解决问题的能力)'
                    }],
                    'proName': ['项目介绍', 'Project Description'],
                }, {
                    'harvest': [{
                        iconfont: 'icon-youxiang',
                        color: '#fd9946',
                        content: '名校教授推荐信',
                        other: ''

                    }, {
                        iconfont: 'icon-xuekefenxi',
                        color: '#00eec4',
                        content: "论文发表 ",
                        other: ''
                    }, {
                        iconfont: 'icon-yuanxiaodashuju',
                        color: '#55bcfe',
                        content: '实习证明',
                        other: ''
                    }, {
                        iconfont: 'icon-xiangmu2',
                        color: '#fcd82e',
                        content: '项目成绩单'
                    }, {
                        iconfont: 'icon-huiyiguanli',
                        color: '#ff5678',
                        content: 'EI级学术会议',
                        other: ''
                    }, {
                        iconfont: 'icon-zhengce2',
                        color: '#5396ff',
                        content: '学术计划书',
                        other: ''
                    }, {
                        iconfont: 'icon-renzheng2',
                        color: '#fca603',
                        content: '项目参与证书',
                        other: ''
                    }, {
                        iconfont: 'icon-zhishi',
                        color: '#05c4a3',
                        content: '科研和实习经历'
                    }, {
                        iconfont: 'icon-chengguo2',
                        color: '#feab38',
                        content: '个人实力提升'
                    }, ],
                    'proName': ['项目收获', 'Project Achievements'],
                }, {
                    'proPeriod': {
                        'proImgUrl': "",
                        'Alltime': '16',
                        'ResearchTime': '12',
                        'WriteTime': '4',
                        'Research': {
                            step: ['1.项目准备', '2.开题汇报', '3.前期研究', '4.中期考核', '5.后期研究', '6.结题验收'],
                            characteristic: ['(顶尖名校教授和行业大厂专家进行科研指导)', '全程安排硕博导师辅导学员参与教授和专家的项目']
                        },
                        'Write': {
                            step: ['7.论文写作'],
                            characteristic: ['(知名期刊主编进行论文指导)', '全程安排论文导师辅导学员进行论文写作和投稿']
                        },
                        PageIntroduction: [0, 1, 2]
                    },
                    'proName': ['项目周期', 'Project Plan'],
                }]
            },
            {
                proName: 'IR-标准版',
                proImgUrl: "",
                pages: [{
                    'proIntroduce': ["【金衣计划】是专为青少年设计的实践科研计划。无论你是高中或大学生，无需拥有科研经验，我们的课程和指导都将让你全面、深入地掌握科研方法和流程，提前接受同等高校研究生的教育和锻炼。","在项目中，您将有机会与业内翘楚交流互动，获得他们的研究经验和技术指导。并与志同道合的学员一起探索研究，共同成长和进步。","项目完成后，您不仅能获得丰富的收获，还将对自身未来学术发展道路有更清晰的认知。","加入【金衣计划】，开启您的科研学术之旅。"],
                    'pro_item': [{
                        iconfont:'icon-keyan',
                        color:'#b563f6',
                        t1: '纯正科研项目',
                        t2: '(依据高校研究生培养方案制定)'
                    }, {
                        iconfont:'icon-shixishengribao',
                        color:'#ffd131',
                        t1: '实习科研同步',
                        t2: '(同时收获科研与实习经历)'
                    }, {
                        iconfont:'icon-zuoyezhidaoshu',
                        color:'#d47466',
                        t1: '业界大佬指点',
                        t2: '(名校教授、行业专家、期刊主编)'
                    }, {
                        iconfont:'icon-tisheng',
                        color:'#fda834',
                        t1: '个人背景增强',
                        t2: '(丰富履历，提高申请成功率)'
                    }, {
                        iconfont:'icon-tishengxiaoliang',
                        color:'#085640',
                        t1: '综合素质提升',
                        t2: '(培养自我探索和解决问题的能力)'
                    }],
                    'proName': ['项目介绍', 'Project Description'],
                }, {
                    'harvest': [{
                        iconfont: 'icon-youxiang',
                        color: '#fd9946',
                        content: '名校教授推荐信',
                        other: ''

                    }, {
                        iconfont: 'icon-xuekefenxi',
                        color: '#00eec4',
                        content: "论文发表 ",
                        other: ''
                    }, {
                        iconfont: 'icon-yuanxiaodashuju',
                        color: '#55bcfe',
                        content: '实习证明',
                        other: ''
                    }, {
                        iconfont: 'icon-xiangmu2',
                        color: '#fcd82e',
                        content: '项目成绩单'
                    }, {
                        iconfont: 'icon-huiyiguanli',
                        color: '#ff5678',
                        content: 'EI级学术会议',
                        other: ''
                    }, {
                        iconfont: 'icon-zhengce2',
                        color: '#5396ff',
                        content: '学术计划书',
                        other: ''
                    }, {
                        iconfont: 'icon-renzheng2',
                        color: '#fca603',
                        content: '项目参与证书',
                        other: ''
                    }, {
                        iconfont: 'icon-zhishi',
                        color: '#05c4a3',
                        content: '科研和实习经历'
                    }, {
                        iconfont: 'icon-chengguo2',
                        color: '#feab38',
                        content: '个人实力提升'
                    }, ],
                    'proName': ['项目收获', 'Project Achievements'],
                }, {
                    'proPeriod': {
                        'proImgUrl': "",
                        'Alltime': '12',
                        'ResearchTime': '9',
                        'WriteTime': '3',
                        'Research': {
                            step: ['1.项目准备', '2.开题汇报', '3.前期研究', '4.中期考核', '5.后期研究', '6.结题验收'],
                            characteristic: ['(顶尖名校教授和行业大厂专家进行科研指导)', '全程安排硕博导师辅导学员参与教授和专家的项目']
                        },
                        'Write': {
                            step: ['7.论文写作'],
                            characteristic: ['(知名期刊主编进行论文指导)', '全程安排论文导师辅导学员进行论文写作和投稿']
                        },
                        PageIntroduction: [0, 1, 2]
                    },
                    'proName': ['项目周期', 'Project Plan'],
                }]
            },
        ],
        currentPage: 0,
        top_currentPage: 0,
        
    },
    onLoad(optios) {
        const urls = [
            'https://eralab.oss-cn-guangzhou.aliyuncs.com/static/bg1.svg',
            'https://eralab.oss-cn-guangzhou.aliyuncs.com/static/period1.svg',
        ];
        wx.showLoading({
            title: '加载中',
        })
        // Promise.all() 等待所有图片请求完成
        Promise.all(urls.map(url => this.getImageInfo(url)))
            .then((results) => {
                // 所有图片都已获取，关闭loading框
                wx.hideLoading()
                // 对获取到的图片进行操作
                // console.log('所有图片已获取', results)
            })
            .catch((error) => {
                console.log('获取图片失败：', error)
                // 提示用户获取图片失败
                wx.showModal({
                    title: '提示',
                    content: '获取资源，请稍后重试',
                    showCancel: false
                })
            })

    },
    getImageInfo(url) {
        return new Promise((resolve, reject) => {
            wx.request({
                url: url,
                responseType: 'arraybuffer',
                success: function (res) {
                    resolve(res);
                },
                fail: function (res) {
                    reject(err);
                }
            })
        })
    },
    // 上下滑动
    currentPageChange(e){
        console.log(e.detail.current);
        if(e.detail.source === 'touch'){
            that.setData({
                currentPage: e.detail.current
            })
        // this.setData({
        //     currentPage:e.detail.current,
      
        // })
    }
},


    //底部页面左右滚动
    bottomSwiperChange(e) {
        this.setData({
            top_currentPage: e.detail.current
        })
    },
    choosePro(e) {
        this.setData({
            top_currentPage: e.currentTarget.dataset.choose
        })
    },
    choosePro1(e) {
        this.setData({
            top_currentPage: e.detail.current
        })
    },


    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {},

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