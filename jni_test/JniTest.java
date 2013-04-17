public class JniTest 
{
		static
		{
				System.loadLibrary("Hello");
		}
		 
		public native JniTest output(); 
		 
		public static void main(String[] args)
		{
				System.out.println(System.getProperty("java.library.path")); 
				JniTest test = new JniTest();  
				        test.output();  
		}
}
