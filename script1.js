

 //scroll sections
 let sections = document.querySelectorAll('section');
 let navLinks = document.querySelectorAll('header nav a');

 window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {

            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
                
            });

            /*active sections for animation on scroll*/
            sec.classList.add('show-animate')
            
        }

        //if want to use animation that repeats on scroll use this*/
        else{
            sec.classList.remove('show-animate')
        }

    });
    
}

 

 window.onscroll = () => {  
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
 }




 //toggle icon navbar

 let menuIcon = document.querySelector('#menu-icon');
 let navbar = document.querySelector('.navbar');

 menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
 }



 //remove toggle icon and navbar when click navbar links (scroll)
 menuIcon.classList.remove('bx-x');
 navbar.classList.remove('active'); 


function SendEmail(){
    var params = {
        user_name : document.getElementById("user_name").value,
        user_email : document.getElementById("user_email").value,
        user_number : document.getElementById("user_number").value,
        email_subject : document.getElementById("email_subject").value,
        message : document.getElementById("message").value
    }
    emailjs.send("service_6tttkla", "template_ilt22zg", params).then(alert("Mail send Successfully"))
}
