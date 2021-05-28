// import React, { useEffect, useState, useCallback } from 'react'
import { Link } from 'react-router-dom'

import './style.scss'

import React, { Component } from 'react'

export default class DefaultBanner extends Component {
    state = {
        list: []
    }

    componentDidMount() {
        const { list } = this.props
        this.setState({
            list
        })
    }

    test = () => {

        const { num, list: propsList } = this.props;

        const { list } = this.state;
        console.log(list)

        // list.splice(0, 0, list[list.length - 1]);
        // list.push(list[1]);

        return <div>asdasd</div>;
        
    }
    render() {
        return this.test()

    }
}
/**
 * <div className='DefaultBanner'>
            <div className='container' style={{ width: `${list.length * 7.5}rem`, left: `-${(num * 1 + 1) * 7.5}rem` }}>
                {
                    list.map((item, index) => {
                        return <Link to={item.address} target='_self' key={index}>
                            <div className='slick-slide'>
                                <img src={item.img} alt="" />
                            </div>
                        </Link>
                    })
                }
                <ul className='slick-dots'>

                </ul>
            </div>
        </div >
 */

// export default function DefaultBanner(props) {
//     let { list, changeNum, num } = props;

//     const memoizedCallback = useCallback(() => {
//         list.splice(0, 0, list[list.length - 1]);
//         list.push(list[1]);
//         return list
//     }, [num]);


//     const SHAM = 2;//减去为了无缝增加的元素
//     const [flag, setFlag] = useState(true)



//     useEffect(() => {
//         if (num > list.length - SHAM) {
//             setFlag(false)
//             changeNum(0)
//         } else {
//             setFlag(true)
//         }
//     })
//     console.log(num)
//     console.log(props)


// return <div className='DefaultBanner'>
//     <div className='container' style={{ width: `${list.length * 7.5}rem`, left: `-${(num * 1 + 1) * 7.5}rem`, transition: `${flag ? '.3s' : 'none'}` }}>
//         {
//             list.map((item, index) => {
//                 return <Link to={item.address} target='_self' key={index}>
//                     <div className='slick-slide'>
//                         <img src={item.img} alt="" />
//                     </div>
//                 </Link>
//             })
//         }
//         <ul className='slick-dots'>

//         </ul>
//     </div>
// </div >
// }