import React from 'react'

export default function drawerNav() {
    return (
        <header class="DrawerNav">
            <img src="./img/head_icon_06.png" class="DrawerNav_btn_icon" />
            <a href="../../officialIndex.html" class="DrawerNav_title"><img src="./img/nav_logo.png" /></a>
            <button class="DrawerNav_button" id="btnsh_udesk_im">立即咨询</button>
            <div class="DrawerNav_box" style="display: none;">
                <div class="DrawerNav_content animate__animated animate__slideInLeft">
                    <img src="./img/nav_logo.png" class="DrawerNav_nav_logo" />
                    <ul>
                        <li>
                            <img src="./img/home_page.png" alt="" />
                            <a href="../../officialIndex.html">首页</a>
                        </li>
                        <li>
                            <img src="./img/Brand_introduction.png" alt="" />
                            <a href="./brandIntroduction.html">品牌介绍</a>
                        </li>
                        <li>
                            <img src="./img/teachers.png" alt="" />
                            <a href="./teacherDetails.html">师资力量</a>
                        </li>
                        <li>
                            <img src="./img/user_photo.png" alt="" />
                            <a href="./exhibition.html">学员风采</a>
                        </li>
                        <li>
                            <img src="./img/art_news.png" alt="" />
                            <a href="./news.html">艺术头条</a>
                        </li>
                        <li>
                            <img src="./img/teaching_model.png" alt="" />
                            <a href="./researchCourses.html">教学模式</a>
                        </li>
                        <li>
                            <img src="./img/campus_distribution.png" alt="" />
                            <a href="./schoolList.html">校区分布</a>
                        </li>
                        <li>
                            <img src="./img/tell.png" alt="" />
                            <a href="./contactUs.html">联系我们</a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}
