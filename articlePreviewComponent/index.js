var shareContainer = document.querySelector('.share-svg-container');
var shareSvg = document.querySelector('.share-svg');
var shareOptions= document.querySelector('.share-options');

var shareSvgMobile = document.querySelector('.share-svg-mobile');
var shareContainerMobile = document.querySelector('.share-svg-container-mobile');
var shareOptionsMobile = document.querySelector('.share-options-mobile');

shareContainer.addEventListener('click', function(){
    if (shareOptions.classList.contains('active')) {
        shareOptions.classList.remove('active');
        shareContainer.classList.remove('active');
        shareSvg.classList.remove('active');

    } else {
        shareOptions.classList.add('active');
        shareContainer.classList.add('active');
        shareSvg.classList.add('active');
    }
});

shareContainerMobile.addEventListener('click', function(){
    if(shareContainerMobile.classList.contains('active')){
        shareSvgMobile.classList.remove('active');
        shareContainerMobile.classList.remove('active');
        shareOptionsMobile.classList.remove('active')

    } else{
        shareSvgMobile.classList.add('active');
        shareContainerMobile.classList.add('active');
        shareOptionsMobile.classList.add('active')
    }
    


});
