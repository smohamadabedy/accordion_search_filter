


(function( $ ) {
$.fn.btAcc_sf = function(options) {


//define seller
var system = this;

//define inputs
var txt_search = $("#"+options.search_input_id);
var txt_filter = $("#"+options.filter_input_id);
var filter_btn = $('#'+options.filter_btn_id);
var filter_container = $('#'+options.filter_container);
//event_add_filter
filter_btn.click(function(){
	system.add_filter_data();
	system.showAll();
});

//event_rem_filter
$(document).on('click', '.filter_data_close_btn', function() {
	
	system.remove_filter_data($(this).parent());
	system.showAll();

	
});



$(document).on('click', '.create_new_filter_data', function() {
 let filter_text = $(this).text();
var carty = system.get_filter_data();
	for(x in carty){
	 if(carty[x] == filter_text){
		alert("قبلا ثبت شده است")
		return false;
	 }
	}
	filter_container.append('<i onClick="" class=" btn btn-primary  m-1"><span class="filter_data">'+filter_text+'</span> | <span class="btn btn-danger filter_data_close_btn">X</span></i>');
	txt_filter.val("");
	system.showAll();
});


//event_search
txt_search.keyup(function(){
 
///begin

///validate
var txt = $(this).val();
if(txt == "" || txt == null ){
system.showAll();
return false;
}else{
system.closeall();
}



var cartyy = system.get_filter_data();

///serach in body
$('.accordion-body').each(function(){
   if($(this).text().toUpperCase().indexOf(txt.toUpperCase()) != -1){
   
 if(cartyy.length != 0){
			$data_filter = ( $(this).parent().attr('data-filter-label'));
			let $data_filter_arr = $data_filter.split(";");
			for(x in cartyy){
				if($data_filter_arr.includes(cartyy[x])){
				       $(this).parent().removeClass('collapse');
						$(this).parent().parent().show();
				}
			}
			
		 }else{
			       $(this).parent().removeClass('collapse');
					$(this).parent().parent().show();
		  }	   
	   

	}else{}
});

///serach in header
$('.accordion-header').each(function(){
   if($(this).text().toUpperCase().indexOf(txt.toUpperCase()) != -1){
			
		  if(cartyy.length != 0){
			$data_filter = ($(this).find("~ div").attr('data-filter-label'));
			let $data_filter_arr = $data_filter.split(";");
			for(x in cartyy){
				if($data_filter_arr.includes(cartyy[x])){
				$(this).find("~ div").removeClass('collapse');
				$(this).parent().show();
				}
			}
			
		 }else{
			$(this).find("~ div").removeClass('collapse');
			$(this).parent().show();
		  }
		  
      
	}else{}
});
//end
///keyup function
});

////refrshing page
this.closeall = function (){
$('.accordion-collapse').each(function(){
	$(this).addClass("collapse");
	$(this).removeClass('show');
	$(this).parent().hide();

});
}

this.showAll = function(){

system.closeall();
let cartyy = system.get_filter_data();

if(cartyy.length != 0){
system.show_by_filter();
}else{
$('.accordion-collapse').each(function(){
	$(this).parent().show();
});
}






}

this.remove_filter_data = function (el){
  let element = el;
  element.remove();
  system.closeall();
  txt_filter.val("");
  txt_search.val("");
}

this.add_filter_data = function (){
	let filter_text = txt_filter.val();
	if(filter_text == "" || filter_text == null ){
	return false;
	}
	var carty = system.get_filter_data();
	for(x in carty){
	 if(carty[x] == filter_text){
		alert("قبلا ثبت شده است")
		return false;
	 }
	}
	filter_container.append('<i onClick="" class=" btn btn-primary  m-1"><span class="filter_data">'+filter_text+'</span> | <span class="btn btn-danger filter_data_close_btn">X</span></i>');

	txt_filter.val("");
}

this.get_filter_data = function (){	
	let cart = [];
	$(".filter_data").each(function(){
	cart.push($(this).text());
	});
	return cart;
}

this.show_by_filter  = function(){


var carty = system.get_filter_data();
		$('.accordion-collapse').each(function(){
			$data_filter = ($(this).attr('data-filter-label'));
			let $data_filter_arr = $data_filter.split(";");
			for(x in carty){
					if($data_filter_arr.includes(carty[x])){
					$(this).parent().show(200);

				}
			
			}
		});





}

//end of plugin

return this;
}

}( jQuery ));


