// Find all external links and add attributes
const links=document.querySelectorAll("a");
links.forEach(link => {
  if (link.hostname !== window.location.hostname && !link.href.startsWith("javascript:") && !link.href.includes("blogger.com") && !link.href.includes("googleusercontent.com") && !link.href.includes("blogspot.com") && !link.classList.contains("header-button")) {
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
const link2 = image.parentNode.href;
const newElement = `<div class="imgbelow" style="font-size:12px"><table class="postimgaddons" style="width:100%"><tbody><tr><td><span style="float:left;line-height: 1.8em;font-size:12px;">Rate this release:</span><div class="realm-rating-true"/></td><td style="float:right"><a href="${link}" target="_blank" rel="nofollow"><span class="genre-filters"><i class="fa fa-arrow-down" aria-hidden="true"></i> MP3 DOWNLOAD</span></a> <a href="#comments"><span class="genre-filters"><i class="fa fa-times" aria-hidden="true"></i> DEAD LINK</span></a> <span style="color:red;font-size:8px">NEW</span></td></tr></tbody></table><div class="clear"/></div>`;
separator.insertAdjacentHTML('afterend', newElement);}

// Replace download links for uppercase domain names and add network links on olders posts
window.onload = function() {
const links3 = document.querySelectorAll('#tab-0-2 .inner a');
links3.forEach(function(link4) {
  const urlanony = new URL(link4.href.replace("http://anonymto.com/#", ""));
  let domain = urlanony.hostname;
  const domainParts = domain.split(".");
  domain = domainParts[domainParts.length - 2].toUpperCase();
  link4.innerHTML = domain + link4.innerHTML;
});

if (!window.location.href.includes("/p/") && 
    !window.location.href.includes("/2023/") && 
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