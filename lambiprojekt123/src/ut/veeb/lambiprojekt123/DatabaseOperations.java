package ut.veeb.lambiprojekt123;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

public class DatabaseOperations {
	
	public List<String> findCandidatesByParty(String party){
		DataBase.ensure();
		List<String> candidatesByParty = new ArrayList<String>();
		try {
			Connection conn = DataBase.getConnection();
			Statement sta = conn.createStatement();
			ResultSet rs = sta.executeQuery("SELECT * FROM Candidates WHERE party='"+party+"'");
			while(rs.next()){
				candidatesByParty.add(rs.getString("first_name") +";"+rs.getString("last_name"));
			}
			sta.close();
			conn.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return candidatesByParty;
		
	}
	public List<String> findCandidatesByPartyAndRegion(String party, String region){
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
		return candidatesByPartyAndRegion;
		
	}
	public List<String> findCandidatesByRegion(String region){
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
		return candidatesByRegion;
	}
	public void updateDB(){
		
	}
}
