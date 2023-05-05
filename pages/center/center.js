// pages/center/center.js
var app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        isLogin:false,
    },
    /**
     * 获取手机号进行登录
     */
    getPhoneNumber (e) {
        // console.log(e.detail.code)
        let that=this;
        wx.login({
          success: (res) => {
              ///wechat/wechatLogin
            let url=app.globalData.Testurl
            console.log(e.detail);
            wx.request({
                url: url+'/wechat/wechatLogin',
                data:{
                    loginCode:res.code,
                    phoneCode:e.detail.code,
                },
                method:'GET',
                success: function(res) {
                    console.log('请求数据',res)
                 if(res.data.success){
                    wx.setStorage({
                        key: 'token',
                        data: res.data.data,
                        success: function () {
                            console.log('缓存数据成功');
                          }
                      });
                      that.setData({
                        isLogin:true
                    })
                 }
                 
                }
              })
          },
        })
      },
    //   退出登录
    logout(){
        wx.clearStorage()
        this.setData({
            isLogin:false
        })
    },


    /**
     * 登录
     */
 
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        let that=this;
        wx.getStorage({
            key: "token",
            success(res) {
              if(res.data){
                that.setData({
                    isLogin:true
                }) 
              }
            },
            fail: function () {
                console.log('获取缓存数据失败');
                that.setData({
                    isLogin:false
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