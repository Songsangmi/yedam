const choi = {
    name: '최선영',
    age: 20,
    score: 90
}

const han = {
    name: '한동일',
    age: 21,
    score: 89
}


const yun = {
    name: '윤희성',
    age: 22,
    score: 58
}


// document.write('<table border="1">');


// document.write('<tr>');
// document.write('<td>이름</td>');
// document.write('<td>나이</td>');
// document.write('<td>점수</td>');
// document.write('</tr>');


// for(let person of persons){
//     document.write('<tr>');
//     for(let field in person){
//     document.write('<th class="'+field+'">'+person[field]+"</th>");
//     }
//     document.write()
// }
// document.write('</table>');

//교수님 풀이 
const persons = [choi, han, yun];

function createTable() {

    let tag = '<table border="1">';
    tag += '<thead><tr><th>이름</th><th>나이</th><th>점수</th><<th>합격여부</th></tr></thead>';
    tag += '<tbody>'
    for (let person of persons) {
        //     if (person.score >= 90) {
        //         tag += '<tr class="pass">';
        //     } else {
        //         tag += '<tr class="fail">';
        //     }
        // }
        // for (let person of persons) {
        //     tag += '<tr>';
        //     for (let field in person) {
        //         tag += '<td>' + person[field] + '</td>';
        //     }
        //     if (person.score >= 90) {
        //         tag += '<td>Pass</td>';
        //     } else {
        //         tag += '<td>Fail</td>';
        //     }
        //     tag += '</tr>'
        tag += createTr(person);
    }
    tag = tag + '</tbody></table>';
    document.write(tag);
}


// createTable();