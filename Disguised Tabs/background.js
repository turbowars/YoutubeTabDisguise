console.log('background js is fired');

// 1 = tab currently disguised, 0 or undefined = tab currently undisguised
var tab_disguised = Array();
// when the tab changes contents, if the status is loading and the tab is
// currently supposedly diguised, disguise the tab
chrome.tabs.onUpdated.addListener(TabChangeHandler);
function TabChangeHandler (tabId, changeInfo, tab) {
    chrome.tabs.getSelected(null, function(tab) { 
        if (tab_disguised[tab.id] && tab.status=='loading') { chrome.tabs.executeScript(null, {file:"disguise.js"} ); }  
    });
}

// when Ctrl+Q is pressed (see "script.js" for event handler) then
// if the tab is either disguised or undisguised
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.disguised) {
            chrome.tabs.query({url:"*://*.youtube.com/*"},function(tab) { 
                for (index in tab)
                {
                    
                    if (! tab_disguised[tab[index].id]) 
                    {
                        tab_disguised[tab[index].id]=1; 
                        chrome.tabs.executeScript(tab[index].id, {file:"disguise.js"});
                    }
                }
                
                
            });
            
        }
        else {
            chrome.tabs.query({url:"*://*.youtube.com/*"},function(tab) { 
                for (index in tab)
                {
                    
                    if (tab_disguised[tab[index].id]) 
                    {
                        tab_disguised[tab[index].id]=0; 
                        chrome.tabs.executeScript(tab[index].id, {file:"undisguise.js"});
                    }
                }
                
                
            });
            
        }
    }
    
);
