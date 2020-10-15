function goLeft() {
  document.getElementById("works").style.transform  = 'translate(-0%, 0%) ';
  document.getElementById("about").style.transform  = 'translate(-100%, 0%) ';
  document.getElementById("home__logo").style.transform  = 'translate(-200%, 0%)';
  document.getElementById("home__logo").style.opacity  = 0;
  //pause video when click on works button
  document.getElementById("video").src="https://player.vimeo.com/video/247411626?title=0&byline=0&portrait=0";

  document.getElementById("container1").style.transform  = 'translate(100vw, 0%) ';
  document.getElementById("container2").style.transform  = 'translate(100vw, 0%) ';
  document.getElementById("container3").style.transform  = 'translate(100vw, 0%) ';
  document.getElementById("container4").style.transform  = 'translate(100vw, 0%) ';

  document.getElementById("container5").style.transform  = 'translate(100vw, 0%) ';
  document.getElementById("container6").style.transform  = 'translate(100vw, 0%) ';

  var x, i;
  x = document.querySelectorAll(".home__dots");
  for (i = 0; i < x.length; i++) {
    x[i].style.transform  = 'translate(-500%, 0%)';
    x[i].style.opacity  = 0;
    }
}

function container1Left() {
  document.getElementById("container1").style.transform  = 'translate(0vw, 0%) ';
  var blocks = document.getElementsByClassName('block');
	var container = document.getElementsByClassName('container1');
	var hs1 = new HorizontalScroll.default({
		blocks : blocks,
		container: container,
	});
}

function container2Left() {
  document.getElementById("container2").style.transform  = 'translate(0vw, 0%) ';
  var blocks = document.getElementsByClassName('block2');
	var container = document.getElementsByClassName('container2');
	var hs2 = new HorizontalScroll.default({
		blocks : blocks,
		container: container,
	});
}

function container3Left() {
  document.getElementById("container3").style.transform  = 'translate(0vw, 0%) ';
  var blocks = document.getElementsByClassName('block3');
	var container = document.getElementsByClassName('container3');
	var hs2 = new HorizontalScroll.default({
		blocks : blocks,
		container: container,
	});
}

function container4Left() {
  document.getElementById("container4").style.transform  = 'translate(0vw, 0%) ';
  var blocks = document.getElementsByClassName('block4');
	var container = document.getElementsByClassName('container4');
	var hs2 = new HorizontalScroll.default({
		blocks : blocks,
		container: container,
	});
}

function container5Left() {
  document.getElementById("container5").style.transform  = 'translate(0vw, 0%) ';
  var blocks = document.getElementsByClassName('block5');
	var container = document.getElementsByClassName('container5');
	var hs2 = new HorizontalScroll.default({
		blocks : blocks,
		container: container,
	});
}

function container6Left() {
  document.getElementById("container6").style.transform  = 'translate(0vw, 0%) ';
  var blocks = document.getElementsByClassName('block6');
	var container = document.getElementsByClassName('container6');
	var hs2 = new HorizontalScroll.default({
		blocks : blocks,
		container: container,
	});
}

function goRight() {
  document.getElementById("about").style.transform  = 'translate(0%, 0%) ';
  document.getElementById("works").style.transform  = 'translate(100%, 0%) ';
  document.getElementById("home__logo").style.transform  = 'translate(200%, 0%)';
  document.getElementById("home__logo").style.opacity  = 0;
  document.getElementById("container1").style.transform  = 'translate(100vw, 0%) ';
  document.getElementById("container2").style.transform  = 'translate(100vw, 0%) ';
  document.getElementById("container3").style.transform  = 'translate(100vw, 0%) ';
  document.getElementById("container4").style.transform  = 'translate(100vw, 0%) ';
  document.getElementById("container5").style.transform  = 'translate(100vw, 0%) ';
  document.getElementById("container6").style.transform  = 'translate(100vw, 0%) ';

  var x, i;
  x = document.querySelectorAll(".home__dots");
  for (i = 0; i < x.length; i++) {
    x[i].style.transform  = 'translate(500%, 0%)';
    x[i].style.opacity  = 0;
    }
  
}

function goHome() {
  document.getElementById("about").style.transform  = 'translate(-100%, 0%) ';
  document.getElementById("works").style.transform  = 'translate(100%, 0%) ';
  document.getElementById("home__logo").style.transform  = 'translate(0%, 0%)';
  document.getElementById("home__logo").style.opacity  = 1;
  document.getElementById("container1").style.transform  = 'translate(100vw, 0%) ';
  document.getElementById("container2").style.transform  = 'translate(100vw, 0%) ';
  document.getElementById("container3").style.transform  = 'translate(100vw, 0%) ';
  document.getElementById("container4").style.transform  = 'translate(100vw, 0%) ';
  document.getElementById("container5").style.transform  = 'translate(100vw, 0%) ';
  document.getElementById("container6").style.transform  = 'translate(100vw, 0%) ';
  
  var x, i;
  x = document.querySelectorAll(".home__dots");
  for (i = 0; i < x.length; i++) {
    x[i].style.transform  = 'translate(0%, 0%)';
    x[i].style.opacity  = 1;
    }
}

//works-list----------------
$('.works__list').each(function(){
	$(this).find('.works__list-item').each(function(){
		$(this).click(function(){
			$(this).parent().find('.works__list-item').removeClass('btn-active');
      $(this).addClass('btn-active');
		});
	});
});

//default on first project-------------------
function defaultActive() {
  x = document.querySelectorAll(".works__list-item");
  for (i = 0; i < x.length; i++) {
    x[i].classList.remove('btn-active');  
    }
  document.getElementById('hero1').classList.add('btn-active');
  var x, i;
  document.getElementById('hero').src='img/hero/project1-hero.jpg';
}

//work-list hero pictures change----------------
function switchPic1() {
  document.getElementById('hero').src='img/hero/project1-hero.jpg';
}
function switchPic2() {
  document.getElementById('hero').src='img/hero/project2-hero.png'
}
function switchPic3() {
  document.getElementById('hero').src='img/hero/project3-hero.jpg'
}
function switchPic4() {
  document.getElementById('hero').src='img/hero/project4-hero.jpg'
}
function switchPic5() {
  document.getElementById('hero').src='img/hero/project5-hero.jpg'
}
function switchPic6() {
  document.getElementById('hero').src='img/hero/project6-hero.png'
}