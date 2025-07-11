
<div class="container-fluid">

  <div class="shadow-lg p-4 mb-5 bg-light rounded">
    <h1 class="text-primary">jQuery & Bootstrap Accordion Filter</h1>
    <p class="lead">Easily filter Bootstrap accordion items based on header, body, and custom filter tags.</p>
    <hr>
    <h4>🔧 Setup Instructions</h4>
    <p>To use this plugin, you need the following elements in your HTML:</p>
    <ul>
      <li><code>&lt;input id="search-data-input" /&gt;</code> – for searching accordion content (headers & body)</li>
      <li><code>&lt;input id="filter_data_input" /&gt;</code> – to add filter keywords</li>
      <li><code>&lt;button id="filter_data_btn"&gt;Add&lt;/button&gt;</code> – button to submit the filter</li>
      <li><code>&lt;div id="filter_container"&gt;&lt;/div&gt;</code> – shows active filter tags</li>
    </ul>

  <p>Each collapsible accordion section should contain a <code>data-filter-label</code> attribute, like:</p>
  <pre><code>&lt;div class="accordion-collapse collapse" 
   data-filter-label="apple;blue;red"&gt;...&lt;/div&gt;</code></pre>

  <p>You can separate multiple filter tags using a <kbd>;</kbd>. The attribute is required for each accordion item.</p>

  <h4>🚀 Initialize the Plugin</h4>
  <pre><code>&lt;script&gt;
var plg = $().btAcc_sf({
  search_input_id: 'search-data-input',
  filter_input_id: 'filter_data_input',
  filter_btn_id: 'filter_data_btn',
  filter_container: 'filter_container',
  lang: 'en'
});
&lt;/script&gt;
</code></pre>

  <h4>⚡ Filter Shortcut Buttons</h4>
  <p>You can also add quick-filter buttons like:</p>
  <pre><code>&lt;button class="create_new_filter_data"&gt;red&lt;/button&gt;</code></pre>
  <p>This will filter accordion items containing the tag <code>red</code>.</p>
  </div>
  
</div>
