$("#switch").on('click', function () {
		if (!$("body").hasClass("stop-rain"))  {
			document.getElementById('rain').hidden = true
			$("#switch").addClass("switched");
			$("body").addClass("stop-rain");
			slowClock()
		}
		else {
			$("body").removeClass("stop-rain");
			document.getElementById('rain').hidden = false
			$("#switch").removeClass("switched");
			fastClock()
			if($("body").hasClass("off-cloud")){
				$("body").removeClass("off-cloud");
			}

		}
	});

$(".cloud").on('click', function () {
		if (!$("body").hasClass("off-cloud")) {
			$("body").addClass("off-cloud");
		} else {
			$("body").removeClass("off-cloud")
		}
	});
