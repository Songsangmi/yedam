let v1 = 10;
console.log(v1);

let v2 = 20;
console.log(v2);

const choi = {
    name: '최선영',
    age :20,
    score:90
}

const han={
    name: '한동일',
    age : 21,
    score :89
}

const yun={
    name: '윤희성',
    age : 22,
    score :88
}

for(let field in han){
    console.log(field + '-' + han[field]);
}

//변수로도 필드 값을 불러오기 가능 
//. 연산자로, ['필드명'], 변수 선언 후 ['변수명']
console.log(choi.name);
console.log(choi['age']); 
let field = 'score';
console.log(choi[field]);

//
const persons=[choi, han, yun];
// for(let i=0; i<persons.length; i++){

    for(let person of persons){
        document.write('<ul>');
        for(let field in person){
            console.log(person[field]);
            document.write('<li class="' + field +'">' + person[field] +"</li>");
        }
        //document.write('<li class="' + field +'">'+person[field]+"</li>")
    // console.log(person.name);
    // console.log(person['age']);
    // field = 'score';
    // console.log(person[field]);
    document.write('</ul>');
    }
