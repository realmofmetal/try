/* Cbox dynamic loader v.2 */
(function(){var showByDefault=true;var cboxContainer=document.getElementById("cboxwrap");var cboxToggleButton=document.getElementById("cboxbutton");var buttonStringOpen="Open Chatbox";var buttonStringClose="Close Chatbox";var lsKey = "cbox:isOpen";var cboxHTML = '<!-- BEGIN CBOX - www.cbox.ws - v4.3 -->'+'<div id="cboxdiv">'+'<div style="font-size: 11px;"><center><font color="#e7e7e7">Users</font> | <font color="#07fcff">Regulars</font> | <font color="#FF20E2">Moderators</font> | <font color="#fffc26">Uploaders</font> | <font color="#00ff24">Admins</font></center></div>'+'<div style="position: relative; width: 340px; line-height:0; overflow: auto; overflow-y: auto; -webkit-overflow-scrolling: touch; border: 0px solid;"><iframe src="https://www7.cbox.ws/box/?boxid=826536&boxtag=koggrt" width="100%" height="450" allowtransparency="yes" allow="autoplay" frameborder="0" marginheight="0" marginwidth="0" scrolling="auto"></iframe></div>'+'</div>'+'<!-- END CBOX -->';var htmlInjected=false;var isVisible=false;var toggleCbox = function (show) {
if (!show) {cboxContainer.style.display = "none";
if (cboxToggleButton) {cboxToggleButton.innerHTML = buttonStringOpen;}}
else {cboxContainer.style.display = "block";
if (cboxToggleButton) {cboxToggleButton.innerHTML = buttonStringClose;}}
if (show && !htmlInjected) {cboxContainer.innerHTML = cboxHTML;
htmlInjected = true;}isVisible = show;}
if (localStorage && lsKey && typeof localStorage.getItem(lsKey) === "string") {toggleCbox((localStorage.getItem(lsKey) === "yes"));}
else {toggleCbox(showByDefault);}
if (cboxToggleButton) {cboxToggleButton.onclick = function () {toggleCbox(!isVisible);
if (localStorage && lsKey) {localStorage.setItem(lsKey, isVisible ? "yes" : "no");}}}})();
