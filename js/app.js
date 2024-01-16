let navigation__bar=document.querySelector('.navigation__bar');
let nav__addition=document.querySelector('.nav__addition');
navigation__bar.addEventListener('click',()=>{
    nav__addition.classList.toggle('active__nav');
    navigation__bar.classList.toggle('active__hamburger');
})
// scroll TOp 
let btn__top=document.querySelector('.btn__top');
function scrollTop(){
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

      if (scrollTop > 20) {
        btn__top.style.display = 'flex';
      } else {
        btn__top.style.display = 'none';
      }
}
window.onscroll=scrollTop;
scrollTop()