function login() {
    FB.login(function(response) {
        if (response.authResponse) {
            alert("asd");
        	testAPI();
        } else {
            // cancelled
        }
    });
}
function testAPI() {
    console.log('Welcome!  Fetching your information.... ');
    FB.api('/me', function(response) {
        console.log('Good to see you, ' + response.name + '.');
        console.log(response);
    });
}