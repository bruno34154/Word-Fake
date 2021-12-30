var texto = document.getElementById("textInput");
var textoclass = document.querySelector(".text-input");
var fsize= document.getElementById("fontSize");
var checknegrito = document.getElementById("check1");
var checkitalico = document.getElementById("check2");
var checksublinhado = document.getElementById("check3");
var select_font = document.getElementById("fontType");
var select_background = document.getElementById("backgroundfont");
var clone;
var textoclone;
var clonesalt = [];


/*tamanho texto*/
function size(){
    try{
 	   texto.style.fontSize = fsize.value + "px";
 	  for(i=0; i<clonesalt.length; i++){
	      clonesalt[i].style.fontSize = fsize.value + "px";
    	}
 	   if (fsize.value == "") {
 	   	throw new Error("Você deixou o campo em branco!!!");
 	   }
    }catch(e){
    	alert(e.message);
    }
}

/*alinhar texto*/
function left(){
	texto.style.textAlign = "left";
	   for(i=0; i<clonesalt.length; i++){
		clonesalt[i].style.textAlign = "left";
    }

}
function right(){
	texto.style.textAlign = "right";
	  for(i=0; i<clonesalt.length; i++){
		clonesalt[i].style.textAlign = "right";
    }
}
function center(){
	texto.style.textAlign = "center";
	  for(i=0; i<clonesalt.length; i++){
		clonesalt[i].style.textAlign = "center";
    }
}
function justify(){
	texto.style.textAlign = "justify";
	  for(i=0; i<clonesalt.length; i++){
		clonesalt[i].style.textAlign = "justify";
    }
}

/*tipo de fonte*/
function fontFam(){ 

	if(select_font.value == "helvetica"){
		texto.style.fontFamily = "helvetica";
		for(i=0; i<clonesalt.length; i++){
	      clonesalt[i].style.fontFamily = "helvetica";
    	}
	}
	else if(select_font.value == "arial"){
		texto.style.fontFamily = "arial";
		for(i=0; i<clonesalt.length; i++){
	      clonesalt[i].style.fontFamily = "arial";
    	}

	}
	else if(select_font.value == "impact"){
		texto.style.fontFamily = "impact";
		for(i=0; i<clonesalt.length; i++){
	      clonesalt[i].style.fontFamily = "impact";
    	}
	}
	else if(select_font.value == "charcoal"){
		texto.style.fontFamily = "charcoal";
		for(i=0; i<clonesalt.length; i++){
	      clonesalt[i].style.fontFamily = "charcoal";
    	}
	}
	else if(select_font.value == "sansserif"){
		texto.style.fontFamily = "sansSerif";
		for(i=0; i<clonesalt.length; i++){
	      clonesalt[i].style.fontFamily = "sansSerif";
    	}
	}
	else if(select_font.value == "times"){
		texto.style.fontFamily = "times";
		for(i=0; i<clonesalt.length; i++){
	      clonesalt[i].style.fontFamily = "times";
    	}
	}

}

/*efeitos*/
  function efeito(){

  	  if (checknegrito.checked) {
        texto.style.fontWeight = "bold";
        for(i=0; i<clonesalt.length; i++){
	      clonesalt[i].style.fontWeight = "bold";
    	}
    } else {
        texto.style.fontWeight = "normal";
        for(i=0; i<clonesalt.length; i++){
	      clonesalt[i].style.fontWeight = "normal";
    	}
    }

      if (checkitalico.checked) {
       texto.style.fontStyle = "italic";
       for(i=0; i<clonesalt.length; i++){
	      clonesalt[i].style.fontStyle = "italic";
    	}

    } else {
        texto.style.fontStyle = "normal";
        for(i=0; i<clonesalt.length; i++){
	      clonesalt[i].style.fontStyle = "normal";
    	}

    }

    if(checksublinhado.checked){
         texto.style.textDecoration = "underline";
         for(i=0; i<clonesalt.length; i++){
	      clonesalt[i].style.textDecoration = "underline";
    	}

    }
    else{
    	texto.style.textDecoration = "none";
    	for(i=0; i<clonesalt.length; i++){
	      clonesalt[i].style.textDecoration = "none";
    	}
    }
  }  

  /*cores*/

 function preto(){
 	texto.style.color = "black";
 	for(i=0; i<clonesalt.length; i++){
	      clonesalt[i].style.color = "black";
    	}
 	
  }
  function cinzaescuro(){
  	texto.style.color = "#545454"
  	for(i=0; i<clonesalt.length; i++){
	      clonesalt[i].style.color = "#545454";
    	}
  }
  function cinzaclaro(){
  	texto.style.color = "#d9d9d9"
  		for(i=0; i<clonesalt.length; i++){
	      clonesalt[i].style.color = "#d9d9d9";
    	}
  }
  function branco(){
  	texto.style.color = "white"
  	for(i=0; i<clonesalt.length; i++){
	      clonesalt[i].style.color = "white";
    	}
  }
  function vermelho(){

  	texto.style.color = "#ff1616"
  	for(i=0; i<clonesalt.length; i++){
	      clonesalt[i].style.color = "#ff1616";
    	}
  }
 
  function vermelhocoral(){

  	texto.style.color = "#ff5757"
  	for(i=0; i<clonesalt.length; i++){
	      clonesalt[i].style.color = "#ff5757";
    	}

  }
  function rosa(){
  	texto.style.color = "#ff66c4"
  		for(i=0; i<clonesalt.length; i++){
	      clonesalt[i].style.color = "#ff66c4";
    	}

  }
  function margenta(){

  	texto.style.color = "#cb6ce6"
  	for(i=0; i<clonesalt.length; i++){
	      clonesalt[i].style.color = "#cb6ce6";
    	}
  }
  function roxo(){

  	texto.style.color = "#8c52ff"
  	for(i=0; i<clonesalt.length; i++){
	      clonesalt[i].style.color = "#8c52ff";
    	}
  }
  function violeta(){
  	texto.style.color = "#5e17eb"
  	for(i=0; i<clonesalt.length; i++){
	      clonesalt[i].style.color = "#5e17eb";
    	}
  }
  function turquesa(){

  	texto.style.color = "#03989e"
  	for(i=0; i<clonesalt.length; i++){
	      clonesalt[i].style.color = "#03989e";
    	}

  }
  function azulagua(){

  	texto.style.color = "#00c2cb"
  	for(i=0; i<clonesalt.length; i++){
	      clonesalt[i].style.color = "#00c2cb";
    	}

  }
  function azulturquesa(){

  	texto.style.color = "#5ce1e6"
  	for(i=0; i<clonesalt.length; i++){
	      clonesalt[i].style.color = "#5ce1e6";
    	}

  }
  function azulclaro(){

  	texto.style.color = "#38b6ff"
  	for(i=0; i<clonesalt.length; i++){
	      clonesalt[i].style.color = "#38b6ff";
    	}

  }

  function azul(){
  	texto.style.color = "#5271ff"
  	for(i=0; i<clonesalt.length; i++){
	      clonesalt[i].style.color = "#5271ff";
    	}
  }

   function cobalto(){
  	texto.style.color = "#004aad"
  		for(i=0; i<clonesalt.length; i++){
	      clonesalt[i].style.color = "#004aad";
    	}

  }
   function verde(){
  	texto.style.color = "#008037"
  	for(i=0; i<clonesalt.length; i++){
	      clonesalt[i].style.color = "#008037";
    	}
  }
   function verdefolha(){
  	texto.style.color = "#7ed957"
  	for(i=0; i<clonesalt.length; i++){
	      clonesalt[i].style.color = "#7ed957";
    	}
  }
  
   function verdelimao(){
  	texto.style.color = "#69e265"
  	for(i=0; i<clonesalt.length; i++){
	      clonesalt[i].style.color = "#69e265";
    	}

  }
   function amarelo(){
  	texto.style.color = "#ffde59"
  	for(i=0; i<clonesalt.length; i++){
	      clonesalt[i].style.color = "#ffde59";
    	}
  }
   function laranja(){
  	texto.style.color = "#ff914d"
  	for(i=0; i<clonesalt.length; i++){
	      clonesalt[i].style.color = "#ff914d";
    	}
  }

  /*contorno da fonte*/

  function backfont(){

  	if(select_background.value == "sem"){
		
		texto.style.backgroundColor = "white";
		for(i=0; i<clonesalt.length; i++){
	      clonesalt[i].style.backgroundColor = "white";
    	}
	}
 	
	else if(select_background.value == "cinzaescuro"){
		
		texto.style.backgroundColor = "#545454";
		for(i=0; i<clonesalt.length; i++){
	      clonesalt[i].style.backgroundColor = "#545454";
    	}
	}

    else if(select_background.value == "cinzaclaro"){
		
		texto.style.backgroundColor  = "#d9d9d9";
		for(i=0; i<clonesalt.length; i++){
	      clonesalt[i].style.backgroundColor = "#d9d9d9";
    	}
	}
	else if(select_background.value == "preto"){
		
		texto.style.backgroundColor = "black"
		for(i=0; i<clonesalt.length; i++){
	      clonesalt[i].style.backgroundColor = "black";
    	}
	}
	else if(select_background.value == "vermelho"){
		
		texto.style.backgroundColor  = "#ff1616";
		for(i=0; i<clonesalt.length; i++){
	      clonesalt[i].style.backgroundColor = "#ff1616";
    	}
	}
	else if(select_background.value == "vermelhocoral"){
		
		texto.style.backgroundColor  = "#ff5757";
		for(i=0; i<clonesalt.length; i++){
	      clonesalt[i].style.backgroundColor = "#ff5757";
    	}
	}
	else if(select_background.value == "rosa"){
		
		texto.style.backgroundColor  = "#ff66c4";
		for(i=0; i<clonesalt.length; i++){
	      clonesalt[i].style.backgroundColor = "#ff66c4";
    	}
	}
	else if(select_background.value == "margenta"){
		
		texto.style.backgroundColor  = "#cb6ce6";
		for(i=0; i<clonesalt.length; i++){
	      clonesalt[i].style.backgroundColor = "#cb6ce6";
    	}
	}
	else if(select_background.value == "roxo"){
		
		texto.style.backgroundColor  = "#8c52ff";
		for(i=0; i<clonesalt.length; i++){
	      clonesalt[i].style.backgroundColor = "#8c52ff";
    	}

	}
	else if(select_background.value == "violeta"){
		
		texto.style.backgroundColor  = "#5e17eb";
		for(i=0; i<clonesalt.length; i++){
	      clonesalt[i].style.backgroundColor = "#5e17eb";
    	}
	}
	else if(select_background.value == "turquesa"){
		
		texto.style.backgroundColor = "#03989e";
		for(i=0; i<clonesalt.length; i++){
	      clonesalt[i].style.backgroundColor = "#03989e";
    	}
	}
	else if(select_background.value == "azulagua"){
		
		texto.style.backgroundColor  = "#00c2cb";
		for(i=0; i<clonesalt.length; i++){
	      clonesalt[i].style.backgroundColor = "#00c2cb";
    	}
	}
	else if(select_background.value == "azulturquesa"){
		
		texto.style.backgroundColor  = "#5ce1e6";
		for(i=0; i<clonesalt.length; i++){
	      clonesalt[i].style.backgroundColor = "#5ce1e6";
    	}
	}
	else if(select_background.value == "azulclaro"){
		
		texto.style.backgroundColor  = "#38b6ff";
		for(i=0; i<clonesalt.length; i++){
	      clonesalt[i].style.backgroundColor = "#38b6ff";
    	}
	}
	else if(select_background.value == "azul"){
		
		texto.style.backgroundColor  = "#5271ff";
		for(i=0; i<clonesalt.length; i++){
	      clonesalt[i].style.backgroundColor = "#5271ff";
    	}
	}
	else if(select_background.value == "cobalto"){
		
		texto.style.backgroundColor  = "#004aad";
		for(i=0; i<clonesalt.length; i++){
	      clonesalt[i].style.backgroundColor = "#004aad";
    	}

	}
	else if(select_background.value == "verde"){
		
		texto.style.backgroundColor  = "#008037";
		for(i=0; i<clonesalt.length; i++){
	      clonesalt[i].style.backgroundColor = "#008037";
    	}
	}
	else if(select_background.value == "verdefolha"){
		
		texto.style.backgroundColor  = "#7ed957";
		for(i=0; i<clonesalt.length; i++){
	      clonesalt[i].style.backgroundColor = "#7ed957";
    	}
	}
	else if(select_background.value == "verdelimao"){
		
		texto.style.backgroundColor  = "#69e265";
		for(i=0; i<clonesalt.length; i++){
	      clonesalt[i].style.backgroundColor = "#69e265";
    	}

	}
	else if(select_background.value == "amarelo"){
		
		texto.style.backgroundColor  = "#ffde59";
		for(i=0; i<clonesalt.length; i++){
	      clonesalt[i].style.backgroundColor = "#ffde59";
    	}
	}
	else if(select_background.value == "laranja"){
		
		texto.style.backgroundColor  = "#ff914d";
		for(i=0; i<clonesalt.length; i++){
	      clonesalt[i].style.backgroundColor = "#ff914d";
    	}
	}

  }

/*orientação*/

function portrait(){

	texto.style.width = "900px"
	texto.style.height = "1000px"
    for(i=0; i<clonesalt.length; i++){
		clonesalt[i].style.width = "900px"
		clonesalt[i].style.height = "1000px"
    }
	

}

function landscape(){
	texto.style.width = "1500px"
	texto.style.height = "700px"
    for(i=0; i<clonesalt.length; i++){
		clonesalt[i].style.width = "1500px"
		clonesalt[i].style.height = "700px"
    }
	

	}

// clonar

function copy(){
	 textoclone = textoclass.cloneNode(true);
     clone = document.body.appendChild(textoclone);
     clone.value = " ";
     clonesalt.push(clone);

}
