//获取是否是编辑模式
export const getIsEditState = function () {
    const val = sessionStorage.getItem('isEdit')

    switch (val) {

        case 'true': return true;

        case 'false': return false;

        default: return false
    }
}