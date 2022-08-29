import javax.swing.JOptionPane;

// Game đoán số từ 0-100!
// Luật chơi: 
// - Máy sẽ tạo một số (target) bất kỳ từ 0-100, và bạn phải đoán trúng số để thắng!
// - Mỗi lượt đoán số sai thì máy sẽ gợi ý là số mà bạn đoán cao hơn hay thấp hơn số target
// - Nếu thắng game, game sẽ chúc mừng bạn và hiển thị tổng số lượt bạn đã đoán để đoán trúng số target

// Phím tắt:
// - Bắt đầu game: CTRL ALT N
// Ket thuc: nhap "stop"

public class game {
    public static void main(String[] args) {
        int counter = 0;
        int goal = (int) (Math.random() * 100);
        // System.out.println(goal);
        String guess = JOptionPane
                .showInputDialog("Guess the randomly generated number! Enter your guess from 0-100");
        boolean checkIfWon = false;
        while (checkIfWon == false) {
            if (counter == 0) {
                boolean isNumber = true;
                for (int i = 0; i < guess.length(); i++) {
                    if (!Character.isDigit(guess.charAt(i))) {
                        isNumber = false;
                        break;
                    }
                }
                if (isNumber == true) {
                    int guessNum = Integer.parseInt(guess);
                    if (guessNum < goal) {
                        counter++;
                        JOptionPane.showMessageDialog(null, "Too low!");
                        continue;
                    } else if (guessNum > goal) {
                        counter++;
                        JOptionPane.showMessageDialog(null, "Too high!");
                        continue;
                    } else {
                        counter++;
                        JOptionPane.showMessageDialog(null, "You Won! Total number of guesses: " + counter);
                        return;
                    }
                } else if (guess.toLowerCase().contains("stop")) {
                    JOptionPane.showMessageDialog(null, "Thank you for playing!");
                    return;
                } else if (guess.equals("")) {
                    counter++;
                    JOptionPane.showMessageDialog(null, "Not a Number!");
                    continue;
                } else {
                    counter++;
                    JOptionPane.showMessageDialog(null, "Not a Number!");
                    continue;
                }
            } else {
                guess = JOptionPane
                        .showInputDialog("Guess the randomly generated number! Enter your guess from 0-100");
                boolean isNumber = true;
                for (int i = 0; i < guess.length(); i++) {
                    if (!Character.isDigit(guess.charAt(i))) {
                        isNumber = false;
                        break;
                    }
                }
                if (isNumber == true) {
                    int guessNum = Integer.parseInt(guess);
                    if (guessNum < goal) {
                        JOptionPane.showMessageDialog(null, "Too low!");
                        counter++;
                        continue;
                    } else if (guessNum > goal) {
                        JOptionPane.showMessageDialog(null, "Too high!");
                        counter++;
                        continue;
                    } else {
                        counter++;
                        JOptionPane.showMessageDialog(null, "You Won! Total number of guesses: " + counter);
                        return;
                    }
                } else if (guess.toLowerCase().contains("stop")) {
                    JOptionPane.showMessageDialog(null, "Thank you for playing!");
                    return;
                } else if (guess.equals("")) {
                    counter++;
                    JOptionPane.showMessageDialog(null, "Not a Number!");
                    continue;
                } else {
                    counter++;
                    JOptionPane.showMessageDialog(null, "Not a Number!");
                    continue;
                }
            }

        }
    }
}