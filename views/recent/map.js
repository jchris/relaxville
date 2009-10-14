function(doc) {
  if (doc.tests && doc.platform) {
    // count pass fail
    var pass = 0, fail = 0;
    for (var i=0; i < doc.tests.length; i++) {
      if (doc.tests[i].status == "success") {
        pass++;
      } else {
        fail++;
      }
    };
    emit([doc.node.version, doc.timestamp], {
      pass : pass,
      fail : fail,
      percent : Math.round((pass / (pass + fail)) * 100)
    })
  }
};