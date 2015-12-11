/*
*   Doron2402
*/
package jobinterview;

import java.util.*;
import java.io.*;

public class CheckPermutations {
    public static boolean isPermutation(String s1, String s2) {
        char[] a = s1.toCharArray();
        char[] b = s2.toCharArray();
        Arrays.sort(a);
        Arrays.sort(b);
        if (a.length != b.length) return false;
        for (int i = 0; i < a.length; i++) {
          if (a[i] != b[i]) return false;
        }
        return true;
    }
    public void runTests() {
        System.out.print("When running `abc` & `cba` : ");
        System.out.println(isPermutation("abc", "cba") ? "It is a permutation" : "It is not a permutation");
        System.out.print("When running `test` & `estt` : ");
        System.out.println(isPermutation("test", "estt") ? "It is a permutation" : "It is not a permutation");
        System.out.print("When running `testt` & `estt` : ");
        System.out.println(isPermutation("testt", "estt") ? "It is a permutation" : "It is not a permutation");
    }
}