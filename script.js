window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loading-screen');
    setTimeout(() => {
        loadingScreen.classList.add('fade-out');
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 1000);
    }, 3000);


    function adjustContentMargin() {
        const sidebar = document.querySelector('.sidebar');
        const content = document.querySelector('.content');
        if (window.innerWidth > 768) {
          content.style.marginLeft = sidebar.offsetWidth + 'px';
        }else{
           content.style.marginLeft = '0';
        }
    }

    adjustContentMargin();
    window.addEventListener('resize', adjustContentMargin);
});