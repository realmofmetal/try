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

// Add rating system below post img
if (!window.location.href.includes("/p/") && 
    !window.location.href.includes("discography") && 
    window.location.href !=="https://wow.realmofmetal.org/"){
const separator = document.querySelector('.separator');
const image = separator.querySelector('img');
const link = image.parentNode.href;
const newElement = `<div class="imgbelow" style="font-size:12px"><table class="postimgaddons" style="width:100%"><tbody><tr><td><span style="float:left;line-height: 1.8em;font-size:12px;">Rate<span class="ratethis"> this release</span>:</span><div class="realm-rating-true"/></td><td style="float:right"><a href="${link}" target="_blank" rel="nofollow" title="MP3 DOWNLOAD"><span class="genre-filters"><i class="fa fa-cloud-download" aria-hidden="true"></i> MP3</span></a> <a href="/p/dead-links.html" title="ASK NEW LINK"><span class="genre-filters"><i class="fa fa-chain-broken" aria-hidden="true"></i> BROKEN</span></a> <a href="/p/report.html" title="REPORT DMCA"><span class="genre-filters"><i class="fa fa-flag" aria-hidden="true"></i> REPORT</span></a></td></tr></tbody></table><div class="clear"/></div>`;
separator.insertAdjacentHTML('afterend', newElement);};


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
