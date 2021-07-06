const schoolJson = [
    { img: require('../../../assets/schoolList/tz.jpg').default, name: "通州校区", course: "成人/少儿舞蹈培训班、成人/少儿美术培训班、学唱歌培训班、吉他/尤克里里/架子鼓/钢琴培训班、艺考考级培训班等；", classed: "1v1精品小班、1v2精品小班、1v3精品小班、系统集体大班、艺考考级冲刺班、艺考考级模拟班等多种班型。", position: "北京市通州万达广场C区101-109" },
    { img: require('../../../assets/schoolList/cwm.jpg').default, name: "崇文门校区", course: "成人/少儿舞蹈培训班、成人/少儿美术培训班、学唱歌培训班、吉他/尤克里里/架子鼓/钢琴培训班等；", classed: "1v1精品小班、1v2精品小班、1v3精品小班、系统集体大班等多种班型。", position: "北京市东城区崇文门外大街18号便宜坊大厦" },
    { img: require('../../../assets/schoolList/zgc.jpg').default, name: "中关村校区", course: "成人/少儿舞蹈培训班、成人/少儿美术培训班、学唱歌培训班、吉他/尤克里里/架子鼓/钢琴培训班等；", classed: "1v1精品小班、1v2精品小班、1v3精品小班、系统集体大班等多种班型。", position: "北京市海淀区知春路113号银网中心" },
    { img: require('../../../assets/schoolList/yyc.jpg').default, name: "亚运村校区", course: "成人/少儿舞蹈培训班、成人/少儿美术培训班、学唱歌培训班、吉他/尤克里里/架子鼓/钢琴培训班等；", classed: "1v1精品小班、1v2精品小班、1v3精品小班、系统集体大班等多种班型。", position: "北京市朝阳区慧忠里103号洛克时代中心" },
    { img: require('../../../assets/schoolList/gzf.jpg').default, name: "公主坟校区", course: "成人/少儿舞蹈培训班、成人/少儿美术培训班、学唱歌培训班、吉他/尤克里里/架子鼓/钢琴培训班等；", classed: "1v1精品小班、1v2精品小班、1v3精品小班、系统集体大班等多种班型。", position: "北京市海淀区万寿路大诚中心" },
    { img: require('../../../assets/schoolList/dwl.jpg').default, name: "大望路校区", course: "成人/少儿舞蹈培训班、成人/少儿美术培训班、学唱歌培训班、吉他/尤克里里/架子鼓/钢琴培训班等；", classed: "1v1精品小班、1v2精品小班、1v3精品小班、系统集体大班等多种班型。", position: "北京市朝阳区大望路万达广场" },
    { img: require('../../../assets/schoolList/wdk.jpg').default, name: "五道口校区", course: "成人/少儿舞蹈培训班、成人/少儿美术培训班、学唱歌培训班、吉他/尤克里里/架子鼓/钢琴培训班等；", classed: "1v1精品小班、1v2精品小班、1v3精品小班、系统集体大班等多种班型。", position: "北京市海淀区成府路28号五道口华联" },
    { img: require('../../../assets/schoolList/xzm.jpg').default, name: "西直门校区", course: "成人/少儿舞蹈培训班、成人/少儿美术培训班、学唱歌培训班、吉他/尤克里里/架子鼓/钢琴培训班等；", classed: "1v1精品小班、1v2精品小班、1v3精品小班、系统集体大班等多种班型。", position: "北京市西城区西直门外大街西环广场" },
    { img: require('../../../assets/schoolList/dzm.jpg').default, name: "东直门校区", course: "成人/少儿舞蹈培训班、成人/少儿美术培训班、学唱歌培训班、吉他/尤克里里/架子鼓/钢琴培训班等；", classed: "1v1精品小班、1v2精品小班、1v3精品小班、系统集体大班等多种班型。", position: "北京市东城区东直门外大街天恒大厦" },
    { img: require('../../../assets/schoolList/hlg.jpg').default, name: "回龙观校区", course: "成人/少儿舞蹈培训班、成人/少儿美术培训班、学唱歌培训班、吉他/尤克里里/架子鼓/钢琴培训班等；", classed: "1v1精品小班、1v2精品小班、1v3精品小班、系统集体大班等多种班型。", position: "北京市昌平区回龙观西大街北店时代广场" },
    { img: require('../../../assets/schoolList/wj.jpg').default, name: "望京校区", course: "成人/少儿舞蹈培训班、成人/少儿美术培训班、学唱歌培训班、吉他/尤克里里/架子鼓/钢琴培训班等；", classed: "1v1精品小班、1v2精品小班、1v3精品小班、系统集体大班等多种班型。", position: "北京市朝阳区广顺北大街19号(六佰本商业街南区)" },
    { img: require('../../../assets/schoolList/qnl.jpg').default, name: "青年路校区", course: "成人/少儿舞蹈培训班、成人/少儿美术培训班、学唱歌培训班、吉他/尤克里里/架子鼓/钢琴培训班等；", classed: "1v1精品小班、1v2精品小班、1v3精品小班、系统集体大班等多种班型。", position: "北京市朝阳区青年路地铁站佳亿青年汇" },
    { img: require('../../../assets/schoolList/cqk.jpg').default, name: "磁器口校区", course: "成人/少儿舞蹈培训班、成人/少儿美术培训班、学唱歌培训班、吉他/尤克里里/架子鼓/钢琴培训班等；", classed: "1v1精品小班、1v2精品小班、1v3精品小班、系统集体大班等多种班型。", position: "北京市崇文区珠市口东大街" },
    { img: require('../../../assets/schoolList/az.jpg').default, name: "安贞校区", course: "成人/少儿舞蹈培训班、成人/少儿美术培训班、学唱歌培训班、吉他/尤克里里/架子鼓/钢琴培训班等；", classed: "1v1精品小班、1v2精品小班、1v3精品小班、系统集体大班等多种班型。", position: "北京市东城区北三环东路安贞桥东" },
    { img: require('../../../assets/schoolList/gz.jpg').default, name: "管庄校区", course: "成人/少儿舞蹈培训班、成人/少儿美术培训班、学唱歌培训班、吉他/尤克里里/架子鼓/钢琴培训班等；", classed: "1v1精品小班、1v2精品小班、1v3精品小班、系统集体大班等多种班型。", position: "北京市朝阳区管庄路未来域C座109y" },
    { img: require('../../../assets/schoolList/sjs.jpg').default, name: "石景山校区", course: "成人/少儿舞蹈培训班、成人/少儿美术培训班、学唱歌培训班、吉他/尤克里里/架子鼓/钢琴培训班等；", classed: "1v1精品小班、1v2精品小班、1v3精品小班、系统集体大班等多种班型。", position: "北京市石景山区石景山路22号瀚海长城大厦" },
    { img: require('../../../assets/schoolList/fslx.jpg').default, name: "房山良乡校区", course: "成人/少儿舞蹈培训班、成人/少儿美术培训班、学唱歌培训班、吉他/尤克里里/架子鼓/钢琴培训班等；", classed: "1v1精品小班、1v2精品小班、1v3精品小班、系统集体大班等多种班型。", position: "北京市房山区拱辰大街51号科豪大厦一层" },
    { img: require('../../../assets/schoolList/gyxq.jpg').default, name: "公益西桥校区", course: "成人/少儿舞蹈培训班、成人/少儿美术培训班、学唱歌培训班、吉他/尤克里里/架子鼓/钢琴培训班等；", classed: "1v1精品小班、1v2精品小班、1v3精品小班、系统集体大班等多种班型。", position: "北京市丰台区城南嘉园益城园路16号多乐荟购物中心3层B029 室" },
]

export default schoolJson;