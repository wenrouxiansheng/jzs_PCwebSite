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
    History = lazy(() => import('../components/brandIntroduction/timeline')),//时间轴
    TeacherCard = lazy(() => import('../components/showClass/teacherCard')),//教师名片
    NewsImageText = lazy(() => import('../components/newsList/imageText')),//教师名片
    Picture = lazy(() => import('../components/common/picture')),//单图组件
    ButtonComponent = lazy(() => import('../components/common/buttonComponent')),//按钮组件
    CampusShow = lazy(() => import('../components/schoolList/campusShow')),//校区展示
    Supernatant = lazy(() => import('../components/schoolList/supernatant')),//电话浮层
    CompanyImgText = lazy(() => import('../components/aboutUs/companyImgText')),//总部图文浮层
    ContactWay = lazy(() => import('../components/aboutUs/contactWay')),//电话浮层
    Table = lazy(() => import('../components/common/table')),//表格组件
    PictureComponent = lazy(() => import('../components/showClass/pictureComponent')),//图片文案组件
    QAList = lazy(() => import('../components/showClass/QAList'))//问答列表
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
        'History': <History {...props} key={num} />,
        'TeacherCard': <TeacherCard {...props} key={num} />,
        'NewsImageText': <NewsImageText {...props} key={num} />,
        'Picture': <Picture {...props} key={num} />,
        'ButtonComponent': <ButtonComponent {...props} key={num} />,
        'CampusShow': <CampusShow {...props} key={num} />,
        'Supernatant': <Supernatant {...props} key={num} />,
        'CompanyImgText': <CompanyImgText {...props} key={num} />,
        'ContactWay': <ContactWay {...props} key={num} />,
        'Table': <Table {...props} key={num} />,
        'PictureComponent': <PictureComponent {...props} key={num} />,
        'QAList': <QAList {...props} key={num} />,
    }

    return components[name] || <div>组件名称错误</div>;
}