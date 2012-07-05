jQuery.noConflict();
jQuery(document).ready(function($) {

	$("td.buildConfigurationName img[src*='success.gif']").parents("table").addClass("buildSuccess");
	$("td.buildConfigurationName img[src*='error.gif']").parents("table").addClass("buildFailure");
	$("td.buildConfigurationName img[src*='buildGray.gif']").parents("table").addClass("buildUnknown");

	$("div.teamCityDateTime").each(
		function(index) {
			var spanStr = jQuery(this).find("span.date").attr("title");
			jQuery(this).replaceWith("Last built: <span class='buildDateLast'>" + spanStr + "</span>");
		}
	);

	$('#container').masonry({
		itemSelector: 'table.tcTable'
	});


}, jQuery);