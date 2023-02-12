var youtubeDivs = document.getElementsByClassName("ytpreview");
var bandcampDivs = document.getElementsByClassName("bcpreview");

for (var i = 0; i < youtubeDivs.length; i++) {
  var div = youtubeDivs[i];
  var content = div.innerHTML;
  var indexOfVideoId = content.indexOf("##") + 2;
  var videoId = content.substring(indexOfVideoId);

  if (!videoId.length) {
    div.innerHTML = "";
    continue;
  }

  var iframe = document.createElement("iframe");
  iframe.src = "https://www.youtube.com/embed/" + videoId;
  iframe.className = "BLOG_video_class";
  iframe.width = "100%";
  iframe.height = "100%";
  iframe.setAttribute("youtube-src-id", videoId);
  iframe.setAttribute("allowfullscreen", "");

  div.innerHTML = "";
  div.appendChild(iframe);
}

for (var i = 0; i < bandcampDivs.length; i++) {
  var div = bandcampDivs[i];
  var content = div.innerHTML;
  var indexOfAlbumId = content.indexOf("##") + 2;
  var albumId = content.substring(indexOfAlbumId);

  if (!albumId.length) {
    div.innerHTML = "";
    continue;
  }

  var iframe = document.createElement("iframe");
  iframe.src = "https://bandcamp.com/EmbeddedPlayer/album=" + albumId + "/size=large/bgcol=333333/linkcol=e32c14/artwork=small/transparent=true/";
  iframe.style = "border: 0; width: 100%; height: 100%;";
  iframe.setAttribute("seamless", "");

  div.innerHTML = "";
  div.appendChild(iframe);
}
