// var index =0;
// function backgroundChange() {
//   var colors=["black","red","yellow"];
 
  
//   document.getElementsByTagName("body")[0].style.background= colors[index++];
//   if (colors > colors.length -1);
// }

var index = 0;

function backgroundChange() {
  var colors = ["black", "red", "yellow","aqua","pink","goldenrode",  ];

  document.getElementsByTagName("body")[0].style.background = colors[index++];
  if (index >= colors.length) {
    
    index = 0;
  }
}
