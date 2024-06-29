let po = document.querySelector(".playerone");
let pt = document.querySelector(".playertwo");
let box = document.querySelectorAll(".box");
let reload = document.querySelector(".reload")
let countOne = document.querySelector(".countone");
let countTwo = document.querySelector(".counttwo");
let bo = document.body;
bo.style.backgroundImage = "linear-gradient(to right, blue, white)"
let pone = "";
let pone2 = "";
let ptwo = "";
let ptwo2 = "";
let p = 0;
let countO = 0;
let countT = 0;
let arr = []

countOne.textContent = countO;
countTwo.textContent = countT;


for (let i = 1; i < 43; i++) {
    arr.push(i)
}
arr.sort(() => 0.5 - Math.random());
for (let i = 0; i < 41; i++) {
    box[i].style.order = `${arr[i]}`
}

function playerOne() {
    bo.style.backgroundImage = "linear-gradient(to right, blue, white)"
    pt.style.color = "black"
    po.style.color = "blue"
    for (let i = 0; i < 42; i++) {
        box[i].onclick = function() {
            if (box[i].classList.contains("box")) {
                if (p % 2 === 0) {
                    box[i].style.transform = "rotatey(-180deg)"
                    pone = box[i].classList[3];
                    box[i].className = `style flip ${pone}`
                    p++;
                } else {
                    box[i].style.transform = "rotatey(-180deg)"
                    pone2 = box[i].classList[3];
                    box[i].className = `style flip ${pone2}`
                    p++;
                }
                if (pone === pone2) {
                    countO++;
                    countOne.textContent = countO;
                    let l = document.querySelectorAll(`.${pone}`)
                    l[0].className = `style ${pone}`
                    l[1].className = `style ${pone2}`
                }
                if (pone !== pone2 && p % 2 === 0) {
                    setTimeout(() => {
                        let one = document.querySelectorAll(`.${pone}`);
                        one[0].className = `box style flip ${pone}`
                        one[1].className = `box style flip ${pone}`
                        let two = document.querySelectorAll(`.${pone2}`);
                        two[0].className = `box style flip ${pone2}`
                        two[1].className = `box style flip ${pone2}`
                        for (let i = 0; i < 42; i++) {
                            if (box[i].classList.contains("flip")) {
                                box[i].style.transform = "rotatey(0deg)";
                            }
                        }
                        pone = ""
                        pone2 = ""
                        return playerTwo();
                    }, 500);
                }
            }
            if (countO + countT === 21) {
                if (countO > countT) {
                    pt.innerHTML = "Lose &#128545;"
                    po.innerHTML = "Win &#128513;"
                    po.style.color = "blue"
                    pt.style.color = "red"
                } else {
                    po.innerHTML = "Lose &#128545;"
                    pt.innerHTML = "Win &#128513;"
                    pt.style.color = "blue"
                    po.style.color = "red"
                }
            }
        }
    }
}

function playerTwo() {
    bo.style.backgroundImage = "linear-gradient(to left, red, white)"
    po.style.color = "black"
    pt.style.color = "red"
    for (let i = 0; i < 42; i++) {
        box[i].onclick = function() {
            if (box[i].classList.contains("box")) {
                if (p % 2 === 0) {
                    box[i].style.transform = "rotatey(-180deg)"
                    ptwo = box[i].classList[3];
                    box[i].className = `style flip ${ptwo}`
                    p++;
                } else {
                    box[i].style.transform = "rotatey(-180deg)"
                    ptwo2 = box[i].classList[3];
                    box[i].className = `style flip ${ptwo2}`
                    p++;
                }
                if (ptwo === ptwo2) {
                    countT++;
                    countTwo.textContent = countT;
                    let l = document.querySelectorAll(`.${ptwo}`)
                    l[0].className = `style ${ptwo}`
                    l[1].className = `style ${ptwo}`
                }
                if (ptwo !== ptwo2 && p % 2 === 0) {
                    setTimeout(() => {
                        let one = document.querySelectorAll(`.${ptwo}`);
                        one[0].className = `box style flip ${ptwo}`
                        one[1].className = `box style flip ${ptwo}`
                        let two = document.querySelectorAll(`.${ptwo2}`);
                        two[0].className = `box style flip ${ptwo2}`
                        two[1].className = `box style flip ${ptwo2}`
                        for (let i = 0; i < 42; i++) {
                            if (box[i].classList.contains("flip")) {
                                box[i].style.transform = "rotatey(0deg)";
                            }
                        }
                        ptwo = ""
                        ptwo2 = ""
                        return playerOne();
                    }, 500);
                }
            };
            if (countO + countT === 21) {
                if (countO < countT) {
                    po.innerHTML = "Lose &#128545;"
                    pt.innerHTML = "Win &#128513;"
                    pt.style.color = "blue"
                    po.style.color = "red"
                } else {
                    pt.innerHTML = "Lose &#128545;"
                    po.innerHTML = "Win &#128513;"
                    po.style.color = "blue"
                    pt.style.color = "red"
                }
            }
        }
    }
}

playerOne();

reload.onclick = function () {
    location.reload()
}