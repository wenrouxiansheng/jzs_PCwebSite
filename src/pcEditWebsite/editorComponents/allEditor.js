
import React, { lazy } from 'react'

//此文件汇总所有组件编辑器  通过props传递数据   根据componentInfo中的component名检索返回对应编辑器

const BannerEdit = lazy(() => import('../editorComponents/bannerEdit'))//横幅图编辑器
const TitleEdit = lazy(() => import('../editorComponents/titleEdit'))//横幅图编辑器
const ImgAndTextEdit = lazy(() => import('../editorComponents/imgAndTextEdit'))//横幅图编辑器

export default function switchComponentEdit(componentInfo) {
    if (!componentInfo) return;
    const { component } = componentInfo[0];
    switch (component) {
        case 'Banner': return <BannerEdit detail={componentInfo} />;
        case 'Title': return <TitleEdit detail={componentInfo} />;
        case 'ImgAndText': return <ImgAndTextEdit detail={componentInfo} />;
        default: return <div>没有找到该组件编辑器</div>;
    }
}