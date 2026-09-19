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

// 切換抽籤模式
function switchDrawMode() {
    const mode = document.querySelector('input[name="drawMode"]:checked').value;
    document.getElementById('panel-multi').classList.toggle('active', mode === 'multi');
    document.getElementById('panel-single').classList.toggle('active', mode === 'single');
}

// 抽籤模式 A：指定人數
function drawMulti() {
    const min = parseInt(document.getElementById('multiMin').value);
    const max = parseInt(document.getElementById('multiMax').value);
    const count = parseInt(document.getElementById('multiCount').value);

    if (isNaN(min) || isNaN(max) || min >= max || isNaN(count) || count <= 0 || count > (max - min + 1)) {
        alert('請輸入有效的座號範圍與抽取人數！');
        return;
    }

    let pool = [];
    for (let i = min; i <= max; i++) pool.push(i);

    let result = [];
    for (let i = 0; i < count; i++) {
        const randomIndex = Math.floor(Math.random() * pool.length);
        result.push(pool.splice(randomIndex, 1)[0]);
    }

    document.getElementById('resultMulti').innerText = '中籤號碼：' + result.join(' 號, ') + ' 號';
}

// 抽籤模式 B：指定座號收一個
function drawSingle() {
    const rawInput = document.getElementById('singleCandidates').value;
    const candidates = rawInput.split(/[\s,]+/).filter(item => item.trim() !== '' && !isNaN(item));

    if (candidates.length === 0) {
        alert('請輸入至少一個有效的座號數字！');
        return;
    }

    const randomIndex = Math.floor(Math.random() * candidates.length);
    document.getElementById('resultSingle').innerText = '抽出號碼：' + candidates[randomIndex] + ' 號';
}
