//此文件装载   每个组件的原始props值    解决在添加组件时没有初始值
export default function switchInfo(name) {
    const objInfo = {
        title: {
            info: {
                "title": "为什么选择桔子树",
                "subTitle": "Core advantages"
            }
        },
        banner: {
            bannerList: [
                { id: 1, adress: "/", src: require("../assets/template/banner.png").default },
            ]
        },
        imgAndText: {
            detail: { id: 1, title: "强大的办学规模", text: "已开设北京16家，上海2家，18家直营校区，总教学面积近35000平米", src: require("../assets/template/honor2.png").default, type: "left" }
        }
    }
    switch (name) {
        case 'Title': return objInfo.title;
        case 'Banner': return objInfo.banner;
        case 'ImgAndText': return objInfo.imgAndText;
        default: return "无"
    }
}
