//header fixed
let last_known_scroll_position = 0;
let ticking = false;

function doSomething(scroll_pos) {
  // do something with the scroll position
  if (scroll_pos > 70) {
    document.querySelector('.header').classList.add("header_scroll")
    document.querySelector('.navbar').classList.add("navbar_scroll")
  }else {
    document.querySelector('.header').classList.remove("header_scroll")
    document.querySelector('.navbar').classList.remove("navbar_scroll")
  }
}

window.addEventListener('scroll', () => {
  last_known_scroll_position = window.scrollY;
  if (!ticking) {
     window.requestAnimationFrame(function() {
       doSomething(last_known_scroll_position);
       ticking = false;
     });
   }
   ticking = true;
})
if(screen.width > 768){
  //wow plugin initialize
		new WOW().init();
  //Experience timeline
  document.querySelector('#twelve').addEventListener('click', () => {
    showYearDescription(1)
  })
  document.querySelector('#fifteen').addEventListener('click', () =>{
    showYearDescription(2)
  })
  document.querySelector('#sixteen').addEventListener('click', () => {
    showYearDescription(3)
  })
  document.querySelector('#seventeen').addEventListener('click', () => {
    showYearDescription(4)
  })

  let descriptionIndex = 4;
  function showDescriptions(index) {
    let descriptions = document.getElementsByClassName('description');
    let btns = document.getElementsByClassName('btn_year');
    console.log(descriptions);
    for (var i = 0; i < descriptions.length; i++) {
      descriptions[i].style.display = 'none';
      btns[i].style.backgroundColor = '#D8D8D8'
    }
    btns[descriptionIndex - 1].style.backgroundColor = '#F36B60'
    descriptions[descriptionIndex - 1].style.display = 'block';
  }
  showDescriptions(1)
  function showYearDescription(num) {
    descriptionIndex = num
    showDescriptions(descriptionIndex)
  }
}
// $(document).ready(function(){
//
// 	// wow plugin initialize
// 	if(screen.width > 768){
// 		new WOW().init();
// 	}
//
//
// 	// fancybox plugin options
// 	$('[data-fancybox]').fancybox({
// 		loop : true
// 	});
//
// 	// stellar plugin initialize
// 	if(screen.width > 768){
// 		$(window).stellar();
// 	}
// })
