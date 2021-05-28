import React from 'react'
import './style.scss'
import { Link } from 'react-router-dom'

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import DehazeIcon from '@material-ui/icons/Dehaze';

const useStyles = makeStyles({
    list: {
        width: '4.5rem',
        fontSize: '0.2rem'
    }
});

export default function DrawerNav() {
    const obj = {
        logoLink: "#",
        logo: require('../../../assets/homepage/drawerNav/nav_logo.png').default,
        navList: [
            { text: "首页", address: "/site/wap/shanghai", img: require('../../../assets/homepage/drawerNav/home_page.png').default },
            { text: "品牌介绍", address: "#", img: require('../../../assets/homepage/drawerNav/Brand_introduction.png').default },
            { text: "师资力量", address: "#", img: require('../../../assets/homepage/drawerNav/teachers.png').default },
            { text: "学员风采", address: "#", img: require('../../../assets/homepage/drawerNav/user_photo.png').default },
            { text: "艺术头条", address: "#", img: require('../../../assets/homepage/drawerNav/art_news.png').default },
            { text: "教学模式", address: "#", img: require('../../../assets/homepage/drawerNav/teaching_model.png').default },
            { text: "校区分布", address: "#", img: require('../../../assets/homepage/drawerNav/campus_distribution.png').default },
            { text: "联系我们", address: "#", img: require('../../../assets/homepage/drawerNav/tell.png').default }
        ]
    }
    const classes = useStyles();
    const [state, setState] = React.useState(false);

    const toggleDrawer = (open) => (event) => {//控制显示隐藏
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState(open);
    };
    const { logoLink, logo, navList } = obj;

    const list = () => (//抽屉内容
        <div
            className={clsx(classes.list)}
            role="presentation"
        >
            <div className="DrawerNav_content">
                <img src={logo} className="DrawerNav_nav_logo" alt="" />
                <ul>
                    {
                        navList.map((item, index) => {
                            return <li key={index}>
                                <img src={item.img} alt="" />
                                <Link to={item.address} target ='_self' >{item.text}</Link>
                            </li>
                        })
                    }
                </ul>
            </div>
        </div>
    );
    return (
        <header className="DrawerNav">
            <DehazeIcon onClick={toggleDrawer(true)} className="DrawerNav_btn_icon" style={{ fontSize: "0.6rem", color: "#555555" }} />
            <a href={logoLink} className="DrawerNav_title"><img src={logo} alt="" /></a>
            <button className="DrawerNav_button" id="btnsh_udesk_im">立即咨询</button>

            <SwipeableDrawer
                anchor={'left'}
                open={state}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
            >
                {list()}
            </SwipeableDrawer>
        </header>
    )
}
