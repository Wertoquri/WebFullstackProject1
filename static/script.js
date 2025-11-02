document.querySelector("form").addEventListener("submit", (event)=>{
    event.preventDefault()
    fetch("/add", {
        method: "POST",
        body: new FormData(event.target)
    }).then(()=>location.reload())
})

document.querySelector(".closeBtn").addEventListener("click", ()=>{
    document.querySelector(".modal").style.display = "none"
})
document.querySelector("#openBtn").addEventListener("click", ()=>{
    document.querySelector(".modal").style.display = "grid"
})


document.addEventListener('DOMContentLoaded', () => {
    const parallaxBg = document.querySelector('.parallax-bg');
    if (!parallaxBg) return;

    let ticking = false;
    
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const scrolled = window.pageYOffset;
                parallaxBg.style.transform = `translate3d(0, ${scrolled * 0.3}px, 0)`;
                ticking = false;
            });
            ticking = true;
        }
    });

    window.addEventListener('mousemove', (e) => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const mouseX = e.clientX / window.innerWidth - 0.5;
                const mouseY = e.clientY / window.innerHeight - 0.5;
                
                parallaxBg.style.transform = `
                    translate3d(
                        ${mouseX * 20}px,
                        ${window.pageYOffset * 0.3 + mouseY * 20}px,
                        0
                    )
                `;
                ticking = false;
            });
            ticking = true;
        }
    });
});