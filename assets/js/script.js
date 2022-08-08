fetch('/data/papers.json')
  .then(response => response.text())
  .then((data) => {
    var papers = JSON.parse(data);
    console.log(papers[0]);
    console.log(papers[0].title);
    var counter = 0;
    function loadMore(){
      var loops = 0;
      for(i = counter; i < counter+4 && i < papers.length; i++){
        console.log(papers[i].title);
        loops++;
      }
      counter = loops;
    }
    loadMore();
  })
  let load = document.getElementById("load");
  load.addEventListener('click', event => { loadMore() });
