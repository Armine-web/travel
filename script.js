    //search bar
    const glass = document.querySelector('.fa-magnifying-glass');
    const searchBar = document.querySelector('.search_bar');

        glass.addEventListener('click', function() {
            searchBar.classList.toggle('active');
        });
 

    //login
     const loginForm = document.querySelector('.login_form');
     const xMark = document.querySelector('.fa-xmark');
     const login = document.querySelector('.fa-user');
 
     login.addEventListener('click', function() {
         loginForm.classList.add('active');
     });
 
     xMark.addEventListener('click', function() {
         loginForm.classList.remove('active');
     });

     //slides
        const slides = document.querySelectorAll('.slide');
        const buttons = document.querySelectorAll('.div_btn');
       
        slides[0].style.display = 'block';
        buttons[0].classList.add('active');
    
        buttons.forEach((button, i) => {
            button.addEventListener('click', function() {
                buttons.forEach(btn => {
                    btn.classList.remove('active');
                });
    
                button.classList.add('active');
    
                slides.forEach(slide => {
                    slide.style.display = 'none';
                });
    
                slides[i].style.display = 'block';
            });
        });

    //burger
    const burger = document.querySelector('#menu_bar');
    const menus = document.querySelector('.navbar');

    burger.addEventListener('click', function(){
        menus.classList.toggle('active');
    })



       