const sub = document.querySelector('#subject')
const lable = document.querySelector('#onchangeSubject')
const form = document.getElementById('form-contact')

function addLable(value1){
    
lable.innerHTML=value1
lable.setAttribute('id',value1)
lable.setAttribute('name',value1)
    
}




function val_name(e){
    let name = document.getElementById('fname').value
    localStorage.setItem('textValue',name)
    return false
}


sub.addEventListener('change',()=>{
    let user_subject = sub.value
    if(user_subject == '#'){
        // alert('please select appropriate subject')
    }
    if(user_subject!='#'){
        addLable(sub.value)
        
    }
    
})

form.addEventListener('submit',val_name)


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

