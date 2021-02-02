jQuery(document).ready(function($) {

//     // fixed header
//     window.onscroll = function() {

//         if (window.pageYOffset > 140) {

//             $("#header").addClass("active");

//         } else {

//             $("#header").removeClass("active");

//         }
//     };
    // isotope
    let btns = $("#servicos .button-group button");

    btns.click(function(e) {
        $("#servicos .button-group button").removeClass("active");
        e.target.classList.add("active");
    

        let selector = $(e.target).attr("data-filter");
        $("#servicos .grid").isotope({
            filter: selector,
        });
    });

    $(window).on("load", function() {
        $("#servicos .grid").isotope({
            filter: "*",
        });
    });

    // magnify
    $(".grid .popup-link").magnificPopup({
        type: "image",
        gallery: {
            enabled: true,
            tPrev:"Anterior",
            tNext:"Próxima",
            tCounter: "%curr% de %total%",
        },
    });
});

anime.timeline({loop: true})
  .add({
    targets: '.ml15 .word',
    scale: [14,1],
    opacity: [0,1],
    easing: "easeOutCirc",
    duration: 800,
    delay: (el, i) => 800 * i
  }).add({
    targets: '.ml15',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });