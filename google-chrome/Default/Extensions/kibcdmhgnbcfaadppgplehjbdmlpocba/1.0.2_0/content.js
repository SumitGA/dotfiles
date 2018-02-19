window.addEventListener("openNewTab", function() {
  chrome.runtime.sendMessage({task:"openNewTab"}, function(res){});
});
document.addEventListener("OpenFirstRunPage", function() {
  chrome.runtime.sendMessage({task:"OpenFirstRunPage"}, function(res){});
});