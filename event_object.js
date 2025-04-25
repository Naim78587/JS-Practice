//We can use change event on input, select and textarea

const varName=document.querySelector("input[name=name]");
varName.addEventListener("change", function(){
    document.querySelector(".p1").innerHTML=varName.value;
});


function updateText() {
    const languages = document.querySelectorAll('input[type="checkbox"]');
    let selected = [];

    languages.forEach(language => {     //ES6 of defining function we could use function(box){};
      if (language.checked) {
        selected.push(language.value);
      }
    });

    const output = document.getElementById("output");
    if (selected.length > 0) {
      output.textContent = "I know " + selected.join(", ");
    } else {
      output.textContent = "I know";
    }
  }