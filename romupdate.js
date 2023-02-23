// View counter to all posts
$.each($("a[name]"), function(i, e) {
  var elem = $(e).parent().find("#postviews");
  var blogStats = new Firebase("https://realm-views.firebaseio.com/pages/id/" + $(e).attr("name"));
    blogStats.once("value", function(snapshot) {
      var data = snapshot.val();
      var isnew = false;
      if(data == null) {
         data= {};
         data.value = 0;
         data.url = window.location.href;
         data.id = $(e).attr("name");
         isnew = true;
      }
      elem.text(data.value);
      data.value++;
      if(window.location.pathname!="/"){
        if(isnew)
        blogStats.set(data);
        else
        blogStats.child("value").set(data.value);
      }
   });
});

// Find all external links and add attributes
const links=document.querySelectorAll("a");
links.forEach(link => {
  if (link.hostname !== window.location.hostname && !link.href.startsWith("javascript:") && !link.href.includes("blogger.com") && !link.href.includes("googleusercontent.com") && !link.href.includes("blogspot.com") && !link.classList.contains("header-button") && !link.classList.contains("comment-reply") && !link.classList.contains("clickfunc")) {
    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "nofollow");
	link.setAttribute("href", "http://anonymto.com/#" + link.href);
  }
});

// Add rating system below post img
if (!window.location.href.includes("/p/") && 
    !window.location.href.includes("discography") && 
    window.location.href !=="https://wow.realmofmetal.org/"){
const separator = document.querySelector('.separator');
const image = separator.querySelector('img');
const link = image.parentNode.href;
const newElement = `<div class="imgbelow" style="font-size:12px"><table class="postimgaddons" style="width:100%"><tbody><tr><td><span style="float:left;line-height: 1.8em;font-size:12px;">Rate this release:</span><div class="realm-rating-true"/></td><td style="float:right"><a href="${link}" target="_blank" rel="nofollow"><span class="genre-filters"><i class="fa fa-arrow-down" aria-hidden="true"></i> MP3 DOWNLOAD</span></a> <a href="#comments"><span class="genre-filters"><i class="fa fa-times" aria-hidden="true"></i> DEAD LINK</span></a> <span style="color:red;font-size:8px">NEW</span></td></tr></tbody></table><div class="clear"/></div>`;
separator.insertAdjacentHTML('afterend', newElement);};

// Replace download links for uppercase domain names and add network links on olders posts
window.onload = function() {
const dLinks = document.querySelectorAll('#tab-0-2 .inner a');
dLinks.forEach(function(dLink) {
  const dUrlanony = new URL(dLink.href.replace("http://anonymto.com/#", ""));
  let dDomain = dUrlanony.hostname;
  const dDomainParts = dDomain.split(".");
  dDomain = dDomainParts[dDomainParts.length - 2].toUpperCase();
  dLink.innerHTML = dDomain + dLink.innerHTML;
});

if (!window.location.href.includes("/p/") && 
    !window.location.href.includes("/2023/02/") && 
    window.location.href !=="https://wow.realmofmetal.org/"){var _1bit=new _1bitspace({public_key:"hAvVrB9-",only:["mega.nz","mediafire.com","yadi.sk","zippyshare.com","rgho.st","workupload.com","dl.realmofmetal.org","dwld.realmofmetal.org","cloud.mail.ru"]})}
};

// Add youtube and bandcamp preview
$(document).ready(function() {
  $('.ytpreview').each(function() {
    var preview = $(this).text().trim();
    var regex = /YOUTUBE\(([^)]+)\)/;
    var match = preview.match(regex);
    if (match !== null) {
      var videoID = match[1];
      $(this).replaceWith('<iframe allowfullscreen="" class="BLOG_video_class" height="266" src="https://www.youtube.com/embed/' + videoID + '" width="320" youtube-src-id="' + videoID + '"></iframe>');
    } else {
      $(this).empty();
    }
  });

  $('.bcpreview').each(function() {
    var preview = $(this).text().trim();
    var regex = /BANDCAMP\(([^)]+)\)/;
    var match = preview.match(regex);
    if (match !== null) {
      var albumID = match[1];
      $(this).replaceWith('<iframe style="border: 0; width: 400px; height: 340px;" src="https://bandcamp.com/EmbeddedPlayer/album=' + albumID + '/size=large/bgcol=333333/linkcol=e32c14/artwork=small/transparent=true/" seamless></iframe>');
    } else {
      $(this).empty();
    }
  });
});

// Change month on Upcoming Releases page
if (window.location.href.indexOf('/p/upcoming-releases.html') !== -1) {
window.onload = function() {
const firstTab = document.querySelector(".tab-header li:nth-child(1)");
const secondTab = document.querySelector(".tab-header li:nth-child(2)");
const firstContent = document.querySelector("#vtab-0-0");
const secondContent = document.querySelector("#vtab-0-1");

firstTab.classList.remove("ui-tabs-active", "ui-state-active");
firstTab.setAttribute("aria-selected", "false");
firstTab.setAttribute("aria-expanded", "false");

secondTab.classList.add("ui-tabs-active", "ui-state-active");
secondTab.setAttribute("aria-selected", "true");
secondTab.setAttribute("aria-expanded", "true");

firstContent.style.display = "none";
secondContent.style.removeProperty("display");

};
};

// Remove rows with no links
window.onload = function() {
// Select the table on #tab-0-2 .inner table.releaseinfo
const tTable = document.querySelector('#tab-0-2 .inner table.releaseinfo');

// Select all rows in the table except the first (header) row
const tRows = tTable.querySelectorAll('tr:not(:first-child)');

// Loop through each row and check if there is an href link in any td cell
for (let i = 0; i < tRows.length; i++) {
  const tCells = tRows[i].querySelectorAll('td');
  let hasLink = false;
  for (let j = 0; j < tCells.length; j++) {
    if (tCells[j].querySelector('a[href]')) {
      hasLink = true;
      break;
    }
  }
  // If there is no href link, delete the row
  if (!hasLink) {
    tRows[i].parentNode.removeChild(tRows[i]);
  }
}
};
