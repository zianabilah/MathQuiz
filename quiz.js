var operation = "+-x:"
var memoryOfPlayers = []
var myScore = 0
var pass = 0
function Player(){
    var obj = {}
    obj.name = document.getElementById("name").value
    obj.score = myScore
    console.log(obj)
    memoryOfPlayers.push(obj)
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
        return generateAngka()

    }else if(pass > 5){
        alert("nyawa mu habis" + " " + "score : " + String(myScore))
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

        var tambah = Number(document.getElementById("Number1").value) + Number(document.getElementById("Number2").value )
        // console.log(Number(document.getElementById("Number1").value))
        // console.log(tambah)

        if(Number(document.getElementById("hasil").value) === tambah ){
            myScore+= 100
            alert("benar")
            return resetInput()
        }else{
            alert("coba lagi ya!!!")
            
        }
    }else if(document.getElementById("operasimath").value === "-"){
        
        var kurang = Number(document.getElementById("Number1").value) - Number(document.getElementById("Number2").value)

        if(Number(document.getElementById("hasil").value) === kurang){

            alert("benar")
            myScore+= 100
            return resetInput()
        }else{
            alert("coba lagi ya!!!")
           
        }
    }else if( document.getElementById("operasimath").value === "x"){

        var kali = Number(document.getElementById("Number1").value) * Number(document.getElementById("Number2").value)
        
        if(Number(document.getElementById("hasil").value ) === kali){

            alert("benar")
            myScore+= 100
            return resetInput()

        }else{

            alert("coba lagi ya!!!")

        }
    }else if(document.getElementById("operasimath").value === ":"){

        var bagi = Number(document.getElementById("Number1").value) / Number(document.getElementById("Number2").value)

        if(Number(document.getElementById("hasil").value) === bagi){

            alert(benar)
            myScore+= 100
            return resetInput()
        }else{
            alert("coba lagi ya!!!")
        }
    }
    

}



