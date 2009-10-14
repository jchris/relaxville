function(ks, vs, co) {
  var pass = 0, fail = 0;
  if (co) {
    for (var i=0; i < vs.length; i++) {
      pass += vs[i].pass;
      fail += vs[i].fail;
    };
  } else {
    for (var i=0; i < vs.length; i++) {
      if (vs[i] == "success") {
        pass++;
      } else {
        fail++;
      }
    };
  };
  return {
    pass : pass,
    fail : fail,
    percent : ((pass / (pass + fail)) * 100)
  }
};