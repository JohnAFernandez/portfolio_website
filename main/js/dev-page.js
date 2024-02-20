const containers = ["cpp-container", "sql-container", "rust-container", "csharp-container", "python-container", "github-container", "web-container", "blurb-container"];

function toggleProjects(id){
  for (let x = 0; x < containers.length; x++){
    const element = document.getElementById(containers[x]);

    if (element){
      console.log(element.style.display);
      if (id === containers[x]){
        const extra_space = document.getElementById("extra-space");

        if (element.style.display === 'none') {
          element.style.display = '';
          element.style.borderWidth = "5px";
          extra_space.style.display = 'none';
        } else {
          element.style.display = 'none';
          extra_space.style.display = '';
        }
      } else {
        element.style.display = 'none';
      }
    }
  }
}

