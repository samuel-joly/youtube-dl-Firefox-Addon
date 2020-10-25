function sendReq(url) {
    var oReq = new XMLHttpRequest();
    oReq.open("GET", "http://192.168.1.84/youtubeDl/index.php?url="+url);
    oReq.send();
}

browser.runtime.onMessage.addListener(request => {
    let contentUrl = window.location.href;
    let form = request.form
    sendReq(window.location.href+"&&type="+form["type"]+"&&content="+form["content"]);
    window.location =  "http://192.168.1.84/youtubeDl/index.php?url="+ window.location.href+"&&type="+form["type"]+"&&content="+form["content"];
});
