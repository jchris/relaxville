function get_link(hash) {
  return $('a[href="'+hash+'"]');
};

$.CouchApp(function(app) {

  // recent reports
  $(get_link("#!recent")).click(function() {
    app.view("recent", {
      reduce :false,
      descending : true,
      success : function(view) {
        // TODO this should use mustache and be a table
        $("#content").html('<h2>Recent Reports</h2>'+
        '<table class="view"><tr><th>version</th><th>pass</th><th>fail</th><th>success</th><th>when</th></tr></table>');
        var trows = view.rows.map(function(row) {
          row.value.link = app.futonDocPath(row.id);
          row.value.version = row.key[0];
          row.value.timestamp = app.prettyDate(row.key[1]);
          return Mustache.to_html(
            '<tr><td><a href="{{link}}">{{version}}</a></td><td>{{pass}}</td><td>{{fail}}</td><td>{{percent}}%</td><td class="date">{{timestamp}}</td></tr>', 
            row.value);
        });
        $("#content table").append(trows.join(''));
        $("#content table")
      }
    });
  });
  
  // success by test
  $(get_link("#!tests")).click(function() {
    app.view("by_test", {
      group_level : 1,
      success : function(view) {
        $("#content").html('<h2>Success By Tests</h2>'+
          '<table class="view"><tr><th>test name</th><th>pass</th><th>fail</th><th>success</th></tr></table>');
        var trows = view.rows.sort(function(a,b) {
          return a.value.percent > b.value.percent;
        }).map(function(row) {
          row.value.name = row.key[0];
          return Mustache.to_html(
            '<tr><td>{{name}}</td><td>{{pass}}</td><td>{{fail}}</td><td>{{percent}}%</td></tr>', 
            row.value);
        });
        $("#content table").append(trows.join(''));
      }
    });
  });
});
