import java.util.Random;
import java.util.Scanner;

public class Generator {

	public static void main(String[] args) {
		Random r = new Random();
		Scanner reader = new Scanner(System.in);
		System.out.println("Enter a boring, bland username: ");
		String username = reader.next();
		reader.close();
		
		username = username.replace("S", "5").replace("s", "5").replace("A", "4").replace("a", "4");
		username = username.replace("E", "3").replace("e", "3").replace("I", "1").replace("i", "1");
		username = username.replace("t", "7").replace("T", "7").replace("O", "0").replace("o", "0");
	username = username.toUpperCase();
		
	int rando = new Random().nextInt(4);
	if(rando == 0) 
		username = username + "69";
	else if(rando == 1)
		username = username + "42069";
	else if(rando == 2)
		username = "xXx" + username + "xXx";
	else if(rando == 3)
		username = username + "420";
	
		System.out.println(username);
				
	}
	
}
