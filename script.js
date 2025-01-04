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
        const navbar = document.querySelector('.navbar');

        if (window.innerWidth > 768) {
            if (sidebar && sidebar.style.display !== 'none') {
              content.style.marginLeft = sidebar.offsetWidth + 'px';
            } else {
              content.style.marginLeft = '0';
            }
             if(navbar) {
                navbar.style.display = 'none';
              }
            if(sidebar) {
                sidebar.style.display = 'flex';
              }
        } else {
            content.style.marginLeft = '0';
            if(navbar) {
                navbar.style.display = 'flex';
            }
           if(sidebar) {
                sidebar.style.display = 'none';
              }
        }
    }

    adjustContentMargin();
    window.addEventListener('resize', adjustContentMargin);

    // worksセクションのフェードイン処理
    const worksSection = document.querySelector('.works');

    function handleScroll() {
        const worksSectionTop = worksSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (worksSectionTop < windowHeight * 0.75) {
            worksSection.classList.add('fade-in');
            window.removeEventListener('scroll', handleScroll); // 一度だけ実行
        }
    }

    window.addEventListener('scroll', handleScroll);
});

document.addEventListener('DOMContentLoaded', () => {
    window.scrollTo(0, 0);
});