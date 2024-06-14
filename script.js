const star = document.querySelectorAll('.star');
const starWrapper = document.querySelector('.starWrapper');
const starText = document.querySelector('.star-text');

starWrapper.addEventListener('click',(e)=>{
    console.log(e.target);
    star.forEach((ele) =>{
        const curr = ele.getAttribute('data-id');
        const target = e.target.getAttribute('data-id')
        if(target>=curr){
            ele.innerHTML='&#9733';
            ele.classList.add('fill')
            starText.innerHTML=`${target} / ${star.length}`
        }else{
            ele.innerHTML='&#9734;';
            if(ele.classList[1]){
                ele.classList.remove('fill')
            }
        }
        
    })
})