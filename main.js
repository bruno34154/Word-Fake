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
	    let tecla = event.keyCode;
	    switch(tecla){
	    	case 13:
	    	  texto.style.fontSize = fsize.value + "px";
		 	  for(i=0; i<clonesalt.length; i++){
			      clonesalt[i].style.fontSize = fsize.value + "px";
		    	}
		 	   if (fsize.value == "") {
		 	   	throw new Error("Você deixou o campo em branco!!!");
		 	   }
		 	   break;	
    }
 	 
    }catch(e){
    	alert(e.message);
    }
}

fsize.addEventListener("keydown", size);

//alinhar texto

function TextAlign (Alignment){
	texto.style.textAlign = Alignment;
	  for(i=0; i<clonesalt.length; i++){
		clonesalt[i].style.textAlign = Alignment;
    }
}

/*tipo de fonte*/
function fontFam(){ 

	switch(select_font.value){
		case "helvetica": 
			texto.style.fontFamily = "helvetica";
			for(i=0; i<clonesalt.length; i++){
	      		clonesalt[i].style.fontFamily = "helvetica";
    		}
    		break;
    	case "arial":
    		texto.style.fontFamily = "arial";
			for(i=0; i<clonesalt.length; i++){
	      		clonesalt[i].style.fontFamily = "arial";
    		}
    		break;
    	case "impact":
    		texto.style.fontFamily = "impact";
			for(i=0; i<clonesalt.length; i++){
	      		clonesalt[i].style.fontFamily = "impact";
    		}
    		break;
    	case "charcoal":
    		texto.style.fontFamily = "charcoal";
			for(i=0; i<clonesalt.length; i++){
	      		clonesalt[i].style.fontFamily = "charcoal";
    		}
    		break;
    	case "sansserif":
    		texto.style.fontFamily = "sansSerif";
			for(i=0; i<clonesalt.length; i++){
	      		clonesalt[i].style.fontFamily = "sansSerif";
    		}
    		break;
    	case times:
    		texto.style.fontFamily = "times";
			for(i=0; i<clonesalt.length; i++){
	      		clonesalt[i].style.fontFamily = "times";
    		}
    		break;
    	default:
    		//faz nada
    		break;
	}

}

/*efeitos*/

checknegrito.addEventListener("change", ()=>{
	if(checknegrito.checked){
       texto.style.fontWeight = "bold";
        for(i=0; i<clonesalt.length; i++){
	      clonesalt[i].style.fontWeight = "bold";
    	} 

    	
	}else{
		texto.style.fontWeight = "normal";
        for(i=0; i<clonesalt.length; i++){
	      clonesalt[i].style.fontWeight = "normal";
    	}
	}
});

checkitalico.addEventListener("change", ()=>{
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
  });
 checksublinhado.addEventListener("change", ()=>{
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
    });

 

//Mudar cor

  function setColor(color) {

  	texto.style.color = color;
  	for(i=0; i<clonesalt.length; i++){
	      clonesalt[i].style.color = color;
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
