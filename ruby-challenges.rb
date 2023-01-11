# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.
num1 = 7
# Expected output: '7 is odd'
num2 = 42
# Expected output: '42 is even'
num3 = 221
# Expected output: '221 is odd'

# From Developer Torin
# PSEUDOCODE:
# Create a method named even_odd
# INPUT: Integer
# OUTPUT: String containing Integer
# PROCESS: Create a parameter "val" that takes the num variable as an argument 
# Use a conditional statement
# Calculate using modulo to determine even or odd value of the integer
# Use string interpolation to output the result
# Call the method
def even_odd val
  if val % 2 == 0
    p "#{val} is even"
  else
    p "#{val} is odd"
  end
end
even_odd(num1) 
# output: "7 is odd"
even_odd(num2)
# output: "42 is even"
even_odd(num3)
# output: "221 is odd"


# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

beatles_album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
beatles_album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
beatles_album3 = 'Abbey Road'
# Expected output: 'bby Rd'

# From Developer Ney
# psuedo code:
# input: "string"
# output:"strng" (removes vowles)
# view resource given 
# use .delete aeiou
# create method
# run variables through method


def vowels_eater(word)
  word.delete "aeiou"
end
p vowels_eater(beatles_album1)

# NOTE: Remember to test all the variables
  # p vowels_eater(beatles_album2)
  # Output: "Sgt Pppr"
  # p vowels_eater(beatles_album3)
  # Output: "Abby Rd" ---> not expected outcome because current method does not cover capital letters
  # Solution: one approach is to modify the argument for the delete method to include capital vowels


# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

palindrome_tester1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_tester2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_tester3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

# From Developer Raymond
def palindrome_check(palindrome)
  if palindrome.reverse == palindrome
      "#{palindrome} is  a palindrome"
  else
      "#{palindrome} is not a palindrome"
  end
end
p palindrome_check(palindrome_tester1)
p palindrome_check(palindrome_tester2)
p palindrome_check(palindrome_tester3)

# NOTE: ensure you are checking that the actual output is the same as the expected output
  # p palindrome_check(palindrome_tester1)
  # Output: "Racecar is not a palindrome" ---> not the expected output because the method is not checking for capital letters. Racecar is not exactly the same as racecaR; the capital letter is at the beginning on the first word and then at the end on the second word. Therefore, it will not be recognized as the same values. 
  # Solution: one approach is to use a ruby method to make all characters in the parameter either uppercase or lowercase

  # p palindrome_check(palindrome_tester2)
  # Output: "LEARN is not a palindrome"

  # p palindrome_check(palindrome_tester3)
  # Output: "Rotator is not a palindrome" ---> not the expected output because the method is not checking for capital letters.