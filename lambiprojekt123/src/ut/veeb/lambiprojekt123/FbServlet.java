//fb app-id: 	  178583862294466
//App secret:     839f12dd55b3bc7fc2e69542c8f39450
//login site url: http://xw-primal-quanta-m.appspot.com/

package ut.veeb.lambiprojekt123;


import org.json.JSONObject;
import org.json.JSONException;

 
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.IOException;
 
import java.net.URL;
import java.net.URLConnection;
import java.net.URLEncoder;
 
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;




public class FbServlet extends HttpServlet{
	private static final long serialVersionUID = 7526472295622776147L;

	
	public void service(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {            
        String code = req.getParameter("code");
        if (code == null || code.equals("")) {
            // an error occurred, handle this
        }
 
        String token = null;
        try {
            String g = "https://graph.facebook.com/oauth/access_token?client_id=178583862294466&redirect_uri=" + URLEncoder.encode("http://xw-primal-quanta-m.appspot.com/", "UTF-8") + "&client_secret=839f12dd55b3bc7fc2e69542c8f39450&code=" + code;
            URL u = new URL(g);
            URLConnection c = u.openConnection();
            BufferedReader in = new BufferedReader(new InputStreamReader(c.getInputStream()));
            String inputLine;
            StringBuffer b = new StringBuffer();
            while ((inputLine = in.readLine()) != null)
                b.append(inputLine + "\n");            
            in.close();
            token = b.toString();
            if (token.startsWith("{"))
                throw new Exception("error on requesting token: " + token + " with code: " + code);
        } catch (Exception e) {
                // an error occurred, handle this
        }
 
        String graph = null;
        try {
            String g = "https://graph.facebook.com/me?" + token;
            URL u = new URL(g);
            URLConnection c = u.openConnection();
            BufferedReader in = new BufferedReader(new InputStreamReader(c.getInputStream()));
            String inputLine;
            StringBuffer b = new StringBuffer();
            while ((inputLine = in.readLine()) != null)
                b.append(inputLine + "\n");            
            in.close();
            graph = b.toString();
        } catch (Exception e) {
                // an error occurred, handle this
        }
 
        String facebookId;
        String firstName;
        String middleNames;
        String lastName;
        String email;
        try {
            JSONObject json = new JSONObject(graph);
            facebookId = json.getString("id");
            firstName = json.getString("first_name");
            if (json.has("middle_name"))
               middleNames = json.getString("middle_name");
            else
                middleNames = null;
            if (middleNames != null && middleNames.equals(""))
                middleNames = null;
            lastName = json.getString("last_name");
            email = json.getString("email");
            
        } catch (JSONException e) {
            // an error occurred, handle this
        }


	}
}


