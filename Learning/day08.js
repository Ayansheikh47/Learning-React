console.log("Hello");

let a = document.getElementById("one")

a.style.backgroundColor = "red"

let colors = ["royalblue", "black", "olive", "orange","red"]
let index =0
function change(){
    if(index==colors.length){
        index=0
    }
        a.style.backgroundColor= colors[index]
    if(a.style.backgroundColor == "black"){
        a.style.color= "#fff"
    }else{
        a.style.color= "black"
    }
    index++
}