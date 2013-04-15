function fb_login() {
	var fbURL = 
		"http://www.facebook.com/dialog/oauth?client_id=450735241679152&redirect_uri=" +
		encodeURIComponent("http://elevalimine.appspot.com/fb") + "&scope=email";
	popup(fbURL,"Login");
	
}
$(document).ready(function(){
	$("#FbLoginButton").click(function(){
		fb_login();
	});
});