package ut.veeb.lambiprojekt123;

import java.io.IOException;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.HashMap;
import java.util.Map;

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
public void doPost(HttpServletRequest req, HttpServletResponse resp) throws IOException {
	
	System.out.println("Kasutaja tegi pärginu: " + req.getParameter("query"));
	resp.setContentType("application/json");
//	resp.setContentType("text/plain");
	String query = req.getParameter("query");
	Map<String, String> map = new HashMap<String, String>();
	map.put("harjumaa", "Harju maakond");
	map.put("hiiu", "Hiiu maakond");
	map.put("ida-viru", "Ida-Viru maakond");
	map.put("jogeva", "Hiiu maakond");
	map.put("jarva", "J��rva maakond");
	map.put("laane", "L����ne maakond");
	map.put("l-viru", "L����ne-Viru maakond");
	map.put("polva", "P��lva maakond");
	map.put("parnu", "P��rnu maakond");
	map.put("rapla", "Rapla maakond");
	map.put("saare", "Saare maakond");
	map.put("tartu", "Tartu maakond");
	map.put("valga", "Valga maakond");
	map.put("viljandi", "Viljandi maakond");
	map.put("voru", "V��ru maakond");
	if(query.equals("geteverything")){
		String result = DatabaseOperations.getEverything();
		resp.getWriter().write(result);
	}
	else {
		
	try {
		String result;
	    String[] tykid = query.split(";");
	    if(tykid[0].equals("byParty") ){
	    	result = DatabaseOperations.findCandidatesByParty(tykid[1]);
	    	//resp.getWriter().println(query);
	    	System.out.println("(byParty) Kasutajale saadeti: "+ result);
	    	resp.getWriter().write(result);
	    	
	    }
	    else if (tykid[0].equals("byCanditate")){
	    	result = DatabaseOperations.findCandidatesByName(tykid[1]);
	    	//resp.getWriter().println(query);
	    	System.out.println("(byCanditate) Kasutajale saadeti: "+ result);
	    	resp.getWriter().write(result);
	    }
	    else if (tykid[0].equals("byRegion")){
	    	result = DatabaseOperations.findCandidatesByRegion(map.get(tykid[1]));
	    	
	    	//resp.getWriter().println(query);
	    	System.out.println("(byRegion) Kasutajale saadeti: "+ result);
	    	resp.getWriter().write(result);
	    }
	    else if (tykid[0].equals("byPartyAndRegion")){
	    	result = DatabaseOperations.findCandidatesByPartyAndRegion(tykid[1],map.get(tykid[2]));
	    	//resp.getWriter().println(query);
	    	System.out.println("(byPartyAndRegion) Kasutajale saadeti: "+ result);
	    	resp.getWriter().write(result);
	    }
	    
	    
	    //resp.getWriter().println(tykid[1]);
//	    String name = req.getParameter("name");
//	    resp.getWriter().println(name);
	} catch (Exception ex) {
			System.out.println("Päring ei andnud tulemust");
			String result = DatabaseOperations.getEverything();
			resp.getWriter().write(result);

			resp.getWriter().write("[]");

		
	}
	}

	
	//String tulemus = DatabaseOperations.findCandidatesByParty("SINISED");
	//resp.getWriter().write(tulemus);
	}
}
