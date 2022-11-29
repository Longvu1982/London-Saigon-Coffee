const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const scrollWrapper = $(".par-wrapper");
const headerTop = $('.header .top-section')
console.log('headerTop :', headerTop);
console.log("scrollWrapper :", scrollWrapper);

scrollWrapper.addEventListener("scroll", (e) => {
	console.log(e.target.scrollTop);
    if(e.target.scrollTop > 150) {
        headerTop.classList.add('hide')
    }
    else headerTop.classList.remove('hide')
});
