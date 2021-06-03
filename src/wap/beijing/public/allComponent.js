import { lazy } from 'react'
const Banner = lazy(() => import('../components/homepage/banner')),//banner图 list数据一个就是单图显示多图就是轮播
    DrawerNav = lazy(() => import('../components/common/drawerNav')),//头部导航
    TabControl = lazy(() => import('../components/homepage/tabControl')),//导航选项卡
    TitleBar = lazy(() => import('../components/homepage/titleBar')),//标题栏
    BrandImageText = lazy(() => import('../components/homepage/brandImageText')),//品牌介绍图文
    Footer = lazy(() => import('../components/common/footer')),//页脚信息
    FooterBar = lazy(() => import('../components/common/footerBar')),//底部栏
    SuspensionTool = lazy(() => import('../components/common/suspensionTool')),//右侧悬浮工具
    Title = lazy(() => import('../components/common/title')),//浪花标题
    Paragraph = lazy(() => import('../components/common/paragraph')),//段落组件
    Timeline = lazy(() => import('../components/brandIntroduction/timeline'))//时间轴
    ;

export default function switchComponents(name, props, num) {
    const components = {
        'DrawerNav': <DrawerNav {...props} key={num} />,
        'Banner': <Banner {...props} key={num} />,
        'TabControl': <TabControl {...props} key={num} />,
        'TitleBar': <TitleBar {...props} key={num} />,
        'BrandImageText': <BrandImageText {...props} key={num} />,
        'Footer': <Footer {...props} key={num} />,
        'FooterBar': <FooterBar {...props} key={num} />,
        'SuspensionTool': <SuspensionTool {...props} key={num} />,
        'Title': <Title {...props} key={num} />,
        'Paragraph': <Paragraph {...props} key={num} />,
        'Timeline': <Timeline {...props} key={num} />,
    }

    return components[name] || <div>组件名称错误</div>;
}