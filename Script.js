$(document).ready(function(){
	//Drop down menu for Projects
	$("#dropDownProjects2").hide();	
	$("#dropDownProjects").hide();	
		$(".list2").mouseenter(function(){
			$("#dropDownProjects").slideToggle();	
		});		
		$(".list2").mouseleave(function(){
			$("#dropDownProjects").delay(3000).slideUp();
		});
	$("#dropDownProjects2").hide();	
		$(".list1").mouseenter(function(){
			$("#dropDownProjects2").slideToggle();	
		});		
		$(".list1").mouseleave(function(){
			$("#dropDownProjects2").delay(3000).slideUp();
		});
    
});

function contactClick(){
	$('html, body').animate({ 
   scrollTop: $(document).height()-$(window).height()}, 
   1400, 
   "linear"
);
}

function sendMail(){
	var name = $("#contactName").val();
	var company = $("#contactCompany").val();
	var message = $("#contactMessage").val();
	
	window.location = "mailto:mattscarmans@gmail.com?subject=" + name + ", " + company + "&body=" + message;
}