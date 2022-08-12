var paperCounter = 0;
var presentationCounter = 0;

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
        htmlPaperDisplay += createPaper(papers[i]);
        loops++;
      }
    paperCounter = loops;
    if(paperCounter == papers.length && idButton != null){
      hideButton(idButton);
    }
    paperDisplay.innerHTML = htmlPaperDisplay;
  });
}

function createPaper(paper){
  paperHTML = "";
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
        htmlPresDisplay += createPresentation(presentations[i]);
        loops++;
      }
      presentationCounter = loops;
      if(presentationCounter == presentations.length && idButton != null){
        hideButton(idButton);
      }
    presDisplay.innerHTML = htmlPresDisplay;
  });
}

function createPresentation(presentation){
  presentationHTML = "";
  presentationHTML += "<p><b><a href=/presentations/" + presentation.filename + ".pdf>" + presentation.date + " - " + presentation.title + "</a></b>.";
  presentationHTML += " Presentation given by " + presentation.presenter + " at the " + presentation.venue + ".";
  presentationHTML += " (<a href=/presentations/" + presentation.filename + ".pdf>pdf</a> - <a href=/presentations/" + presentation.filename + ".pptx>pptx</a>)"
      if (presentation.video !== ""){
        presentationHTML += " <a href=" + presentation.video + ">Video presentation</a>"
      }
  presentationHTML += "</p>";
  return presentationHTML;
}

function hideButton(id){
  var button = document.getElementById(id);
  button.style.display = "none";
}
