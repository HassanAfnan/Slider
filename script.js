const nextBtn = document.querySelector('.nextBtn');
const preBtn = document.querySelector('.preBtn');
const container = document.querySelector('.images');

let counter = 0;

nextBtn.addEventListener('click',nextSlide);
preBtn.addEventListener('click',prevSlide);

function nextSlide(){
	container.animate([{opacity:'0.1'},{opacity:'1.0'}]
		,{duration:1000,fill:'forwards'});
	if(counter === 3)
	{
		counter = -1;
	}

	counter++;

	container.style.backgroundImage = `url(img/bcg-${counter}.JPG)`
}

function prevSlide(){
	container.animate([{opacity:'0.1'},{opacity:'1.0'}]
		,{duration:1000,fill:'forwards'});
	if(counter === 0)
	{
		counter = 4;
	}

	counter--;

	container.style.backgroundImage = `url(img/bcg-${counter}.JPG)`
}