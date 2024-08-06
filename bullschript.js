addEventListener("DOMContentLoaded", () => {showDiv(getShown());});

addEventListener("hashchange", () => {
  const elements = [
    [document.getElementById("aboutel"), document.getElementById("aboutbtn")],
    [document.getElementById("contactel"), document.getElementById("contactbtn")],
    [document.getElementById("newsel"), document.getElementById("newsbtn")],
    [document.getElementById("homeel"), document.getElementById("homebtn")],
    [document.getElementById("errorel")]
   ];
  const showdiv = getShown();
  if(!!showdiv[0]){
    for (let c = 0; c < elements.length; c++) {
      if (!!elements[c][0]) {
        elements[c][0].setAttribute('style', "display: none;");
        if(!!elements[c][1]){elements[c][1].setAttribute('class', "");};
      };
    };
    showDiv(showdiv);
  };
},false,);

var getShown =()=>{
  const hash = window.location.hash.substr(1).toLowerCase();
  var showdiv = null;
  switch(true){
    case hash==='about' || hash==='a':
      showdiv = [document.getElementById("aboutel"), document.getElementById("aboutbtn"), "About"]; break;
    case hash==='contact' || hash==='c':
      showdiv = [document.getElementById("contactel"), document.getElementById("contactbtn"), "Contact"]; break;
    case hash==='news' || hash==='n':
      showdiv = [document.getElementById("newsel"), document.getElementById("newsbtn"), "News"]; break;
    case hash==='home' || hash==='h' || hash==="" || !hash:
      showdiv = [document.getElementById("homeel"), document.getElementById("homebtn"), "Home"]; break;
    default:
      showdiv = [document.getElementById("errorel")]; break;
  };
  return showdiv;
};

var showDiv =(showdiv)=>{
  if(!!showdiv[0]){
    showdiv[0].setAttribute('style', "");
    if(!!showdiv[1]){showdiv[1].setAttribute('class', "active");};
    if(!!showdiv[2]){document.title = "ThatTeeterCat | "+showdiv[2]}else{document.title = "ThatTeeterCat | 404"};
  };
};