let resizeTimer;

window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loading-screen');
    setTimeout(() => {
        loadingScreen.classList.add('fade-out');
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 1000);
    }, 3000);

    function adjustContentMargin() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            const sidebar = document.querySelector('.sidebar');
            const content = document.querySelector('.content');
            const navbar = document.querySelector('.navbar');

            // 画面幅に応じて要素の表示/非表示と余白を調整
            if (window.innerWidth > 768) {
                // PC表示時
                content.style.marginLeft = '200px'; // サイドバーの幅に合わせる
                if (navbar) navbar.style.display = 'none';
                if (sidebar) {
                    sidebar.style.display = 'flex';
                    sidebar.style.width = '200px';
                }
            } else {
                // モバイル表示時
                content.style.marginLeft = '0';
                if (navbar) navbar.style.display = 'flex';
                if (sidebar) sidebar.style.display = 'none';
            }
        }, 250); // デバウンス時間を少し長めに設定
    }

    // 初期化時に実行
    adjustContentMargin();

    // resize イベントの監視
    window.addEventListener('resize', adjustContentMargin);
    
    // フルスクリーン変更イベントの監視を追加
    document.addEventListener('fullscreenchange', adjustContentMargin);
    document.addEventListener('webkitfullscreenchange', adjustContentMargin);
    document.addEventListener('mozfullscreenchange', adjustContentMargin);
    document.addEventListener('MSFullscreenChange', adjustContentMargin);

    // worksセクションのフェードイン処理
    const worksSection = document.querySelector('.works');

    function handleScroll() {
        const worksSectionTop = worksSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (worksSectionTop < windowHeight * 0.75) {
            worksSection.classList.add('fade-in');
            window.removeEventListener('scroll', handleScroll);
        }
    }

    window.addEventListener('scroll', handleScroll);
});

document.addEventListener('DOMContentLoaded', () => {
    window.scrollTo(0, 0);
    const email = 's1f102301987@iniad.org';
    const emailContainer = document.querySelector('.email');
    
    email.split('').forEach((char, index) => {
        const span = document.createElement('span');
        span.textContent = char;
        span.className = 'email-char';
        emailContainer.appendChild(span);
    });

    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            const chars = document.querySelectorAll('.email-char');
            chars.forEach((char, index) => {
                setTimeout(() => {
                    char.classList.add('visible');
                }, 50 * index);
            });
            observer.disconnect();
        }
    }, {
        threshold: 0.5
    });

    observer.observe(document.querySelector('.email-container'));

    const scrollTopBtn = document.getElementById('scroll-top');
    
    window.addEventListener('scroll', () => {
        // ページが100px以上スクロールされたらボタンを表示
        if (window.scrollY > 100) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });

    // クリックイベントの追加
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});