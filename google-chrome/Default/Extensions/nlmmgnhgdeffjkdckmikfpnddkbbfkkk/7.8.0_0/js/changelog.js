var sVer = chrome.runtime.getManifest().version,
  sChangelog =
    '<h3>What\'s new in Version ' + sVer + '</h3>' +
    '<ul>' +
    '  <li>Redesigned Manage Profiles</li>' +
    '  <li>Added confirmation when opening Manage Profiles with unsaved changes</li>' +
    '  <li>Added ability to navigate to different overlays (lightbox) directly</li>' +
    '  <li>Added autofocus to text box in Exceptions tab</li>' +
    '  <li>Refactored code</li>' +
    '  <li>Fixed table width when switching from All profile to Unfiled</li>' +
    '  <li>Fixed undefined Site filter when rearranging profiles</li>' +
    '  <li>Fixed tabbing issues in overlays</li>' +
    '</ul>' +
    '<h4><a href="changelog.txt" tabindex="1" target="_blank">Version History</a> &raquo;</h4>';
