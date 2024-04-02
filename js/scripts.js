// Utility Logic
function isEmpty(testString) {
  return (testString.trim().length === 0);
}

// Business Logic
function wordCounter(text) {
  if (isEmpty(text)) {
    return 0;
  }
  let wordCount = 0;
  const textArray = text.split(" ");
  textArray.forEach(function (element) {
    if (!Number(element)) {
      wordCount++;
    }
  });
  return wordCount;
}

function numberOfOccurrencesInText(word, text) {
  if (isEmpty(word)) {
    return 0;
  }
  const textArray = text.split(" ");
  let wordCount = 0;
  textArray.forEach(function (element) {
    if (element.toLowerCase().includes(word.toLowerCase())) {
      wordCount++
    }
  });
  return wordCount;
}

function OmitOffensiveWords(text) {
  const offensiveWordArray = ["zoinks", "muppeteer", "biffaroni", "loopdaloop"];
  let textArray = text.split(" ");
  let resultArray = [];
  let isOffensive;
  textArray.forEach(function (element) {
    isOffensive = false;
    offensiveWordArray.forEach(function (offensiveWord) {
      if (element.toLowerCase() === offensiveWord.toLowerCase()) {
        isOffensive = true;
      }
    });
    if (!isOffensive) {
      resultArray.push(element);
    }
  });
  return resultArray.join(" ");
}

function wordsCounter(text) {
  let textArray = text.toLowerCase().split(" ");
  let resultArray = [];
  textArray.sort();
  let previousWord;
  textArray.forEach(function (element) {
    if (!isEmpty(element)) {
      if (element !== previousWord) {
        previousWord = element;
        resultArray.push([element, 1]);
      } else {
        resultArray[resultArray.length - 1][1] += 1;
      }
    }
  });

  resultArray.sort((a, b) => b[1] - a[1]);

  return resultArray;
}

function createArrayOfSubstrings(textWord, word) {
  let resultArray = [];
  while (textWord !== "") {
    let index = textWord.toLowerCase().indexOf(word.toLowerCase());
    if (index !== -1) {
      if (index !== 0) {
        resultArray.push(textWord.substring(0, index));
        resultArray.push(textWord.substring(index, index + word.length));
      } else {
        resultArray.push(textWord.substring(index, index + word.length));
      }
      textWord = textWord.substring(index + word.length);
    }
    else {
      resultArray.push(textWord);
      textWord = "";
    }

  }

  return resultArray;
}

//UI Logic
function boldPassage(word, text) {
  if ((isEmpty(word)) || isEmpty(text)) {
    return null;
  }
  const p = document.createElement("p");
  let textArray = text.split(" ");
  textArray.forEach(function (element, index) {
    if (word.toLowerCase() === element.toLowerCase()) {
      const bold = document.createElement("strong");
      bold.append(element);
      p.append(bold);
    } else {
      p.append(element);
    }
    if (index !== (textArray.length - 1)) {
      p.append(" ");
    }
  });
  return p;
}

function boldText(word, text) {
  if ((isEmpty(word)) || isEmpty(text)) {
    return null;
  }
  const p = document.createElement("p");
  let textArray = text.split(" ");
  textArray.forEach(function (element, index) {
    if (element.toLowerCase().includes(word.toLowerCase())) {
      let arrayOfSubstrings = [];
      arrayOfSubstrings = createArrayOfSubstrings(element, word);
      arrayOfSubstrings.forEach(function (substring) {
        if (word.toLowerCase() === substring.toLowerCase()) {
          const bold = document.createElement("strong");
          bold.append(substring);
          p.append(bold);
        } else {
          p.append(substring);
        }
      });
    } else {
      p.append(element);
    }
    if (index !== (textArray.length - 1)) {
      p.append(" ");
    }
  });
  return p;
}

function displayWordsResult(arrayResult) {
  const resultDiv = document.createElement("div");
  arrayResult.forEach(function (element) {
    const p = document.createElement("p");
    p.append(element[0] + " " + element[1]);
    resultDiv.append(p);
  })
  return resultDiv;
}


function handleFormSubmission(e) {
  e.preventDefault();
  const passage = document.getElementById("text-passage").value;
  const word = document.getElementById("word").value;
  const wordCount = wordCounter(passage);
  const occurrencesOfWord = numberOfOccurrencesInText(word, passage);
  const cleanText = OmitOffensiveWords(passage);
  document.getElementById("total-count").innerText = wordCount;
  document.getElementById("selected-count").innerText = occurrencesOfWord;
  document.getElementById("clean-text").innerText = cleanText;
  document.querySelector("div#bolded-text").innerText = null;
  document.querySelector("div#bolded-passage").innerText = null
  let boldedPassage = boldPassage(word, passage);
  if (boldedPassage) {
    document.querySelector("div#bolded-passage").append(boldedPassage);
  } else {
    document.querySelector("div#bolded-passage").innerText = null;
  }

  let boldedText = boldText(word, passage);
  if (boldedText) {
    document.querySelector("div#bolded-text").append(boldedText);
  } else {
    document.querySelector("div#bolded-text").innerText = null;
  }

  const wordsCount = wordsCounter(passage);
  document.getElementById("words-counter").innerHTML = "";
  document.getElementById("words-counter").append(displayWordsResult(wordsCount));
}

window.addEventListener("load", function () {
  document.querySelector("form#word-counter").addEventListener("submit", handleFormSubmission);
});