var bareMinimumCounter = 0;
var briefLocation = 'https://assumptionsofphysics.org/autogen/briefs/briefs.json';

function loadMoreBriefs(amount, idText, idButton, formatBrief = formatBriefFull){
  var presDisplay = document.getElementById(idText);
  fetch(briefLocation)
    .then(response => response.text())
    .then((data) => {
      var briefs = JSON.parse(data);
      var htmlPresDisplay = "";
      var loops = 0;
      if(amount == -1){
        amount = briefs.length;
      }
      for(i = 0; i < bareMinimumCounter+amount && i < briefs.length; i++){
        htmlPresDisplay += formatBrief(briefs[i]);
        loops++;
      }
      bareMinimumCounter = loops;
      if(bareMinimumCounter == briefs.length && idButton != null){
        hideButton(idButton);
      }
    presDisplay.innerHTML = htmlPresDisplay;
    MathJax.typeset();
  });
}

function formatBriefFull(brief) {
  var tags = "";
  for(j = 0; j < 2; j++){
    if (j != 0) {
      tags += ", ";
    }
    tags += brief.tags[j];
  }

  var video = ""
  if (brief.video) {
    video += " - <a href=\"" + brief.video + "\">Video</a>"
  }

  var briefHTML = "";
  briefHTML += "<h4 style=\"margin-bottom:0\"><b><a href=\"https://assumptionsofphysics.org/autogen/briefs/" + brief.filename + ".pdf\" >" + brief.title + "</a></b></h4>"
  briefHTML += "<p>" + brief.abstract + "</br>";
  briefHTML += "<small><i>Category: " + brief.category + " - Tags:  "  + tags + video + "</i></small></p>";
  return briefHTML;
}

function formatBriefShort(brief){
  var tags = "";
  for(j = 0; j < 2; j++){
    if (j != 0) {
      tags += ", ";
    }
    tags += brief.tags[j];
  }

  var video = ""
  if (brief.video) {
    video += " - <a href=\"" + brief.video + "\">Video</a>"
  }

  var briefHTML = "<p>";
  briefHTML += "<b><a href=\"https://assumptionsofphysics.org/autogen/briefs/" + brief.filename + ".pdf\" >" + brief.title + "</a></b></br>";
  briefHTML += "<small><i>Category: " + brief.category + " - Tags:  "  + tags + video + "</i></small></p>";
  return briefHTML;
}

function hideButton(id){
  var button = document.getElementById(id);
  button.style.display = "none";
}
