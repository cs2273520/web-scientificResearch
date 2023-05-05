const imageCdn = 'https://tdesign.gtimg.com/miniprogram/images';
const swiperList = [
  `${imageCdn}/swiper1.png`,
  `${imageCdn}/swiper2.png`,
  `${imageCdn}/swiper1.png`,
  `${imageCdn}/swiper2.png`,
  `${imageCdn}/swiper1.png`,
];

Component({
  data: {
    current: 3,
    autoplay: true,
    duration: 500,
    interval: 5000,
    swiperList,
    navigation: { type: '', showControls: true },
  },
  methods:{
      /**
       * 项目详情
       */
    toProjectDetails(){
        wx.navigateTo({
          url: '/pages/projectDetails/projectDetails',
        })
    },
    getPhoneNumber(e){
        console.log(e.detail.code);
    },
    clickCustomer(){
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
});


