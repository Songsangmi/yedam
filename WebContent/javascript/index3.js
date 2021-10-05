let messages = ['Hello', 'Good Moring', 'Hi'] //messages의 배열

let ulTag = document.createElement('ul'); //ul 태크를 만드는 메소드 createElement
// ulTag.innerHTML = '<li>Hello</li>';

for(let i=0; i<messages.length; i++){
let liTag = document.createElement('li'); //<li></li> 만들기
liTag.innerHTML=messages[i]; //ulTag의 자식으로 liTag를 넣겠다 
ulTag.appendChild(liTag); //만들어진 liTag를 ulTag에 붙여넣겠다
}

//div에 자손으로 ulTag 붙여주기 
let divShow = document.getElementById('show');
divShow.appendChild(ulTag);


let fruits = [{
    name: '사과',
    price: 1000
},{
    name: '바나나',
    price: 2000
},{
    name: '체리',
    price: 3000
}];

//div 찾기
let divFruit = document.getElementById('fruit');
let ulTag2 = document.createElement('ul');
for(let fruit of fruits){
    let li = document.createElement('li');
    li.innerHTML=fruit.name + ',' + fruit.price;
    ulTag2.appendChild(li);
}
divFruit.appendChild(ulTag2);

//div 찾기
let multi = document.getElementById('multi');
let t = document.createElement('table');//table 태그
t.setAttribute('border', '1');

let num=6; //6단

//thead영역
let tr = document.createElement('tr'); 
let td = document.createElement('td');
td.innerHTML = num + '단';
tr.appendChild(td);
t.appendChild(tr);


//tbody 영역
for(let i=1; i<=9; i++){
    let tr = document.createElement('tr'); 
    let td = document.createElement('td');
    td.innerHTML =  num + '*' + i + '=' + (num*i);
    tr.appendChild(td);
    t.appendChild(tr);
}
//multi의 자손으로 t 붙여줌
multi.appendChild(t);