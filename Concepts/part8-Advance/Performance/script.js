
let t1 = performance.now();

for (let i = 0; i <= 10; i++) {
    let para = document.createElement('p');
    para.textContent = "This is paragraph" + i;
    document.body.append(para);
}

let t2 = performance.now();
console.log(t2 - t1);

let fragment = document.createDocumentFragment();
for (let i = 0; i <= 10; i++) {
    let para = document.createElement('p');
    para.textContent = 'Thsi is para' + i;
    fragment.appendChild(para);
}

document.body.append(fragment)