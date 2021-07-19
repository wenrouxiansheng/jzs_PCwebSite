function schoolJson() {
    
    //这个文件单独上海用 function形式是后期调用接口


    return {
        list: [
            { img: require('../assets/schoolList/ljz.jpg').default, name: "陆家嘴校区", course: "成人/少儿声乐班、成人/少儿舞蹈班、成人/少儿美术班、吉他/钢琴/架子鼓/尤克里里培训、少儿艺术考级班、少儿音基/乐理班、艺考培训、企业排练", classed: "1V1私教课、1V2精品班、1V3精品班，系统集体班、艺术考级班、乐理集训班等多种班型", position: "浦东新区浦东南路1138号上海湾3楼301C" },
            { img: require('../assets/schoolList/qb.jpg').default, name: "七宝校区", course: "成人/少儿声乐班、成人/少儿舞蹈班、成人/少儿美术班、吉他/钢琴//尤克里里培训、少儿艺术考级班、少儿音基/乐理班、艺考培训、企业排练", classed: "1V1私教课、1V2精品班、1V3精品班，系统集体班、艺术考级班、乐理集训班等多种班型", position: "闵行区七莘路3011号星钻城3楼C04室" },
        ],
        phone: '400-999-9127'
    }
}



export default schoolJson();