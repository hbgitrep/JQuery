$(document).ready(function(){
	//$('body').css({'font-size' : 50%})
	$('#table1').dataTable(
		{
			"paging":   true,
			"ordering": true,
			"info":     true,
			"scrollY":  "200px",
			"scrollCollapse": true
		}
	);
})
