  /*global chrome*/
 function  getClickHandler() {
    return function(info, tab) {
     var url =  info.srcUrl;
     
    

    
     
   chrome.tabs.create({ url: url, });

//    document.cookie= url;

//    console.log(document.cookie);
//    console.log("HELLO");
    };
  };

  
  chrome.contextMenus.create({
    "id":"Rocket",
    "title" : "Send data to Rocket",
    "type" : "normal",
    "contexts" : ["image"],
  });

  chrome.contextMenus.onClicked.addListener(getClickHandler())