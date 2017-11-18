var slides ["", "", ""];
int index = 0;

function nextSlide(int pos)
{
	index+=pos;

	if(index < 0)
		index = slides.length-1;
	else if(index >= slides.length)
		index = 0;
}