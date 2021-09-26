
<div class="container-fluid">

<div  id="scrollspyHeading1" class="shadow-lg p-3 m-5 bg-body rounded">
<h1 class="text-primary">JQ & Bootstrap 5 - accordion filter</h1>
<hr/>
<h5 class="text-center">simply filter accordings body and header contents  using search box and filter.</h5>
<br>
<div class="lead">
	<h3>Initialization:</h3>
	you need three IDs :
	<ul>
      <li>search input box <code>&#x3C;input id=&#x22;search-data-input&#x22;/&#x3E;</code></li>
      <li>filter input box <code> &#x3C;input id=&#x22;filter_data_input&#x22;/&#x3E;</code></li>
      <li>filter button <code>&#x3C;buttonid=&#x22;filter_data_btn&#x22;&#x3E;add&#x3C;/button&#x3E;</code></li>
	  <li>filter container <code>&#x3C;div id=&#x22;filter_container&#x22;&#x3E;&#x3C;/div&#x3E;</code></li>
    </ul>
	then add data-filter-label attribute to div which contains according-collapse  <code>&#x3C;div id=&#x22;collapseOne&#x22; class=&#x22;accordion-collapse  collapse&#x22; aria-labelledby=&#x22;headingOne&#x22; data-filter-label=&#x22;apple;blue;red&#x22;&#x3E;</code>
	you can seprate each filter data by <kbd>;</kbd><br/>
	this attribute must be present in each div even if there's no filter data	
<br/>	
	now you can run the plugin <br/>
	<code><pre>
&#x3C;script&#x3E;
var plg = $().btAcc_sf({
&#x27;search_input_id&#x27; : &#x27;search-data-input&#x27; ,
 &#x27;filter_input_id&#x27; : &#x27;filter_data_input&#x27; ,
 &#x27;filter_btn_id&#x27; : &#x27;filter_data_btn&#x27; ,
 &#x27;filter_container&#x27; : &#x27;filter_container&#x27;
 });
&#x3C;/script&#x3E;
</pre></code>
	<h3>filter shortcut buttons:</h3>
	you can easly setup shortcut buttons for data filtering 
	<code>&#x3C;button class=&#x22;create_new_filter_data&#x22;&#x3E;red&#x3C;/button&#x3E</code> //filter accordings with data-label
</div>


</div>
</div>
  
