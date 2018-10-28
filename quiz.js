var operation = "+-x:"
var myScore = 0
var pass = 0
var obj = {}
function Player(){
    obj.name = document.getElementById("name").value
    obj.score = myScore
    console.log(obj)
    return resetName()
}
function restartTheQuiz(){
    document.getElementById("hasil").value = ""
    document.getElementById("Number1").value = ""
    document.getElementById("Number2").value= ""
    document.getElementById("operasimath").value= ""
    myScore = 0
    pass = 0
}

function passQuestion(){
    if(pass <= 5){
        myScore -= 10
        pass++
        return resetInput()

    }else if(pass > 5){
        obj.score = myScore
        alert("nyawa mu habis" )
        alert("NAMA: " + obj.name + " " + "SCORE: " + obj.score)
        return restartTheQuiz()
    }
}

function resetName(){
    document.getElementById("name").value = ""
    
}

function resetInput(){
    document.getElementById("hasil").value = ""
    return generateAngka()
}


function generateAngka(){
    var random = Math.floor(Math.random()*(operation.length))
    document.getElementById("Number1").value=Math.floor(Math.random()*10)+1
    document.getElementById("Number2").value=Math.floor(Math.random()*10)+1
    document.getElementById("operasimath").value= operation[random]
}

function getAnsswer(operator){
    if( document.getElementById("operasimath").value === "+"){
        // alert("tambah")

        var tambah = Number(document.getElementById("Number2").value) + Number(document.getElementById("Number1").value )
        
        if(Number(document.getElementById("hasil").value) === tambah ){
            alert("Wah kamu hebat")
            myScore+= 100
            return resetInput()
        }else{
            alert("coba lagi ya!!!")
            
        }
    }else if(document.getElementById("operasimath").value === "-"){
        
        var kurang = Number(document.getElementById("Number2").value) - Number(document.getElementById("Number1").value)
        
        if(Number(document.getElementById("hasil").value) === kurang){

            alert("Wah kamu hebat")
            myScore+= 100
            return resetInput()
        }else{
            alert("coba lagi ya!!!")
           
        }
    }else if( document.getElementById("operasimath").value === "x"){

        var kali = Number(document.getElementById("Number2").value) * Number(document.getElementById("Number1").value)
        
        if(Number(document.getElementById("hasil").value ) === kali){

            alert("Wah kamu hebat")
            myScore+= 100
            return resetInput()

        }else{

            alert("coba lagi ya!!!")

        }
    }else if(document.getElementById("operasimath").value === ":"){

        var bagi = Number(document.getElementById("Number2").value) / Number(document.getElementById("Number1").value)

        if(Number(document.getElementById("hasil").value) === bagi){

            alert("Wah kamu hebat")
            myScore+= 100
            return resetInput()
        }else{
            alert("coba lagi ya!!!")
        }
    }
    

}



