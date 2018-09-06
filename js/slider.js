$(function () {

	var $lisMin = $('.wrap-min ul').find('li'),
		length = $lisMin.length;

	$lisMin.each(function (index, item) {
		$(item).attr('data-id', index	);
	});

	var $lisAll = $('.wrap-all ul').find('li'),
		length = $lisAll.length;

	$lisAll.each(function (index, item) {
		$(item).attr('data-id', '0' + index);
	});

	function sliderMin($lisMin, index, length) {
		$lisMin.each(function (index, item) {
			item.className = '';
		});
		index += length;
		$($lisMin[index % length]).addClass('active');
		$($lisMin[(index - 1) % length]).addClass('left1');
		$($lisMin[(index - 2) % length]).addClass('left2');
		$($lisMin[(index + 1) % length]).addClass('right1');
		$($lisMin[(index + 2) % length]).addClass('right2');
	}

	function sliderAll($lisAll, index, length) {
		$lisAll.each(function (index, item) {
			item.className = '';
		});
		index += length;
		$($lisAll[index % length]).addClass('active');
		$($lisAll[(index - 1) % length]).addClass('left1');
		$($lisAll[(index - 2) % length]).addClass('left2');
		$($lisAll[(index + 1) % length]).addClass('right1');
		$($lisAll[(index + 2) % length]).addClass('right2');
	}

	sliderMin($lisMin, 2, length);
	sliderAll($lisAll, 2, length);

	$lisMin.on('click', function (e) {
		var id = parseInt($(e.target).parents('li').attr('data-id'));
		sliderMin($lisMin, id, length);
	});

	$lisAll.on('click', function (e) {
		var id = parseInt($(e.target).parents('li').attr('data-id'));
		sliderAll($lisAll, id, length);
	});

});
