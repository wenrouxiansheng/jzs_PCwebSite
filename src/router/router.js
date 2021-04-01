import React, { Suspense, lazy } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import { Skeleton } from 'antd';

import HomePage from '../views/homePage';


const BrandIntroduction = lazy(() => import('../views/brandIntroduction'));
const DevelopmentHistory = lazy(() => import('../views/brandIntroduction/developmentHistory'));
const CurriculumPlan = lazy(() => import('../views/brandIntroduction/curriculumPlan'));
const DanceTraining = lazy(() => import('../views/danceTraining'));
const ChildrenDance = lazy(() => import('../views/danceTraining/childrenDance'));
const HipHop = lazy(() => import('../views/danceTraining/hipHop'));
const DanceGrading = lazy(() => import('../views/artGrading/artExamDance'));
const LatinGrading = lazy(() => import('../views/artGrading/artExamDance/latinGrading'));
const Teachers = lazy(() => import('../views/aboutUs/teachers'));
const StudentHonor = lazy(() => import('../views/aboutUs/studentHonor'));
const ArtNews = lazy(() => import('../views/aboutUs/artNews'));
const ContactUs = lazy(() => import('../views/aboutUs/contactUs'));
const CampusDistribution = lazy(() => import('../views/campusDistribution'));

//懒加载需要配合Suspense
//骨架屏
const loadingStyle = {
    width: '1200px',
    margin: '0 auto',
    minHeight: '1000px',
    padding: '50px 0px'
}
const Loading = <div className="lazyLoading" style={loadingStyle}>
    <Skeleton.Image active style={{width: '1200px', height: '480px'}}/>
    <Skeleton active />
    <Skeleton active />
    <Skeleton active />
    <Skeleton active />
    <Skeleton active />
</div>;
const routeDom = () => {
    return (
        <main>
            <Suspense fallback={Loading}>
                <Switch>
                    <Route path="/home" component={HomePage} />{/**首页 */}
                    {/*品牌介绍*/}
                    <Route path="/brandIntroduction/history" component={DevelopmentHistory} />{/**历史历程 */}
                    <Route path="/brandIntroduction/course" component={CurriculumPlan} />{/**教研课程 */}
                    <Route path="/brandIntroduction" component={BrandIntroduction} />{/**品牌介绍综合页 */}
                    {/* 舞蹈培训 */}
                    <Route path="/danceTraining/hipHop" component={HipHop} />{/**街舞综合页 */}
                    <Route path="/danceTraining/childrenDance" component={ChildrenDance} />{/**少儿舞蹈 */}
                    <Route path="/danceTraining" component={DanceTraining} />{/**舞蹈培训综合 */}
                    {/* 艺术考级 */}
                    <Route path="/artGrading/artExamDance/latinGrading" component={LatinGrading} />{/**国标舞考级 */}
                    <Route path="/artGrading/artExamDance" component={DanceGrading} />{/**舞蹈考级综合 */}
                    {/* 关于我们 */}
                    <Route path="/teachers" component={Teachers} />{/**师资力量 */}
                    <Route path="/studentHonor" component={StudentHonor} />{/**学员风采 */}
                    <Route path="/artNews" component={ArtNews} />{/**艺术头条 */}
                    <Route path="/contactUs" component={ContactUs} />{/**联系我们 */}
                    {/* 校区分布 */}
                    <Route path="/campusDistribution" component={CampusDistribution} />
                    <Redirect to="/home" />{/* 重定向首页 */}
                </Switch>
            </Suspense>
        </main>
    )
}
export default routeDom