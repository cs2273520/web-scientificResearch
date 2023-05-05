// component/dialog/dialog.js
var app = getApp();
var urls = app.globalData.Testurl
Component({
    /**
     * 组件的属性列表
     */
    options:{
        addGlobalClass: true,
    },
    properties: {
        dialogTitle:String,
        dialogContent:String,
    },

    /**
     * 组件的初始数据
     */
    data: {
        dialogTitle:"",
        dialogContent:"",
        showMask: false,
    },
    
    attached(){
        if(this.properties.dialogTitle){
           this.setData({
            showMask: true,
           }) 
        }
        this.setData({
            dialogTitle:this.properties.dialogTitle,
            dialogContent:this.properties.dialogContent
        })
        console.log(this.data);

    },
    /**
     * 组件的方法列表
     */
    methods: {
        
    /**
     * 获取手机号进行登录
     */
    getPhoneNumber(e) {
        console.log(e.detail.errMsg)
        let that = this;
        if(e.detail.errMsg== 'getPhoneNumber:ok'){
             this.triggerEvent('fromDialog', {showDialog:false});
            wx.login({
                success: (res) => {
                    ///wechat/wechatLogin
    
                    wx.request({
                        url: urls + '/wechat/wechatLogin',
                        data: {
                            loginCode: res.code,
                            phoneCode: e.detail.code,
                        },
                        method: 'GET',
                        success: function (res) {
                            if (res.data.success) {
                                wx.setStorage({
                                    key: 'token',
                                    data: res.data.data,
                                    success: function () {
                                        console.log('缓存数据成功');
                                    }
                                });
                                that.setData({
                                    isLogin: true
                                })
                            }
    
                        }
                    })
                },
            })
        }else{
            console.log('失败');
        }
       
    },


        calcel(){
            this.triggerEvent('fromDialog', {showDialog:false});
        },
        confirm(){
           
        }
    }
})
