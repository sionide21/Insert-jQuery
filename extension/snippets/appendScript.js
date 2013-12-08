(function() {
    function jQueryVersion() {
        return "1.10.2";
    }
    function jQuerySrc() {
        return "//ajax.googleapis.com/ajax/libs/jquery/" + jQueryVersion() + "/jquery.min.js";
    }

    if (window.jQuery === undefined) {
        var tag = document.createElement('script');
        tag.src = jQuerySrc();
        document.getElementsByTagName('head')[0].appendChild(tag);
        console.log("Loaded jQuery " + jQueryVersion());
    } else {
        console.warn("jQuery " + jQuery.fn.jquery + " is already on this page");
    }
})();
