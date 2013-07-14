/**
 * Returns a random integer between min and max
 * Using Math.round() will give you a non-uniform distribution WEEEEEE.
 */
function getRandomInt (min, max)
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/*
 * Creates 100 randomly placed dots in the "container" element on the page.
 * */
function generateDots()
{
	for(var i=0; i<10; i++)
	{
		var degrees = getRandomInt(0,360);
		var position1 = getRandomInt(-300,300);
		var position2 = getRandomInt(-300,300);
	
		document.getElementById('container').innerHTML += '<div class="dot-wrapper"><div style="-webkit-transform: rotateY('+degrees+'deg);"><div class="dot" style="left: '+position1+'px;  top: '+position2+'px;"><div style="-webkit-transform: rotateY('+degrees*-1+'deg);"><div class="inner-dot"><div class="inner-dot"></div></div></div></div></div></div>';
	}
}

function clearDots()
{
	document.getElementById('container').innerHTML = '';
}


