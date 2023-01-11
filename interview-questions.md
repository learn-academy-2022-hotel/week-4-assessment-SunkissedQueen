# ASSESSMENT 4: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is object-oriented programming? How is it different than functional programming?
From Developer Moss
Your answer: Object-oriented programming (sometimes abbreviated to OOP) is a programming style that, as stated in the name, is based largely if not entirely around objects. This means that everything you work with is an instance of a class, rather than with logic based in functions like other programming styles. Ruby is an object-oriented programming language, and even the logic stored in methods relies on objects.
Researched answer: Object-oriented programming (OOP) is a model of computer programming that is designed around objects rather than functionality. An object is data that has unique attributes and behavior, meaning that everything you work with in an OOP language is an instance of a class. This allows the code to be more dynamic and reusable compared to functional programming, which relies more on functionality and logic and is not as intuitive or efficient.

More content to add: Give examples, possibly share the animal kingdom challenge

2. What is the difference between a Float and an Integer in Ruby?
From Developer Fred
Your answer: Integer and Float are two distinct types of data in Ruby. Where some programming languages, such as JavaScript, make all numbers a single type of data, while in Ruby, if you do not specify a decimal in the data type, it will be defined as an Integer. If you utilize a decimal point in Ruby, you are declaring that to be a FLoat data type, which is a separate and different data type with its own rules and behaviour.

Researched answer: One thing I found in my research is that there is a function that will allow an integer data type to be re-assigned a s a float data type. The to_f function will attempt to convert an integer into a float,; if it cannot be done, then it will return infinity.


3. Ruby has an implicit return. What does that mean?
From Developer Lea
Your answer: An implicit return means returns are given even when it explicitly stated in method

Researched answer: In Ruby, an implicit return is the rule that if return is to be executed in the last line of code, the return keyword is not needed. This is helpful because it cuts down on code. One of the many examples of how Ruby is human-centered.

More content to add: examples with and without an return and give its output

4. What is a block in Ruby?
From Developer Natally
Your answer:
A block in Ruby refers to anonymous function you can use to code.

Researched answer:
A Ruby block is a way of being able to copy code into a variable. Ruby blocks is essentially the same thing as a method, except it doesn't belong to an object. Blocks are inclosed in a do-end statement and curly braces. Now, Ruby blocks are incredible in the sense that they allow you to group code into a standalone unit that you can see as an argument.
Something that I found interesting about Ruby blocks , is that blocks can have arguments which should be defined between two pipes / characters, and that any method can receive a block, whether it uses it or not. Here you can see an example of a Ruby block.
Example:
def my_name (name)
    puts name
end

More content: example with do/end block, share a problem from challenge

5. How do you extract a value in a Ruby hash?

Your answer: From Developer Oscar

Researched answer: Ruby hashes are made up of key value pairs since its based on OOP. You extract the value of a ruby hash by using the put and referencing the key you are trying to extract the value from. For example lets say I created a hash with some information for myself, the hash is named person and inside that hash I have key value pairs for my first and last name so it looks like person = {first_name: 'Oscar', last_name: 'Gomez'}, I would be able extract the information by p person[:first_name] and that would return  "Oscar". If you are trying to access a key that hasn't been created it will return a default value.

## Looking Ahead: Terms for Next Week

1. Class Inheritance: passing properties from a parent class to child class

2. RSpec: ruby specifications, testing framework for Ruby

3. CRUD: Create Read Update Delete, developer philosophy 

4. Test-driven development: evaluate code for correctness, allow other developers to understand the purpose of the code

5. HTTP: hyper text transfer protocol, responsible for allowing the response and request cycle data exchange
