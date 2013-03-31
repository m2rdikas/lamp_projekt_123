package ut.veeb.lambiprojekt123;

import org.hsqldb.jdbc.JDBCDriver;

public class DataBase {
	public static final String DRIVER = "org.hsqldb.jdbc.JDBCDriver";
	public static JDBCDriver instance = null;
	public static final String PROTOCOL = "jdbc:hsqldb:mem:myDb";
	
	public synchronized static void ensure() {
		
	}
}
