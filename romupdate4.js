

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

  // Replace download links for uppercase domain names and add network links on olders posts
  const dLinks = document.querySelectorAll('#tab-0-2 .inner a');
  dLinks.forEach(function(dLink) {
    const dUrlanony = new URL(dLink.href.replace("http://anonymto.com/#", ""));
    let dDomain = dUrlanony.hostname;
    const dDomainParts = dDomain.split(".");
    dDomain = dDomainParts[dDomainParts.length - 2].toUpperCase();
    dLink.innerHTML = dDomain + dLink.innerHTML;
  });
};


if (!window.location.href.includes("/p/") && 
    !window.location.href.includes("/2023/02/") && 
    window.location.href !=="https://wow.realmofmetal.org/"){var _1bit=new _1bitspace({public_key:"hAvVrB9-",only:["mega.nz","mediafire.com","yadi.sk","zippyshare.com","rgho.st","workupload.com","dl.realmofmetal.org","dwld.realmofmetal.org","cloud.mail.ru"]})}
};



