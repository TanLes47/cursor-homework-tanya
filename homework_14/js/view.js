document.getElementById("endless").addEventListener("click", () => {
    document.querySelector(".res-1").innerHTML = idGenerator.next().value;
});
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);

document.getElementById("btn-down").addEventListener("click", () => {
    fontGenerator.next("down");
    document
        .querySelector(".font")
        .setAttribute("style", `font-size: ${fontGenerator.next().value}px`);
});

document.getElementById("btn-up").addEventListener("click", () => {
    fontGenerator.next("up");
    document
        .querySelector(".font")
        .setAttribute("style", `font-size: ${fontGenerator.next().value}px`);
});
console.log(fontGenerator.next("up").value);
console.log(fontGenerator.next("up").value);
console.log(fontGenerator.next("up").value);
console.log(fontGenerator.next().value);
console.log(fontGenerator.next("down").value);
console.log(fontGenerator.next("down").value);
console.log(fontGenerator.next("down").value);
console.log(fontGenerator.next().value);
