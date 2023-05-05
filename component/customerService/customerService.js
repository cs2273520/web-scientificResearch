// component/customerService/customerService.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {

    },
    options:{
        styleIsolation:"shared"
    },

    /**
     * 组件的初始数据
     */
    data: {
        clickcustomer:null,//点击了客服的按钮,
        showPoint:null,//显示圆圈
    },

    /**
     * 组件的方法列表
     */
    methods: {
        
        toCallPhone(){
            wx.makePhoneCall({
                phoneNumber: '1234567890',
              })
        },
        toWechat(){
            wx.navigateTo({
              url: '/pages/consultation/consultation',
            })
        },
        clickCustomer(){
            console.log('点击');
            if(this.data.clickcustomer==null){
                this.setData({
                    showPoint:true
                })
                setTimeout(()=>{
                    this.setData({
                        clickcustomer:true
                    })
                },600)   
            }else{
                if(this.data.clickcustomer==false){
                    setTimeout(()=>{
                        this.setData({
                            clickcustomer:!this.data.clickcustomer
                        })
                    },600)
                        this.setData({
                            showPoint:!this.data.showPoint
                        })
                }else{
                        this.setData({
                            clickcustomer:!this.data.clickcustomer
                        })
                    setTimeout(()=>{
                        this.setData({
                            showPoint:!this.data.showPoint
                        })
                    },600)
                }
                    
            }
        },
    }
})
