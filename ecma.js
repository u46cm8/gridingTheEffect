var containerDiv = document.getElementById("flex-container");
var n = 4;
addGrids(n);



function addGrids(n) {


    for(var i=1; i <= n**2; i++ ){
    var newDiv = document.createElement("div");
    
    // count of squeres
    // newDiv.innerHTML = '<p>'+i+'</p>';

    newDiv.className = 'grid';
    // newDiv.addEventListener('mousemove',e => {newDiv.style.background="blue"});

    containerDiv.appendChild(newDiv);
    }
    
    document.body.addEventListener('mouseover', e => {
        let d = e.target.closest('div');
        if (!d || d.id=="flex-container"|| d.className=="buttons") { return; }
        d.style.backgroundColor = 'khaki';
      });
      
      document.body.addEventListener('mouseout', e => {
        let d = e.target.closest('div');
        if (!d || d.id=="flex-container") { return; }
        setTimeout(() => {d.style.backgroundColor = '';},1000);
      });
      let gridList = document.getElementsByClassName("grid");
      for (var y=0; y<= gridList.length; y++ ){
        var grid = gridList[y];
        var pageP = 100/(n) ;
        grid.style.flex = (pageP-(1/n)*n)+"%",1,(pageP-(1/n)*n)+"%";
         grid.style.height = 100/(n)  + "%";
      }
      // document.querySelector(".grid").style.height= "20%";
}

//Test to see it worked
//containerDiv.innerHTML="<h2>Something wrong :(</h2>";

function squareChange() { 
  n = prompt("Please enter the number of squares you would like on the sides \n only choose between 1 and 8", "");

  if(n<9){
    containerDiv.innerHTML="";
    addGrids(n);
  }
  
  else {
    squareChange();
  }

}