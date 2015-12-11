package jobinterview;

/**
 *
 * @author dsegal
 * Add without plus using Bitwise and Bit Shift Operators
 */
public class AddWithoutPlus {
    public static int add(int a, int b) {
        if (b > a) {
            int temp = b;
            b = a;
            a = temp;
        }
        int carry = 0;
        while (b != 0) {
            carry = a & b;
            a = a ^ b;
            b = carry << 1;
        }
        return a;   
    }

    public static int recursiveAdd(int a, int b) {
        if (b == 0)
            return a;
        else
            return recursiveAdd(a ^ b, (a & b) << 1);
    }
    
    public void runTests(){
        System.out.println("Add without Plus");
        int a = 100;
        int b = 300;
//        System.out.println(a ^ b);
//        System.out.println(a & b);
//        System.out.println((a & b) << 1);
        System.out.println(add(a, b));
        System.out.println(recursiveAdd(b, a));
    }
}
