function scrapeThePage() {
  // Keep this function isolated - it can only call methods you set up in content scripts
  var htmlCode = document.documentElement.outerHTML;
  return htmlCode;
}

document.addEventListener("DOMContentLoaded", () => {
  // Hook up #check-1 button in popup.html
  const fbshare = document.querySelector("#check-1");
  fbshare.addEventListener("click", async () => {
    // Get the active tab
    const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
    const tab = tabs[0];

    // We have to convert the function to a string
    const scriptToExec = `(${scrapeThePage})()`;

    // Run the script in the context of the tab
    const scraped = await chrome.tabs.executeScript(tab.id, {
      code: scriptToExec,
    });

    // Result will be an array of values from the execution
    // For testing this will be the same as the console output if you ran scriptToExec in the console
    alert(scraped[0]);
  });
});
