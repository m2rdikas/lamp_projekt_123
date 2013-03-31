package ut.veeb.lambiprojekt123;

import java.io.IOException;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import javax.servlet.http.*;


@SuppressWarnings("serial")
public class Lambiprojekt123Servlet extends HttpServlet {
	public void doGet(HttpServletRequest req, HttpServletResponse resp)
			throws IOException {
		DataBase.ensure();
		resp.setContentType("text/plain");
		resp.getWriter().println("Hello, world");
		try {
			resp.getWriter().println("blabla");
			Statement sta = DataBase.getConnection().createStatement();
			ResultSet rs = sta.executeQuery("SELECT * FROM Candidates");
			resp.getWriter().println(sta.executeQuery("SELECT * FROM Candidates"));
			rs.next();
			String blabla = rs.getString(1);
			resp.getWriter().println("FIRST: "+ blabla);
			resp.getWriter().println("SECOND: " + rs.getString(1));
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
}
