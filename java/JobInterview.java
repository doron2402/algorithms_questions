package jobinterview;

/**
 *
 * @author Doron2402
 * 
 */
public class JobInterview {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // is unique
        System.out.println("IsUnique:");
        IsUnique isUnique = new IsUnique();
        isUnique.runTests();
        
        //Check Premutations
        System.out.println("Check Premutations:");
        CheckPermutations premutations = new CheckPermutations();
        premutations.runTests();
        
        //URLify
        URLify urlify = new URLify();
        urlify.runTests();
        
        //SumLists
        SumLists sumLists = new SumLists();
        sumLists.runTests();
        
        //Add without Plus
        AddWithoutPlus addWithoutPlus = new AddWithoutPlus();
        addWithoutPlus.runTests();
    }
    
}
