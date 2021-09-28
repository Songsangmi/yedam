<%@page import="co.yedam.common.EmpDAO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>form/get.jsp</title>
</head>
<body>
	<%
	EmpDAO dao = new EmpDAO(); //import = ctrl+space

	String id = request.getParameter("employeeId"); //userId=guest
	String pw = request.getParameter("phone"); //userPw=1234
	String salary = request.getParameter("salary");
	
	//dao.deleteEmp(Integer.parseInt(id));
	dao.updateEmp(id, pw, salary);
	out.print("<h3>정상적으로 수정</h3>");
	
	%>
</body>
</html>