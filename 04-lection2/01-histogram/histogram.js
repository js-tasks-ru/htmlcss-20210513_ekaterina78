(function () {
    const barsCount = Math.floor(Math.random() * 31 + 15);
    for(let i = 0; i < barsCount; i++) {
        const bar = document.createElement('div');
        const bar2 = document.createElement('div');
        bar.className = bar2.className ='histogram__bar';
        bar.style.height = bar2.style.height = Math.floor(Math.random() * 101) + '%';
        document.getElementById('histogram__bars').appendChild(bar);
        document.getElementById('histogram__bars2').appendChild(bar2);
    }
})();
