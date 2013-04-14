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
	
	public static void removeVote(String id){
		DataBase.ensure();
		try{
			Connection conn = DataBase.getConnection();
			Statement sta = conn.createStatement();
			sta.executeUpdate("UPDATE Candidates set votes = votes - 1 WHERE candidate_id='"+id+"'");
			sta.close();
			conn.close();
		} catch (SQLException e){
			e.printStackTrace();
		}
	}
	public static void addVote(String id){
		DataBase.ensure();
		try{
			Connection conn = DataBase.getConnection();
			Statement sta = conn.createStatement();
			sta.executeUpdate("UPDATE Candidates set votes = votes + 1 WHERE candidate_id='"+id+"'");
			sta.close();
			conn.close();
		} catch (SQLException e){
			e.printStackTrace();
		}
	}
	public static String findCandidatesByParty(String party){
		DataBase.ensure();
		List<DBObject> candidatesByParty = new ArrayList<DBObject>();
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
				candidatesByParty.add(object);
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
		List<DBObject> candidatesByPartyAndRegion = new ArrayList<DBObject>();
		try {
			Connection conn = DataBase.getConnection();
			Statement sta = conn.createStatement();
			ResultSet rs = sta.executeQuery("SELECT * FROM Candidates WHERE party='"+party +"' AND county='"+region+"'");
			while(rs.next()){
				DBObject object = new DBObject();
				object.setFirstName(rs.getString("first_name"));
				object.setLastName(rs.getString("last_name"));
				object.setCandidateId(rs.getInt("candidate_id"));
				object.setId(rs.getString("id"));
				object.setParty(rs.getString("party"));
				object.setCounty(rs.getString("county"));
				candidatesByPartyAndRegion.add(object);
			}
			sta.close();
			conn.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return convertToJson(candidatesByPartyAndRegion);
		
	}
	public static String getEverything(){
		DataBase.ensure();
		List<DBObject> candidatesByPartyAndRegion = new ArrayList<DBObject>();
		try {
			Connection conn = DataBase.getConnection();
			Statement sta = conn.createStatement();
			ResultSet rs = sta.executeQuery("SELECT * FROM Candidates");
			while(rs.next()){
				DBObject object = new DBObject();
				object.setFirstName(rs.getString("first_name"));
				object.setLastName(rs.getString("last_name"));
				object.setCandidateId(rs.getInt("candidate_id"));
				object.setId(rs.getString("id"));
				object.setParty(rs.getString("party"));
				object.setCounty(rs.getString("county"));
				object.setVotes(rs.getString("votes"));
				candidatesByPartyAndRegion.add(object);
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
		List<DBObject> candidatesByRegion = new ArrayList<DBObject>();
		try {
			Connection conn = DataBase.getConnection();
			Statement sta = conn.createStatement();
			ResultSet rs = sta.executeQuery("SELECT * FROM Candidates WHERE county='"+region+"'");
			while(rs.next()){
				DBObject object = new DBObject();
				object.setFirstName(rs.getString("first_name"));
				object.setLastName(rs.getString("last_name"));
				object.setCandidateId(rs.getInt("candidate_id"));
				object.setId(rs.getString("id"));
				object.setParty(rs.getString("party"));
				object.setCounty(rs.getString("county"));
				candidatesByRegion.add(object);
			}
			sta.close();
			conn.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return convertToJson(candidatesByRegion);
	}
	public static String findCandidatesByName(String name){
		DataBase.ensure();
		List<DBObject> candidatesByRegion = new ArrayList<DBObject>();
		try {
				
			Connection conn = DataBase.getConnection();
			Statement sta = conn.createStatement();
			ResultSet rs = sta.executeQuery("SELECT * FROM Candidates WHERE first_name='"+name+"'");
			while(rs.next()){
				DBObject object = new DBObject();
				object.setFirstName(rs.getString("first_name"));
				object.setLastName(rs.getString("last_name"));
				object.setCandidateId(rs.getInt("candidate_id"));
				object.setId(rs.getString("id"));
				object.setParty(rs.getString("party"));
				object.setCounty(rs.getString("county"));
				candidatesByRegion.add(object);
			}
			sta.close();
			conn.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return convertToJson(candidatesByRegion);
	}
	public static void updateDB(String firstName, String lastName, String county, String party){
		DataBase.ensure();
		try{
			Connection conn = DataBase.getConnection();
			Statement sta = conn.createStatement();
			ResultSet rs = sta.executeQuery("SELECT * FROM Candidates WHERE first_name='"+firstName+"' AND last_name='"+lastName+"'");
			if(!rs.next()){
				sta.executeUpdate("INSERT INTO Candidates (first_name, last_name,party, county,votes) VALUES('"+firstName+"', '"+lastName+"','"+party+"', '"+county+"',0)");
			}
			sta.close();
			conn.close();
		} catch (SQLException e){
			e.printStackTrace();
		}
	}
	public static String convertToJson(List<DBObject> dataList){
		Gson gson = new GsonBuilder().setPrettyPrinting().create();
		String json = gson.toJson(dataList);
		return json;
	}
}