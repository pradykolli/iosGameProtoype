let sequenceArray = new Array()
var icount = 0
for (var i = 0; i<100; i++){
    sequenceArray.push(i)
} 


var randomArray = new Array()
for(var i=0;i<100;i++){
    randomArray[i] = sequenceArray[i]
}
for(var i=99;i>=0;i--){
    var j = Math.floor((Math.random() * i))
    var temp = randomArray[j]
    randomArray[j] = randomArray[i]
    randomArray[i] = temp;
}

console.log(sequenceArray)
console.log(randomArray)
for (var i = 0; i<100; i++){
    let numberElement = document.createElement("div")
    numberElement.id = "number" + i
    numberElement.className ="gameCell"
    $(".gridBox").append(numberElement)
    $(numberElement).html(randomArray[i])
}

var counter = 0
$(".gameCell").click(function(){
    if($(this).html() == counter){
        $(this).addClass("correctNum")
        counter++
    }
    else{
        $(this).addClass("incorrectNum")
        setInterval(10000)
        $(this).removeClass("incorrectNum")
    }
    if(counter == 100){
        alert("BINGO!! Congratulations you have won the game.")
        if(confirm("Would you like to play again")){
            location.reload(true)
        }
    }
})

$(".btnBox .btn").click(function(){
    $(".gridBox").show()
    $(".btnBox").hide()
})