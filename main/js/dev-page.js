const containers = ["cpp-container", "sql-container", "rust-container", "csharp-container", "python-container", "github-container", "web-container"];

function toggleProjects(id){
  for (let x = 0; x < containers.length; x++){
    const element = document.getElementById(containers[x]);

    if (element){
      console.log(element.style.display);
      if (id === containers[x]){
        if (element.style.display === 'none') {
          element.style.display = '';
        } else {
          element.style.display = 'none';
        }
      } else {
        element.style.display = 'none';
      }
    }
  }
}

