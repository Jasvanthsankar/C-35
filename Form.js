class Form{
constuctor(){


}

display(){
var title=createElement("h2")
title.html("car racing game")
title.position(320,130)
var input=createInput("Name")
input.position(320,360)
var button=createButton("Play")
button.position(320,400)
button.mousePressed(function(){
input.hide()
button.hide()
var name=input.value()
playerCount=playerCount+1
player.update(name);
player.updateCount(playerCount)
var greeting=createElement("h3")
greeting.html("Hello "+name)
greeting.position(320,160)

})
}
}
