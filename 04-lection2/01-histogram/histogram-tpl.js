(function () {
    const barsCount = Math.floor(Math.random() * 51 + 20);
    for(let i = 0; i < barsCount; i++) {
        const bar = document.createElement('div');
        bar.className = 'histogram__bar';
        bar.style.height  = Math.floor(Math.random() * 101) + '%';
        document.getElementById('histogram__bars').appendChild(bar);
    }
})();

