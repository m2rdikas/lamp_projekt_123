<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@page import="java.net.URLEncoder" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Fb login</title>
</head>
<body>
Kindel et soovid sisselogimiseks kasutada Facebooki?

<%
    String fbURL = "http://www.facebook.com/dialog/oauth?client_id=178583862294466&redirect_uri=" + URLEncoder.encode("http://http://xw-primal-quanta-m.appspot.com/login") + "&scope=email";
%>

<a href="<%= fbURL %>"><img src="/img/facebook_signin.png" border="0" /></a>
</body>
</html>