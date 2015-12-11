package jobinterview;

import java.util.*;
import java.io.*;


/**
 *
 * @author dsegal
 * IS Unique - find if string is unique chars
 */
public class IsUnique {

    public static boolean isUniqueUsingHash(String word) {
        char[] chars = word.toCharArray();
        Set<Character> set = new HashSet<Character>();
        for (char c : chars)
          if (set.contains(c))
            return false;
          else 
            set.add(c);
        return true;
      }

    public static boolean isUniqueUsingSort(String word) {
        char[] chars = word.toCharArray();
        if (chars.length <= 1) return true;
        Arrays.sort(chars);
        char temp = chars[0];
        for (int i = 1; i < chars.length; i++) {
          if (chars[i] == temp) return false;
          temp = chars[i];
        }
        return true;
    }
    
    public void runTests(){
        System.out.print("When running `Word`: ");
        System.out.println(isUniqueUsingHash("Word") ? "Unique" : "Not Unique"); 
        System.out.print("When running `Nootunique`: ");
        System.out.println(isUniqueUsingSort("Nootunique") ? "Unique" : "Not Unique"); 
    }
    
}