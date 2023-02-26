
// Find all external links and add attributes
const links=document.querySelectorAll("a");
links.forEach(link => {
  if (link.hostname !== window.location.hostname && !link.href.startsWith("javascript:") && !link.href.includes("blogger.com") && !link.href.includes("googleusercontent.com") && !link.href.includes("blogspot.com") && !link.classList.contains("header-button") && !link.classList.contains("comment-reply") && !link.classList.contains("clickfunc")) {
    link.setAttribute("target", "_blank");
  }
});



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

