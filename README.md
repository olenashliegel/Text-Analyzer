Describe: wordCounter()

Test: "It should return 1 if a passage has just one word."
Code:
const text = "hello";
wordCounter(text);
Expected Output: 1

Test: "It should return 2 if a passage has two words."
Code:
const text = "hello there";
wordCounter(text);
Expected Output: 2

Test: "It should return 0 for an empty string."
Code: 
const text = "";
wordCounter(text);
Expected Output: 0

Test: "It should return 0 for a string that is only spaces."
Code: 
const text = "          ";
wordCounter(text);
Expected Output: 0


Describe: numberOfOccurrencesInText()

Test: "It should return 0 occurrences of a word for an empty string."
Code:
const text = "";
const word = "red";
numberOfOccurrencesInText(word, text);
Expected Output: 0

Test: "It should return 1 occurrence of a word when the word and the text are the same."
Code:
const text = "red";
const word = "red";
numberOfOccurrencesInText(word, text);
Expected Output: 1

Test: "It should return 0 occurrences of a word when the word and the text are different."
Code:
const text = "red";
const word = "blue";
numberOfOccurrencesInText(word, text);
Expected Output: 0

Test: "It should return the number of occurrences of a word."
Code:
const text = "red blue red red red green";
const word = "red";
numberOfOccurrencesInText(word, text);
Expected Output: 4

Test: "It should return a word match regardless of case."
Code:
const text = "red RED Red green Green GREEN";
const word = "Red";
numberOfOccurrencesInText(word, text);
Expected Output: 3

Test: "It should return a word match regardless of punctuation."
Code:
const text = "Red! Red. I like red, green, and yellow.";
const word = "Red";
numberOfOccurrencesInText(word, text);
Expected Output: 3

Test: "If an empty string is passed in as a word, it should return 0."
Code:
const word = "";
const text = "red RED Red!";
numberOfOccurrencesInText(word, text);
Expected Output: 0


Describe: OmitOffensiveWords()

Test: "It should return an empty string if text is empty"
Code:
const text = "";
OmitOffensiveWords(text);
Expected Output: ""

Test: "It should return the same text if there are not offensive words in text"
Code:
const text = "There is a good weather today";
OmitOffensiveWords(text);
Expected Output: "There is a good weather today"

Test: "It should delete word zoinks from text"
Code:
const text = "There is a good zoinks weather today";
OmitOffensiveWords(text);
Expected Output: "There is a good weather today"

Test: "It should delete word zoinks from text regardless of case"
Code:
const text = "There is a good ZoInks weather today";
OmitOffensiveWords(text);
Expected Output: "There is a good weather today"

Test: "It should delete all offensive words (zoinks, muppeteer, biffaroni, loopdaloop) from text regardless of case"
Code:
const text = "There is a biffaroni good ZoInks weather muppeteer today loopdaloop";
OmitOffensiveWords(text);
Expected Output: "There is a good weather today"


Describe: boldPassage()

Test: "It should return null if no word or text is entered."
Code:
const text = "";
const word = "";
boldPassage(word, text);
Expected Output: null

Test: "It should return a non-matching word in a p tag."
Code:
const word = "hello";
const text = "yo";
boldPassage(word, text);
Expected Output: <p>yo</p>

Test: "It should return a matching word in a strong tag."
Code:
const word = "hello";
const text = "hello";
boldPassage(word, text);
Expected Output: <p><strong>hello</strong></p>

Test: "It should wrap words that match in strong tags but not words that don't."
Code:
const word = "hello";
const text = "hello there";
boldPassage(word, text);
Expected Output: <p><strong>hello</strong> there</p>

Describe: WordsCounter()

Test: "It should return a word and number 1 in array if a passage has just one word."
Code:
const text = "hello";
wordCounter(text);
Expected Output: ["hello", 1]

Test: "It should return a word and number of occurrences of this word in array if a passage has two equal words."
Code:
const text = "hello hello";
wordCounter(text);
Expected Output: ["hello", 2]

Test: "It should return array of words and number of occurrences of these words in array."
Code:
const text = "hello hi hello hi hi";
wordCounter(text);
Expected Output: [["hello", 2], ["hi", 3]]

Test: "It should return array of words and number of occurrences of these words in array regardless of case."
Code:
const text = "hello Hi hello hi hi";
wordCounter(text);
Expected Output: [["hello", 2], ["hi", 3]]

Test: "It should return sorted array of words in order the most common."
Code:
const text = "hello Hi hello hi hi";
wordCounter(text);
Expected Output: [["hi", 3] ["hello", 2]]