/**
 * 设置是否是编辑模式, redux会因为iframe的原因 值不会传递,在父页面更改的state 子页面的值不会发生变化
 */
export const setIsEditState = function (active) {

    let isEdit = false;
    switch (active.type) {
        case 1: isEdit = true; break;

        case 0: isEdit = false; break;

        default: isEdit = false; break;
    }


    sessionStorage.setItem('isEdit', isEdit)
}