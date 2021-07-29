
let q = document.getElementsByClassName("question");


for(let i = 0; i < q.length; i++){
    q[i].onclick = function accordion(){
        let acc = q[i].firstElementChild
        if(acc.style.display === "none"){
            acc.style.display = "block"
        }   else{
                acc.style.display = "none"

        }
        
        
    };
}
