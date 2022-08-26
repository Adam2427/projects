let arr = [];
let sum = "";
let st;
let ss;
let i = 1;
let isCreate;
for (let elem of document.querySelectorAll("*")) {
  isCreate = true;
  //sum += ` ${elem.tagName}`;

  arr.push(elem.tagName);
  elem.addEventListener("click", (e) => {
    doCall(arr.join("→"));
    //document.getElementById("test").innerHTML = arr.join("→");

    // alert(arr.join("→"));
    // if (arr.length < i) {
    //   console.log(arr.length, i);

    //   console.log(arr);
    // } else {

    // }

    // st = setTimeout(
    //   () => ((arr = []), (document.getElementById("test").innerHTML = "")),
    //   3000
    // );
  });
}

function doCall(str) {
  alert(str);
}
// alert(sum);

// alert(`Bubbling: ${elem}`)
// console.log(e.currentTarget)
// console.log(`${elem.tagName} `)
