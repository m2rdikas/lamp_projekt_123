package ut.veeb.lambiprojekt123;

import javax.servlet.http.HttpServlet;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
@Path("/hr/")
public class Lambiprojekt123RestServlet extends HttpServlet{
	private static final long serialVersionUID = 1L;

	@GET
	 @Produces("text/plain")  //("application/json")
	 @Path("/canditate")
	 public String getCanditate() {
	        return "Hello World!";
    }
}