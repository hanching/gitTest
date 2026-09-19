// 頁面切換功能
function showPage(pageId) {
    // 1. 隱藏所有頁面
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active-page'));
    // 2. 顯示指定的頁面
    document.getElementById(pageId).classList.add('active-page');
}
