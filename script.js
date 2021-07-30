
let q = document.getElementsByClassName("question");


for(let i = 0; i < q.length; i++){
    q[i].onclick = function accordion(){
        let acc = q[i].firstElementChild
        if(acc.style.animationName !== "appear"){
            acc.style.animationName = "appear"
            console.log(acc.style.animationName)
        }   else if(acc.style.animationName !== "disappear"){
                acc.style.animationName = "disappear"
                console.log(acc.style.animationName)

        }
        
        
    };
}
