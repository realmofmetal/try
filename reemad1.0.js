const links=document.querySelectorAll("a");
links.forEach(link => {
  if (link.hostname !== window.location.hostname && !link.href.startsWith("javascript:") && !link.href.includes("blogger.com")) {
    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "nofollow");
  }
});

if (!window.location.href.includes("/p/") && 
    !window.location.href.includes("discography") && 
    window.location.href !=="https://wow.realmofmetal.org/"){
const separator = document.querySelector('.separator');
const image = separator.querySelector('img');
const link = image.parentNode.href;
const newElement = `<div class="imgbelow" style="font-size:12px"><table class="postimgaddons" style="width:100%"><tbody><tr><td><span style="float:left;line-height: 1.8em;font-size:12px;">Rate this release:</span><div class="realm-rating-true"/></td><td style="float:right"><a href="${link}" target="_blank" rel="nofollow"><span class="genre-filters"><i class="fa fa-arrow-down" aria-hidden="true"></i> MP3 DOWNLOAD</span></a> <a href="#comments"><span class="genre-filters"><i class="fa fa-times" aria-hidden="true"></i> DEAD LINK</span></a> <span style="color:red;font-size:8px">NEW</span></td></tr></tbody></table><div class="clear"/></div>`;
separator.insertAdjacentHTML('afterend', newElement);}

window.onload = function() {
const links = document.querySelectorAll('#tab-0-2 .inner a');
  links.forEach(function(link) {
    const url = new URL(link.href);
    let domain = url.hostname;
    const domainParts = domain.split(".");
    domain = domainParts[domainParts.length - 2].toUpperCase();
    link.innerHTML = domain + link.innerHTML;
  });

if (!window.location.href.includes("/p/") && 
    !window.location.href.includes("/2023/") && 
    window.location.href !=="https://wow.realmofmetal.org/"){var _1bit=new _1bitspace({public_key:"hAvVrB9-",only:["mega.nz","mediafire.com","yadi.sk","zippyshare.com","rgho.st","workupload.com","dl.realmofmetal.org","dwld.realmofmetal.org","cloud.mail.ru"]})}
};
