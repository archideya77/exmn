var elSiteHeader = document.querySelector('site-header')
var elSiteHeaderToggle = document.querySelector('.js-site-header-toggler')

if(elSiteHeader) {
    elSiteHeaderToggle.addEventListener('click',function(){
    elSiteHeader.classList.toggle('site-header--open')
    })
}