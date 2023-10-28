var containerDiv = document.getElementById("flex-container");

for(var i=1; i <= 16; i++ ){
    var newDiv = document.createElement("div");

    // newDiv.innerHTML = '<p>'+i+'</p>';

    newDiv.id = '' +i;
    newDiv.className = 'grid';
    // newDiv.addEventListener('mousemove',e => {newDiv.style.background="blue"});

    containerDiv.appendChild(newDiv);
}

document.body.addEventListener('mouseover', e => {
    let d = e.target.closest('div');
    if (!d || d.id=="flex-container") { return; }
    d.style.backgroundColor = 'khaki';
  });
  
  document.body.addEventListener('mouseout', e => {
    let d = e.target.closest('div');
    if (!d || d.id=="flex-container") { return; }
    setTimeout(() => {d.style.backgroundColor = '';},1000);
  });
