// import React, { useState, useEffect } from 'react'

import DefaultBanner from '../../bannerPattern/defaultBanner'


import React, { Component } from 'react'

export default class Banner extends Component {

    state = {
        list: [
            { img: require('../../../assets/homepage/banner/banner1.png').default, address: "/#" },
            { img: require('../../../assets/homepage/banner/banner2.png').default, address: "/#" },
            { img: require('../../../assets/homepage/banner/banner3.png').default, address: "/#" },
        ],
        num: 0,
        type: 'default'
    }
    switchBanner = () => {
        const { type, num, list } = this.state,
            propsList = {
                list,
                num
            };

        const obj = {
            'default': <DefaultBanner {...propsList} />
        }
        return obj[type];
    }
    render() {
        return this.switchBanner()
    }
}


// export default function Banner(props) {
//     const wait = 2000,
//         list = [
//             { img: require('../../../assets/homepage/banner/banner1.png').default, address: "/#" },
//             { img: require('../../../assets/homepage/banner/banner2.png').default, address: "/#" },
//             { img: require('../../../assets/homepage/banner/banner3.png').default, address: "/#" },
//         ],
//         type = 'default';


//     const [num, setNum] = useState(0);

//     useEffect(() => {//模拟didMount和willunMount

//         const timer = setInterval(() => {
//             setNum(num + 1)
//         }, wait);


//         return () => {//willunMount
//             clearInterval(timer);
//         }
//     })

//     const changeNum = (val) => {
//         setNum(val);
//         console.log(val)
//     }
//     const propsList = {
//         list,
//         num,
//         changeNum
//     }
//     const obj = {
//         'default': <DefaultBanner {...propsList}/>
//     };

//     return (
//         <div>
//             {obj[type]}
//         </div>
//     )
// }


