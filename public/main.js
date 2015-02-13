/*eslint-env amd, node*/

require.config({
    paths: {
        mylib: "bower_components/umd-lib/src/mylib"
    }
});

define(["mylib"], function(mylib) {
    "use strict";
    mylib.myfunction().then(function(res) {
        console.log(res);
    });
});
