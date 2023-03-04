$(document).ready(function() {
	const textArray = textString.split('');
	const textElem = $('.hacking-animation__text');

	let count = 5;

	setInterval(() => {
			if(textArray[count] === "\n") {
					textElem.append("<br>");
			}
			else {
					textElem.append(`<span class="hacking-animation__character">${textArray[count]}</span>`);
			}

			count++;
			if (count === textArray.length) {
					count = 5;
			}
	}, 20);
});

var textString = สวัสดีนะ
    