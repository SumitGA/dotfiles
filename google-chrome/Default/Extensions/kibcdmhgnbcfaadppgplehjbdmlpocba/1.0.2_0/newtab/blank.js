var searchElement = 'search_field';
var privSearch = false;
var guid = "";
var dateStamp = "";
var src1 = "/newtab/images/incognito_active.png";
var src2 = "/newtab/images/incognito_disable.png";


if(searchElement && searchElement !== ""){
	window._tr_ac_se = searchElement;
}

$(document).ready(function()
{
	history.pushState(null, null, "/");
	chrome.storage.local.get("privSearch", function(res) {
		if(res.privSearch) {
			privSearch = true;
			$('#selector img').attr('src',src1);
		}
	});
	$("#search_field").focus();
	$("body").click(function(){
		$("#search_field").focus();
	});
	setTimeout(function(){
		chrome.runtime.sendMessage({task:"getGuid"}, function(res){
			guid = res.Guid;
			// $("#guid_field").val(guid);
		});
		chrome.runtime.sendMessage({task:"checkFirstRun"}, function(res){
			var isFirstRun = res.isFirstRun;
			if (isFirstRun)
				$(".bubble").fadeIn("fast");
		});
	}, 500);


	$("#selector").click(function(){
		 $(".bubble").fadeOut("fast");
	   var src = $('#selector img').attr('src');
	   if(src == src1){
			 privSearch = false;
			 $('#selector img').attr('src',src2);
		 }
	   else{
			 privSearch = true;
			 $('#selector img').attr('src',src1);
		 }
		 chrome.storage.local.set({"privSearch" : privSearch});
	});
	var hoverTimeout;
	$("#selector").hover(function() {
		hoverTimeout = setTimeout(function() {
			$(".bubble").css("display", "block");
		}, 800);
	},
	function() {
		clearTimeout(hoverTimeout);
		$(".bubble").css("display", "none");
	});


	$(".search_form").on("submit", function(e) {
		e.preventDefault();
		var newDate = getmmddyy();
		var searchRdr = "http://search.eshield.com/serp?serpv=102&guid=" + guid + "&action=default_search&type=67469_" + newDate + "&k=" + $("#search_field").val();
		if(!privSearch){
			searchRdr = "http://services.searchtabnew.com/crx/search.php?guid=" + guid + "&k=" + $("#search_field").val();
		}
		window.location = searchRdr;
	});

});

// returns date in format: mmddyy
function getmmddyy() {
	var d = new Date();
	var month = d.getMonth() + 1;
	var monthStr = month.toString();
	var current_date = d.getDate().toString();
	var current_year = d.getFullYear().toString();
	if(monthStr.length === 1) {
		month = "0" + monthStr;
	}
	if(current_date.length === 1) {
		current_date = "0" + current_date;
	}
	current_year = current_year.substr(-2);

	var reformatted_date = month + current_date + current_year;
	return reformatted_date;
}
