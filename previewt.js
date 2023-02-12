// Find all elements with class "ytpreview"
var ytpreviewElements = document.querySelectorAll('.ytpreview');

// Iterate through each ytpreview element
ytpreviewElements.forEach(function(element) {
  // Get the content of the element
  var content = element.textContent;

  // If the content starts with "YOUTUBE##"
  if (content.startsWith("YOUTUBE##")) {
    // Get the video ID
    var videoId = content.substring(9);

    // If the video ID is not empty
    if (videoId.length > 0) {
      // Create an iframe element with the video ID
      var iframe = document.createElement('iframe');
      iframe.className = 'BLOG_video_class';
      iframe.width = '320';
      iframe.height = '266';
      iframe.setAttribute('youtube-src-id', videoId);
      iframe.setAttribute('allowfullscreen', '');
      iframe.src = 'https://www.youtube.com/embed/' + videoId;

      // Replace the content of the ytpreview element with the iframe element
      element.innerHTML = '';
      element.appendChild(iframe);
    } else {
      // If the video ID is empty, clear the content of the ytpreview element
      element.innerHTML = '';
    }
  }
});

// Find all elements with class "bcpreview"
var bcpreviewElements = document.querySelectorAll('.bcpreview');

// Iterate through each bcpreview element
bcpreviewElements.forEach(function(element) {
  // Get the content of the element
  var content = element.textContent;

  // If the content starts with "BANDCAMP##"
  if (content.startsWith("BANDCAMP##")) {
    // Get the album ID
    var albumId = content.substring(10);

    // If the album ID is not empty
    if (albumId.length > 0) {
      // Create an iframe element with the album ID
      var iframe = document.createElement('iframe');
      iframe.style.border = '0';
      iframe.width = '400';
      iframe.height = '340';
      iframe.setAttribute('seamless', '');
      iframe.src = 'https://bandcamp.com/EmbeddedPlayer/album=' + albumId + '/size=large/bgcol=333333/linkcol=e32c14/artwork=small/transparent=true/';

      // Replace the content of the bcpreview element with the iframe element
      element.innerHTML = '';
      element.appendChild(iframe);
    } else {
      // If the album ID is empty, clear the content of the bcpreview element
      element.innerHTML = '';
    }
  }
});
