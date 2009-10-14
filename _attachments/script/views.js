function get_link(hash) {
  return $('a[href="'+hash+'"]');
};

$.CouchApp(function(app) {

  // recent reports
  $(get_link("#!recent")).click(function() {
    app.view("recent", {
      reduce :false,
      success : function(view) {
        // TODO this should use mustache and be a table
        $("#content").html('<h2>Recent Reports</h2><dl class="view"><dt>version, time, pass, fail, success percentage</dt></dl>');
        var lis = view.rows.map(function(row) {
          var pass = row.value.pass, fail = row.value.fail;
          var percent = (pass / (pass + fail)*100);
          var link = '<a href="'+app.futonDocPath(row.id)+'">'+row.key.join(', ')+'</a>';
          return '<dd>'+[link, pass, fail, percent].join(', ')+'%</dd>';
        });
        $("#content dl").append(lis.join(''));
      }
    });
  });
  
  // success by test
  $(get_link("#!tests")).click(function() {
    app.view("by_test", {
      group_level : 1,
      success : function(view) {
        $("#content").html('<h2>Success By Tests</h2><dl class="view"><dt>test name, pass, fail, success percentage</dt></dl>');
        var lis = view.rows.map(function(row) {
          var name = row.key[0];
          return '<dd>'+[name, row.value.pass, row.value.fail, row.value.percent].join(', ')+'%</dd>';
        });
        $("#content dl").append(lis.join(''));
      }
    });
  });
});
