const bar = document.getElementById('bar')
const nav = document.getElementById('nav-bar')
const close1 = document.getElementById('close')


if(bar){
    bar.addEventListener('pointerdown',()=>{
        nav.classList.add('active')
    })
}

if(close1){
    close1.addEventListener('pointerdown',()=>{
        nav.classList.remove('active')
    })
}


