document.addEventListener("click", (e) => {
    if (e.target.getAttribute("id") == "download") {
        browser.tabs.query({url:"*://*.youtube.com/*"}).then(setOptions).then(sendReq);
    }

})

function setOptions(tab) {
    let type = document.getElementById("type");
    let content = document.getElementById("format");
    type = type.options[type.selectedIndex].value;
    content = content.options[content.selectedIndex].value;
    let form = {"type":type, "content":content};
    return [form, tab[0]];
}

function sendReq(args) {
    console.log(args);
    browser.tabs.sendMessage(args[1].id , {form:args[0]});
}

browser.tabs.executeScript({file:"youtubeDl.js"});
