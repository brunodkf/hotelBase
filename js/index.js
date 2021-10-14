

// CARROSSEL

function carousel(){
    let buttonL = document.querySelector('.listRow--left');
    let buttonR = document.querySelector('.listRow--right');

    buttonL.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
    width="30" height="30"
    viewBox="0 0 172 172"
    style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#ffffff"><path d="M120.26563,10.25281c-1.78719,0.05375 -3.48031,0.80625 -4.73,2.08281l-68.8,68.8c-2.6875,2.6875 -2.6875,7.04125 0,9.72875l68.8,68.8c1.72,1.80062 4.28656,2.52625 6.70531,1.89469c2.40531,-0.63156 4.28656,-2.51281 4.91813,-4.91813c0.63156,-2.41875 -0.09406,-4.98531 -1.89469,-6.70531l-63.93563,-63.93563l63.93563,-63.93562c2.02906,-1.97531 2.64719,-4.99875 1.54531,-7.61906c-1.11531,-2.60688 -3.70875,-4.27313 -6.54406,-4.1925z"></path></g></g></svg>`;

    buttonR.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
    width="30" height="30"
    viewBox="0 0 172 172"
    style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#ffffff"><path d="M51.53281,10.25281c-2.80844,0 -5.32125,1.70656 -6.36938,4.3c-1.06156,2.59344 -0.43,5.56312 1.57219,7.51156l63.93562,63.93562l-63.93562,63.93563c-1.80063,1.72 -2.52625,4.28656 -1.89469,6.70531c0.63156,2.40531 2.51281,4.28656 4.91813,4.91813c2.41875,0.63156 4.98531,-0.09406 6.70531,-1.89469l68.8,-68.8c2.6875,-2.6875 2.6875,-7.04125 0,-9.72875l-68.8,-68.8c-1.30344,-1.33031 -3.07719,-2.08281 -4.93156,-2.08281z"></path></g></g></svg>`;
  
    $(function(){
      $('.cards-container').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        autoplaySpeed: 6000,
        arrow: true,
        prevArrow: $('.listRow--left'),
        nextArrow: $('.listRow--right'),
        responsive: [
          {
            breakpoint: 1700, 
            settings: {
              slidesToShow: 4,
              slidesToScroll: 3,
            }
          },
          {
            breakpoint: 1430,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
            }
          },
          {
            breakpoint: 1244,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            }
          },
          {
            breakpoint: 1065,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
            }
          }
          
        ]
      })  
     })

}

carousel();

