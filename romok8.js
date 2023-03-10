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
