javascript:(function ()
{
    var parents = "comic";
    var com = 0;
    var dir = "";
    var doc_url = document.URL;
    if (doc_url.match(/[a-z]+.html/)) {
        dir = doc_url.replace(/[a-z]+.html/, "") + "img/";
    }
    else if (doc_url.match(/[0-9]+.html/))
    {
        var path = doc_url.match(/[0-9]+/);
        dir = doc_url.replace(/[0-9]+.html/, "") + path + "/" + path + "_";
    }
    var selectObj = document.getElementsByTagName("img");
    var matchObj = new RegExp(parents);
    var sleep = function (msec)
    {
        setTimeout(function ()
        {
            f(++i);
        }, msec) 
    };
    for (i = 0; i < selectObj.length; i++)
    {
        if (selectObj[i].id.match(matchObj))
        {
            com = com + 1;
            var num = ("000" + com).slice(-4);
            var link = dir + num + ".jpg";
            var evt = document.createEvent("MouseEvents");
            evt.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, true, false, false, 
            0, null);
            var ancObj = document.createElement("a");
            ancObj.href = link;
            ancObj.dispatchEvent(evt);
            sleep(10000);
        }
    }
})();