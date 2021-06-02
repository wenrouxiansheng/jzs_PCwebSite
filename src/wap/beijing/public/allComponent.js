import { lazy } from 'react'
const Banner = lazy(() => import('../components/homepage/banner')),//banner图 list数据一个就是单图显示多图就是轮播
    TabControl = lazy(() => import('../components/homepage/tabControl')),//导航选项卡
    TitleBar = lazy(() => import('../components/homepage/titleBar')),//标题栏
    BrandImageText = lazy(() => import('../components/homepage/brandImageText'))//标题栏
    ;

export default function switchComponents(name, props, num) {
    const components = {
        'Banner': <Banner {...props} key={num} />,
        'TabControl': <TabControl {...props} key={num} />,
        'TitleBar': <TitleBar {...props} key={num} />,
        'BrandImageText': <BrandImageText {...props} key={num} />,
    }

    return components[name] || <div>组件名称错误</div>;
}