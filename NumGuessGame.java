import javax.swing.JOptionPane;
import aanubis.*;
public class NumGuessGame {
    public static void main(String[] args) {
        String guess = "";
        int counter = 0;
        int target = 0;
        String max = JOptionPane.showInputDialog("Enter the maximum number");

        while (!Amath.isNum(max) || (int) Double.parseDouble(max) < 10 || !Amath.isInt(max)) {
            if (max.toLowerCase().contains("stop")) {
                guess = "quit";
                max = "quit";
                break;
            }

            max = JOptionPane.showInputDialog("Enter a valid number! Maximum number must be larger than 9 !");
        }

        // game
        if (!max.equals("quit")) {
            target = (int) Math.floor(Math.random() * Integer.parseInt(max)) + 1;
            System.out.println(target);
            guess = JOptionPane.showInputDialog("Enter your first guess!");
            boolean checkIfWon = false;
            while (checkIfWon == false) {
                counter++;
                if (!Amath.isNum(guess)) {
                    if (guess.contains("stop")) {
                        guess = "quit";
                        break;
                    } else {
                        guess = JOptionPane.showInputDialog(
                                "Not a valid number! Enter your guess again! No. of guesses made: " + counter);
                    }
                } else if (Amath.isInt(guess)) {
                    if (Integer.parseInt(guess) > target) {
                        guess = JOptionPane.showInputDialog(
                                "Too high! Enter your guess again! No. of guesses made: " + counter);
                    } else if (Integer.parseInt(guess) < target) {
                        guess = JOptionPane.showInputDialog(
                                "Too low! Enter your guess again! No. of guesses made: " + counter);
                    } else {
                        checkIfWon = true;
                    }
                } else {
                    guess = JOptionPane.showInputDialog(
                            "Not a valid number! Enter your guess again! No. of guesses made: " + counter);
                }
            }

        }

        if (guess == "quit" || max == "quit") {
            JOptionPane.showMessageDialog(null, "Thank you for playing!");
        } else {
            JOptionPane.showMessageDialog(null,
                    "You won! The number is indeed " + target + "! You've made " + counter + " guesses.");
        }
        
        
    }
}
