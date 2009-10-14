function(doc) {
  if (doc.tests && doc.platform) {
    for (var i=0; i < doc.tests.length; i++) {
      emit([doc.tests[i].name, doc.node.version], doc.tests[i].status);
    };
  }
};