
let q = document.getElementsByClassName("question");


for (let i = 0; i < q.length; i++) {
    q[i].onclick = function accordion() {
        let acc = q[i].lastElementChild
        let arr = q[i].firstElementChild
        if (acc.style.animationName !== "appear") {
            acc.style.animationName = "appear"
            arr.style.animationName = "arrDown"
            q[i].style.fontWeight = "700"

        } else if (acc.style.animationName !== "disappear") {
            acc.style.animationName = "disappear"
            arr.style.animationName = "arrUp"
            q[i].style.fontWeight = "400"


        }


    };
}
