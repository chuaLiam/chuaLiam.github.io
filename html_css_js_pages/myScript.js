var slideIndex,slides,dots, captionText;
function initGallery(){
	slideIndex=0;
	slides=document.getElementsByClassName("imageHolder");
	slides[slideIndex].style.opacity=1;

	captionText=document.querySelector(".captionHolder .captionText");
	captionText.innerText=slides[slideIndex].querySelector(".captionText").innerText;

	dots=[];
	var dotsContainer=document.getElementById("dotsContainer");

	for(var i=0; i<slides.length;i++){
		var dot=document.createElement("span");
		dot.classList.add("dots");
		dot.setAttribute("onClick", "moveSlide("+i+")");
		dotsContainer.append(dot);
		dots.push(dot);
	}
	dots[slideIndex].classList.add("active");
}
initGallery();

function plusSlides(n){
	moveSlide(slideIndex + n);
}
function moveSlide(n){
	var i, cur, nxt;
	var moveSlideAnimClass={
		forCurrent:"",
		forNext:""
	}
	var slideTextAnimClass;

	if(n>slideIndex){
		if(n >= slides.length) {n=0}
		moveSlideAnimClass.forCurrent="moveLeftCurrentSlide";
		moveSlideAnimClass.forNext="moveLeftNextSlide";
		slideTextAnimClass = "slideTextFromTop";
	}else if(n < slideIndex){
		if(n<0){n = slides.length-1}
		moveSlideAnimClass.forCurrent="moveRightCurrentSlide";
		moveSlideAnimClass.forNext="moveRightNextSlide";
		slideTextAnimClass = "slideTextFromBottom";
	}
	if(n != slideIndex){
		nxt = slides[n];
		cur = slides[slideIndex];
		for(i = 0;i < slides.length;i++){
			slides[i].className = "imageHolder";
			slides[i].style.opacity = 0;
			dots[i].classList.remove("active");
		}

		cur.classList.add(moveSlideAnimClass.forCurrent);
		nxt.classList.add(moveSlideAnimClass.forNext);
		dots[n].classList.add("active");
		slideIndex = n;
	}
	captionText.style.display = "none";
	captionText.className = "captionText"+slideTextAnimClass;
	captionText.innerText = slides[n].querySelector(".captionText").innerText;
	captionText.style.display = "block"; 
}

document.getElementById('oncampus').addEventListener('click',
	function(){
		document.querySelector('.bg-modal').style.display = 'flex';
		document.querySelector('.bg-modal2').style.display = 'none';
		document.querySelector('.bg-modal3').style.display = 'none';
	});
document.getElementById('lagcentral').addEventListener('click',
	function(){
		document.querySelector('.bg-modal2').style.display = 'flex';
		document.querySelector('.bg-modal').style.display = 'none';
		document.querySelector('.bg-modal3').style.display = 'none';
	});
document.getElementById('taftcampus').addEventListener('click',
	function(){
		document.querySelector('.bg-modal3').style.display = 'flex';
		document.querySelector('.bg-modal2').style.display = 'none';
		document.querySelector('.bg-modal').style.display = 'none';
	});



document.querySelector('.close').addEventListener('click',
	function(){
		document.querySelector('.bg-modal').style.display = 'none';
	});
document.querySelector('.close2').addEventListener('click',
	function(){
		document.querySelector('.bg-modal2').style.display = 'none';
	});
document.querySelector('.close3').addEventListener('click',
	function(){
		document.querySelector('.bg-modal3').style.display = 'none';
	});


var timer = null;
function setTimer(){
	timer = setInterval (function(){
		plusSlides(-1);
	}, 4500)
}
setTimer();



