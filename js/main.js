$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load',function(){

        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        $('section').each(function(){

            let top = $(window).scrollTop();
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let id = $(this).attr('id');

            if(top >= offset && top < offset + height){
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }

        });

    });

   $('accordion-heading').click(function(){

    $('accordion .accordion-content').slideup();

    $(this).next('.accordion-content').slideDown();

   });

});

function whatsapp(){
    var name = document.getElementById('name').value;
    var telepon = document.getElementById('telepon').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var pesan = document.getElementById('pesan').value;

    var whatsappurl="https://wa.me/6281271811839?text="
    + "Nama Client:" + name + "%0a"
    + "No Telepon:" + telepon + "%0a"
    + "Email Client:" + email + "%0a"
    + "Subjek:" + subject + "%0a"
    + "Pesan:" + pesan + "%0a"

    window.open(whatsappurl,"_blank").focus();
}