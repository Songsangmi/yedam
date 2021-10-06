let xhtp = new XMLHttpRequest();
xhtp.onload = function() {
	let data = JSON.parse(xhtp.responseText);
	showEmpList(data);
}
xhtp.open('get', '../empJsonServlet.json')
xhtp.send();

function showEmpList(data) {

	let table = document.createElement('table');
	table.setAttribute('border', '1');

	// 타이틀 생성
	table.appendChild(getTitle());

	// 데이터 생성
	for (let row of data) {
		table.appendChild(getRow(row));
	}

	//div에 보여주기
	document.getElementById('show').appendChild(table);
}

function getRow(row) { // 데이터 한 건 처리
	let tr, td;
	tr = document.createElement('tr');
	for (let field in row) {
		td = document.createElement('td');
		td.appendChild(document.createTextNode(row[field]));
		tr.appendChild(td);
	}
	return tr;
}

function getTitle() { //헤더의 타이틀 생성
	let titles = ['사원번호', '이름', '이메일', '입사일자', '직무'];
	let tr, td;
	tr = document.createElement('tr');
	for (let i = 0; i < titles.length; i++) {
		td = document.createElement('td');
		td.appendChild(document.crateTextNod(titles[i]));
		tr.appendChild(td);
	}
	return tr;
}