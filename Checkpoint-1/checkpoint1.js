
function microondas(comida,segundos){
//Pipoca----------------------------------------------------
    if (comida == "pipoca" && segundos > 19 && segundos < 30) {
        console.log("A comida queimou");
    
    }else if(comida == "pipoca" && segundos < 10){
        console.log("Tempo insuficiente");
    
    }else if (comida == "pipoca" && segundos > 29){
        console.log("Kabumm");

    }else if (comida == "pipoca" && segundos > 9 && segundos < 20 ){
        console.log("Prato pronto, bom apetite!!!");
//Macarrao----------------------------------------------------
    }else if(comida == "macarrao" && segundos > 15 && segundos < 24) {
            console.log("A comida queimou");
        
    }else if(comida == "macarrao" && segundos < 8){
            console.log("Tempo insuficiente");
        
    }else if (comida == "macarrao" && segundos > 23){
            console.log("Kabumm");

    }else if (comida == "macarrao" && segundos > 7 && segundos < 16){
            console.log("Prato pronto, bom apetite!!!");
//Carne-----------------------------------------------------------
    }else if(comida == "carne" && segundos > 29 && segundos < 45) {
    console.log("A comida queimou");

    }else if(comida == "carne" && segundos < 15){
    console.log("Tempo insuficiente");

    }else if (comida == "carne" && segundos > 44){
    console.log("Kabumm");

    }else if (comida == "carne" && segundos > 14 && segundos < 30){
    console.log("Prato pronto, bom apetite!!!");
//Feijão-----------------------------------------------------------
    }else if(comida == "feijao" && segundos > 23 && segundos < 36) {
    console.log("A comida queimou");

    }else if(comida == "feijao" && segundos < 12){
    console.log("Tempo insuficiente");

    }else if (comida == "feijao" && segundos > 35){
    console.log("Kabumm");

    }else if (comida == "feijao" && segundos > 11 && segundos < 24){
    console.log("Prato pronto, bom apetite!!!");
//Brigadeiro------------------------------------------------------
    }else if(comida == "brigadeiro" && segundos > 15 && segundos < 24) {
    console.log("A comida queimou");

    }else if(comida == "brigadeiro" && segundos < 8){
    console.log("Tempo insuficiente");

    }else if (comida == "brigadeiro" && segundos > 23){
    console.log("Kabumm");

    }else if (comida == "brigadeiro" && segundos > 7 && segundos < 16 ){
    console.log("Prato pronto, bom apetite!!!");
 //Nenhuma das opções ---------------------------------------------------          
    }else
    console.log("Prato inexistente");
    }


    
//Teste---------------------------------------------------------------------    
    console.log(microondas("brigadeiro",8));
 
