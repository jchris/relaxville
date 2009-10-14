# Relaxville

## The Coupe de Ville of Social Test Suite Browsers

This is pretty sweet - we can all start sharing test results and browsing over them and writing new reports and stuff. I think it will be fun.

## License

Apache 2.0

## Description

CouchDB now stores test suite reports from Futon in a local database. The Futon test suite stores runtime, success and failure information, along with a timestamp and some browser / platform information, into the local database `test_suite_reports`.

The test reports are completely private and remain on the localhost for convenient browsing by developers. However, replication makes it easy to share reports.

I'm also working on a CouchApp to make browsing and replicating reports easy. I've only got it to rudimentary functionality, but I'm a firm believer in releasing things before I go to sleep for the night. Hopefully those in other timezones can enjoy it before I wake up. [The source code for Relaxville is here:](http://github.com/jchris/relaxville)
  
    http://github.com/jchris/relaxville

to install just git clone it and then run

    couchapp push . test_suite_reports

then you can browse tests on your local machine (couchapp should spit out an index URL for you).

### Participate

The best thing you can do is replicate your test_suite_reports db to the new database that's been set up at: `http://couchdb.couchdb.org/test_suite_reports``

It should be available for writes (please don't abuse) -- also if anyone else wants a db on this server for community purposes, just holler. Eventually we should have a wiki and other CouchApps here.

### Browse

You can also just see [Relaxville running on the CouchDB server here:](http://couchdb.couchdb.org/test_suite_reports/_design/relaxville/index.html)

    http://couchdb.couchdb.org/test_suite_reports/_design/relaxville/index.html

It will be updated as new people replicate their `test_suite_reports` to it.

### Patches

I'd like to add a Toast chat room to different entities in the UI.

It could use some more views. Those should be easy to add.

It also might be nice to start using [Sammy.js](http://code.quirkey.com/sammy/), if anyone feels like a more ambitious patch.

Feedback and patches welcome!