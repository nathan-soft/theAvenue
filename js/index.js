(function() {
    console.log("hey");
    let navElement = $(".navbar");
    let landingPage = $("#home");
    let whyUsSection = $("#whyTheAvenue");
    //get scrollbar position
    if(window.pageYOffset >= landingPage.offset().bottom){
        if(navElement.hasClass("isHidden")){
            navElement.removeClass("isHidden bg-transparent navbar-dark");
            navElement.addClass("bg-white navbar-purple navbar-light");
            navElement.slideDown(600);
        }
    }


    $(document).on("scroll", function(){
        if(window.pageYOffset >= whyUsSection.offset().top){
            if(navElement.hasClass("isHidden")){
                navElement.removeClass("isHidden bg-transparent navbar-dark");
                navElement.addClass("bg-white navbar-purple");
                navElement.slideDown(600);
            }
        }else if(window.pageYOffset == landingPage.offset().top){
            if(navElement.hasClass("isHidden")){
                navElement.removeClass("isHidden bg-white navbar-purple");
                navElement.addClass("bg-transparent navbar-dark");
                navElement.slideDown(600);
            }
        }else{
            if(!navElement.hasClass("isHidden")){
                navElement.slideUp(400);
                navElement.removeClass("bg-white");
                navElement.addClass("isHidden bg-transparent navbar-light");
            } 
        }
    });

    ////SMOOTH SCROLLING
    let anchorlinks = document.querySelectorAll('a[href^="#"]');

    for (let item of anchorlinks) { // relitere
        item.addEventListener('click', (e)=> {
            let hashval = item.getAttribute('href');
            let target = document.querySelector(hashval);
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            history.pushState(null, null, hashval)
            e.preventDefault();
        });
    }
})();