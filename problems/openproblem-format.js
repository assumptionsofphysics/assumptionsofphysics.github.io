var openProblemCounter = 0;
var problems;
var openProblemFilter = "Classical";

function loadMoreOpenProblems(amount, idText, idButton){
  var presDisplay = document.getElementById(idText);
  fetch('https://assumptionsofphysics.org/autogen/openproblems.json')
    .then(response => response.text())
    .then((data) => {
      problems = JSON.parse(data);
      var htmlPresDisplay = "";
      var loops = 0;
      if(amount == -1){
        amount = problems.length;
      }
      for(i = 0; i < openProblemCounter+amount && i < problems.length; i++){
        htmlPresDisplay += formatOpenProblem(problems[i]);
        loops++;
      }
      openProblemCounter = loops;
      if(openProblemCounter == problems.length && idButton != null){
        hideButton(idButton);
      }
    presDisplay.innerHTML = htmlPresDisplay;
    MathJax.typeset();
  });
}

/**
 * Checks if all tokens in a string match at least one field in the object.
 *
 * @param {Object} obj - The object whose fields are searched.
 * @param {string} str - The string containing tokens to match.
 * @returns {boolean} - True if every token matches at least one field value, false otherwise.
 */
function matchObject(obj, str) {
  // Split the string into tokens (split on whitespace, filter empty strings)
  const tokens = str.trim().split(/\s+/).filter(Boolean);

  if (tokens.length === 0) return true;

  // Flatten all field values from the object into an array of strings
  const fieldValues = Object.values(obj).map(value => String(value).toLowerCase());

  // Check that every token matches at least one field value (case-insensitive)
  return tokens.every(token =>
    fieldValues.some(fieldValue =>
      fieldValue.includes(token.toLowerCase())
    )
  );
}

function formatOpenProblem(problem){
  if (!matchObject(problem, openProblemFilter))
    return "";

  var tags = "";
  for(j = 0; j < 2; j++){
    if (j != 0) {
      tags += ", ";
    }
    tags += problem.tags[j];
  }

  var video = ""
  if (problem.video) {
    video += " - <a href=\"" + problem.video + "\">Video</a>"
  }

  var problemHTML = "";
  problemHTML += "<h4 style=\"margin-bottom:0\"><b><a href=\"https://assumptionsofphysics.org/autogen/AssumptionsOfPhysicsDraft.pdf#" + problem.label + "\" >" + problem.title + "</a></b></h4>"
  problemHTML += "<p><small>" + problem.description.replaceAll("\\ref", "ref") + "</small></br>";
  problemHTML += "<i>Category: " + problem.category + " - Tags:  "  + tags + " - ID: " + problem.label + video + "</i></p>";
  return problemHTML;
}

function hideButton(id){
  var button = document.getElementById(id);
  button.style.display = "none";
}
