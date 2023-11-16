var paperCounter = 0;
var presentationCounter = 0;
var essayCounter = 0;
var videoCounter = 0;

function loadMorePapers(amount, idText, idButton){
  var paperDisplay = document.getElementById(idText);
  fetch('/data/papers.json')
    .then(response => response.text())
    .then((data) => {
      var papers = JSON.parse(data);
      var htmlPaperDisplay = "";
      var loops = 0;
      if(amount == -1){
        amount = papers.length;
      }
      for(i = 0; i < paperCounter+amount && i < papers.length; i++){
        htmlPaperDisplay += formatPaper(papers[i]);
        loops++;
      }
    paperCounter = loops;
    if(paperCounter == papers.length && idButton != null){
      hideButton(idButton);
    }
    paperDisplay.innerHTML = htmlPaperDisplay;
  });
}

function formatPaper(paper){
  var paperHTML = "";
  paperHTML += "<p><b><a href=" + paper.url + "> " + paper.title + " (" + paper.year + ")</a></b>: "
      + paper.description;
  if(paper.journal !== ""){
    if(paper.location !== ""){
      paperHTML += " Published in <a href=" + paper.location + ">" + paper.journal + "</a>.";
    }
    else{
      paperHTML += " Accepted for publication in " + paper.journal;
    }
  }
  if(paper.video !== ""){
    paperHTML += " <a href=" + paper.video + ">Video presentation</a>";
  }
  paperHTML += "</p>";
  return paperHTML;
}

function loadMorePresentations(amount, idText, idButton){
  var presDisplay = document.getElementById(idText);
  fetch('/data/presentations.json')
    .then(response => response.text())
    .then((data) => {
      var presentations = JSON.parse(data);
      var htmlPresDisplay = "";
      var loops = 0;
      if(amount == -1){
        amount = presentations.length;
      }
      for(i = 0; i < presentationCounter+amount && i < presentations.length; i++){
        htmlPresDisplay += formatPresentation(presentations[i]);
        loops++;
      }
      presentationCounter = loops;
      if(presentationCounter == presentations.length && idButton != null){
        hideButton(idButton);
      }
    presDisplay.innerHTML = htmlPresDisplay;
  });
}

function formatPresentation(presentation){
  var presentationHTML = "";
  presentationHTML += "<p><b><a href=/presentations/" + presentation.filename + ".pdf>" + presentation.date + " - " + presentation.title + "</a></b>.";
  presentationHTML += " Presentation given by " + presentation.presenter + " at the " + presentation.venue + ".";
  presentationHTML += " (<a href=/presentations/" + presentation.filename + ".pdf>pdf</a> - <a href=/presentations/" + presentation.filename + ".pptx>pptx</a>)"
      if (presentation.video !== ""){
        presentationHTML += " <a href=" + presentation.video + ">Video presentation</a>"
      }
  presentationHTML += "</p>";
  return presentationHTML;
}

function loadMoreEssays(amount, idText, idButton){
  var presDisplay = document.getElementById(idText);
  fetch('/data/essays-meta.json')
    .then(response => response.text())
    .then((data) => {
      var essays = JSON.parse(data);
      var htmlPresDisplay = "";
      var loops = 0;
      if(amount == -1){
        amount = essays.length;
      }
      for(i = 0; i < essayCounter+amount && i < essays.length; i++){
        htmlPresDisplay += formatEssay(essays[i]);
        loops++;
      }
      essayCounter = loops;
      if(essayCounter == essays.length && idButton != null){
        hideButton(idButton);
      }
    presDisplay.innerHTML = htmlPresDisplay;
  });
}

function formatEssay(essay){
  var essayHTML = "";
  essayHTML += "<p><b><a href=" + essay.url + ">" + new Date(new Date(essay.date).toISOString().slice(0,-1)).toLocaleDateString() + " - " + essay.title + "</a></b>: " + essay.summary + "</br>";
  essayHTML += "<small><i>Category: " + essay.category + " - Tags:  "  + essay.tags + "</i></small></p>";
  return essayHTML;
}

function loadMoreVideos(amount, idText, idButton){
  var presDisplay = document.getElementById(idText);
  fetch('/data/videos.json')
    .then(response => response.text())
    .then((data) => {
      var videos = JSON.parse(data);
      var htmlPresDisplay = "";
      var loops = 0;
      if(amount == -1){
        amount = videos.length;
      }
      for(i = 0; i < videoCounter+amount && i < videos.length; i++){
        htmlPresDisplay += formatVideo(videos[i]);
        loops++;
      }
      videoCounter = loops;
      if(videoCounter == videos.length && idButton != null){
        hideButton(idButton);
      }
    presDisplay.innerHTML = htmlPresDisplay;
  });
}

function formatVideo(video){
  var videoHTML = "";
  videoHTML += "<div style=\"width:100%;height:0;padding-bottom:51%;position:relative\">";
  videoHTML += "<iframe style=\"width:100%;height:100%;position:absolute;left:0;top:0\" width=\"560\" height=\"315\" src=\"" + video.url + "\" frameborder=\"0\" allowfullscreen></iframe>";
  videoHTML += "</div>";
  videoHTML += "<br>";
  videoHTML += "<p>" + video.description + "</p>";
  videoHTML += "<br>";
  return videoHTML;
}

function hideButton(id){
  var button = document.getElementById(id);
  button.style.display = "none";
}
