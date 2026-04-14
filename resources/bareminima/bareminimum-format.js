var bareMinimaCounter = 0;

function loadMoreBareMinima(amount, idText, idButton){
  var presDisplay = document.getElementById(idText);
  fetch('https://assumptionsofphysics.org/autogen/bareminima/bareminima.json')
    .then(response => response.text())
    .then((data) => {
      var bareminima = JSON.parse(data);
      var htmlPresDisplay = "";
      var loops = 0;
      if(amount == -1){
        amount = bareminima.length;
      }
      for(i = 0; i < bareMinimaCounter+amount && i < bareminima.length; i++){
        htmlPresDisplay += formatBareMinima(bareminima[i]);
        loops++;
      }
      bareMinimaCounter = loops;
      if(bareMinimaCounter == bareminima.length && idButton != null){
        hideButton(idButton);
      }
    presDisplay.innerHTML = htmlPresDisplay;
    MathJax.typeset();
  });
}

function formatBareMinima(bareMinima){
  var tags = "";
  for(j = 0; j < 2; j++){
    if (j != 0) {
      tags += ", ";
    }
    tags += bareMinima.tags[j];
  }

  var video = ""
  if (bareMinima.video) {
    video += " - <a href=\"" + bareMinima.video + "\">Video</a>"
  }

  var briefHTML = "";
  briefHTML += "<h4 style=\"margin-bottom:0\"><b><a href=\"https://assumptionsofphysics.org/autogen/bareminima/" + bareMinima.filename + ".pdf\" >" + bareMinima.topic + "</a></b></h4>"
  briefHTML += "<p>Category: " + bareMinima.category + " - Tags:  "  + tags + video + "</i></p>";
  return briefHTML;
}

function hideButton(id){
  var button = document.getElementById(id);
  button.style.display = "none";
}
