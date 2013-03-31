package ut.veeb.lambiprojekt123;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

public class DatabaseOperations {
	
	public static String findCandidatesByParty(String party){
		DataBase.ensure();
		List<String> candidatesByParty = new ArrayList<String>();
		try {
			Connection conn = DataBase.getConnection();
			Statement sta = conn.createStatement();
			ResultSet rs = sta.executeQuery("SELECT * FROM Candidates WHERE party='"+party+"'");
			while(rs.next()){
				DBObject object = new DBObject();
				object.setFirstName(rs.getString("first_name"));
				object.setLastName(rs.getString("last_name"));
				object.setCandidateId(rs.getInt("candidate_id"));
				object.setId(rs.getString("id"));
				object.setParty(rs.getString("party"));
				object.setCounty(rs.getString("county"));
				Gson gson = new GsonBuilder().setPrettyPrinting().create();
				String json = gson.toJson(object);
				candidatesByParty.add(json);
			}
			sta.close();
			conn.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return convertToJson(candidatesByParty);
		
	}
	public static String findCandidatesByPartyAndRegion(String party, String region){
		DataBase.ensure();
		List<String> candidatesByPartyAndRegion = new ArrayList<String>();
		try {
			Connection conn = DataBase.getConnection();
			Statement sta = conn.createStatement();
			ResultSet rs = sta.executeQuery("SELECT * FROM Candidates WHERE party='"+party +"' AND county='"+region+"'");
			while(rs.next()){
				candidatesByPartyAndRegion.add(rs.getString("first_name") +";"+rs.getString("last_name"));
			}
			sta.close();
			conn.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return convertToJson(candidatesByPartyAndRegion);
		
	}
	public static String findCandidatesByRegion(String region){
		DataBase.ensure();
		List<String> candidatesByRegion = new ArrayList<String>();
		try {
			Connection conn = DataBase.getConnection();
			Statement sta = conn.createStatement();
			ResultSet rs = sta.executeQuery("SELECT * FROM Candidates WHERE county='"+region+"'");
			while(rs.next()){
				candidatesByRegion.add(rs.getString("first_name") +";"+rs.getString("last_name"));
			}
			sta.close();
			conn.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return convertToJson(candidatesByRegion);
	}
	public void updateDB(String firstName, String lastName, Integer candidateId, String id, String party, String county){
		DataBase.ensure();
		try{
			Connection conn = DataBase.getConnection();
			Statement sta = conn.createStatement();
			ResultSet rs = sta.executeQuery("SELECT * FROM Candidates WHERE first_name='"+firstName+"' AND last_name='"+lastName+"'");
			if(rs.getString("first_name").isEmpty()){
				sta.executeUpdate("INSERT INTO Candidates (first_name, last_name, candidate_id, id, party, county) VALUES('"+firstName+"', '"+lastName+"',"+candidateId+", '"+id+"', '"+party+"', '"+county+"')");
			}
			sta.close();
			conn.close();
		} catch (SQLException e){
			e.printStackTrace();
		}
	}
	public static String convertToJson(List<String> dataList){
		Gson gson = new GsonBuilder().setPrettyPrinting().create();
		String json = gson.toJson(dataList);
		return json;
	}
}
