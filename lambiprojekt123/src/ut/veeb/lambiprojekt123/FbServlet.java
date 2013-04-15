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
 
public class FbServlet extends HttpServlet {
 
    /**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public void doGet(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {            
		res.setContentType("text/plain");
        
		String code = req.getParameter("code");
        String token = null;
        try {
            String g = "https://graph.facebook.com/oauth/access_token?client_id=450735241679152&redirect_uri=" + URLEncoder.encode("http://elevalimine.appspot.com/fb", "UTF-8") + "&client_secret=a35f70b7358dd35ae7ad3b114fe18b6f&code=" + code;
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
        	res.getWriter().write("4 error: " + e);
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
        	res.getWriter().write("3 error : " + e);
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
//            if (json.has("gender")) {
//                String g = json.getString("gender");
//                if (g.equalsIgnoreCase("female"))
//                    gender = Gender.FEMALE;
//                else if (g.equalsIgnoreCase("male"))
//                    gender = Gender.MALE;
//                else
//                    gender = Gender.UNKNOWN;
//            } else {
//                gender = Gender.UNKNOWN;
//            }
            res.getWriter().write(facebookId);
            res.getWriter().write(firstName);
//            res.getWriter().write(middleNames);
            res.getWriter().write(lastName);
            res.getWriter().write(email);
            
        } catch (JSONException e) {
        	res.getWriter().write("1 error " + e);
        }
        catch (Exception e) {
        	res.getWriter().write("2 error" + e);
        	e.printStackTrace();
        }
    }
}