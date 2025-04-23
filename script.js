// DOM이 로드된 후 실행
document.addEventListener('DOMContentLoaded', () => {
    // 스크롤 애니메이션
    const scrollElements = document.querySelectorAll('.skill-card, .about-text p');
    
    const elementInView = (el, scrollOffset = 100) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
            elementTop <= (window.innerHeight || document.documentElement.clientHeight) - scrollOffset
        );
    };
    
    const displayScrollElement = (element) => {
        element.classList.add('scrolled');
    };
    
    const hideScrollElement = (element) => {
        element.classList.remove('scrolled');
    };
    
    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 100)) {
                displayScrollElement(el);
            } else {
                hideScrollElement(el);
            }
        });
    };
    
    // 스크롤 리스너 추가
    window.addEventListener('scroll', () => {
        handleScrollAnimation();
    });
    
    // 초기 로드 시 한 번 실행
    handleScrollAnimation();
    
    // 스무스 스크롤 네비게이션
    const navLinks = document.querySelectorAll('nav a, .cta-button');
    
    navLinks.forEach(link => {
        link.addEventListener('click', e => {
            // CTA 버튼인 경우 About 섹션으로 이동
            if (link.classList.contains('cta-button')) {
                e.preventDefault();
                document.querySelector('#about').scrollIntoView({ 
                    behavior: 'smooth' 
                });
                return;
            }
            
            // 일반 네비게이션 링크
            const targetId = link.getAttribute('href');
            if (targetId.startsWith('#')) {
                e.preventDefault();
                document.querySelector(targetId).scrollIntoView({ 
                    behavior: 'smooth' 
                });
            }
        });
    });
    
    // 연락처 폼 제출
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // 폼 데이터 가져오기
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // 실제 애플리케이션에서는 서버로 데이터 전송 로직이 들어갈 자리
            console.log('Form submitted:', { name, email, message });
            
            // 사용자에게 알림
            alert('메시지가 전송되었습니다! 감사합니다.');
            
            // 폼 리셋
            this.reset();
        });
    }
    
    // 스크롤 시 헤더 스타일 변경
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}); 