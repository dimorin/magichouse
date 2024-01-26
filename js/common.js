;(function(){
    /* gnb */
    /* var menubar = document.querySelector('.menu-bar');
    var sidemenu = document.querySelector('.sidemenu');
    var btn_close = document.querySelector('.btn_close');
    btn_close.addEventListener('click',function(){
        sidemenu.classList.remove('show');
    });
    menubar.addEventListener('click',function(){
        sidemenu.classList.add('show');
    }); */


    var content_body_left = document.querySelector('.content_body_left');
    var content_body_right = document.querySelector('.content_body_right');
    var gnb_door = document.querySelector('.gnb_door');

    gnb_door.addEventListener('click',function(){
        
        content_body_left.classList.toggle("open");
        content_body_right.classList.toggle("open");
        this.classList.toggle('open')
    })
    
})();
