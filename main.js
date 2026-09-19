// 頁面切換功能
function showPage(pageId) {
    // 1. 隱藏所有頁面
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active-page'));
    // 2. 顯示指定的頁面
    document.getElementById(pageId).classList.add('active-page');
}
// 顯示教室位置與走法
function showLocation(course, room, route) {
    document.getElementById('modalCourse').innerText = course;
    document.getElementById('modalRoom').innerText = room;
    document.getElementById('modalRoute').innerText = route;
    document.getElementById('locationModal').style.display = 'flex';
}

// 關閉視窗
function closeModal() {
    document.getElementById('locationModal').style.display = 'none';
}
