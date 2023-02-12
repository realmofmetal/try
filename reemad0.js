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
