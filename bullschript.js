addEventListener("DOMContentLoaded", () => {
  const showdiv = getShown();
  showDiv(showdiv);
});

addEventListener("hashchange", () => {
  const elements = [
    [document.getElementById("about"), document.getElementById("aboutbtn")],
    [document.getElementById("contact"), document.getElementById("contactbtn")],
    [document.getElementById("news"), document.getElementById("newsbtn")],
    [document.getElementById("home"), document.getElementById("homebtn")],
    [document.getElementById("error")]
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
    case hash==='about':
      showdiv = [document.getElementById("about"), document.getElementById("aboutbtn"), "About"]; break;
    case hash==='contact':
      showdiv = [document.getElementById("contact"), document.getElementById("contactbtn"), "Contact"]; break;
    case hash==='news':
      showdiv = [document.getElementById("news"), document.getElementById("newsbtn"), "News"]; break;
    case hash==='home' || !hash || hash==="":
      showdiv = [document.getElementById("home"), document.getElementById("homebtn"), "Home"]; break;
    default:
      showdiv = [document.getElementById("error")]; break;
  };
  return showdiv;
};

var showDiv =(showdiv)=>{
  if(!!showdiv[0]){
    showdiv[0].setAttribute('style', "");
    if(!!showdiv[1]){showdiv[1].setAttribute('class', "active");};
    if(!!showdiv[2]){document.title = "ThatTeeterCat | "+showdiv[2]};
  };
};