export const typing = () => {
  const text = document.querySelector(".trm-typed-text");

  const words = [
    "DevOps Engineer",
    "Cloud Engineer",
    "Web Developer",
    "Full Stack Developer",
    "CTF Player",
    "Penetration Tester",
    "Security Researcher",
    "Site Reliability Engineer",
    "Ethical Hacker",
    "UI/UX Designer",
    "Tech Enthusiast",
    "Fast Learner",
    "Problem Solver",
    "Bug Hunter",
    "DevSecOps Engineer",
    "Cloud Security Engineer"

  ];

  setTyper(text, words);

  function setTyper(element, words) {
    const LETTER_TYPE_DELAY = 100;
    const WORD_STAY_DELAY = 3000;

    const DIRECTION_FORWARDS = 0;
    const DIRECTION_BACKWARDS = 1;

    var direction = DIRECTION_FORWARDS;
    var wordIndex = 0;
    var letterIndex = 0;

    var wordTypeInterval;

    startTyping();

    function startTyping() {
      wordTypeInterval = setInterval(typeLetter, LETTER_TYPE_DELAY);
    }

    function typeLetter() {
      const word = words[wordIndex];

      if (direction == DIRECTION_FORWARDS) {
        letterIndex++;

        if (letterIndex == word.length) {
          direction = DIRECTION_BACKWARDS;
          clearInterval(wordTypeInterval);
          setTimeout(startTyping, WORD_STAY_DELAY);
        }
      } else if (direction == DIRECTION_BACKWARDS) {
        letterIndex--;

        if (letterIndex == 0) {
          nextWord();
        }
      }

      const textToType = word.substring(0, letterIndex);

      element.textContent = textToType;
    }

    function nextWord() {
      letterIndex = 0;
      direction = DIRECTION_FORWARDS;
      wordIndex++;

      if (wordIndex == words.length) {
        wordIndex = 0;
      }
    }
  }

  /*----------------------------------------------------------
------------------------------------------------------------

REINIT

------------------------------------------------------------
----------------------------------------------------------*/
  document.addEventListener("swup:contentReplaced", function () {
    const text = document.querySelector(".trm-typed-text");

    const words = [
      "DevOps Engineer",
      "Cloud Engineer",
      "Site Reliability Engineer",
      "Full Stack Developer",
      "Penetration Tester",
      "Security Researcher",
      "Ethical Hacker",
      "UI/UX Designer",
      "Tech Enthusiast",
      "Fast Learner",
      "Problem Solver",
      "Bug Hunter",
      "Web Developer",
      "CTF Player",
      "DevSecOps Engineer",
      "Cloud Security Engineer",
    ];

    setTyper(text, words);

    function setTyper(element, words) {
      const LETTER_TYPE_DELAY = 100;
      const WORD_STAY_DELAY = 3000;

      const DIRECTION_FORWARDS = 0;
      const DIRECTION_BACKWARDS = 1;

      var direction = DIRECTION_FORWARDS;
      var wordIndex = 0;
      var letterIndex = 0;

      var wordTypeInterval;

      startTyping();

      function startTyping() {
        wordTypeInterval = setInterval(typeLetter, LETTER_TYPE_DELAY);
      }

      function typeLetter() {
        const word = words[wordIndex];

        if (direction == DIRECTION_FORWARDS) {
          letterIndex++;

          if (letterIndex == word.length) {
            direction = DIRECTION_BACKWARDS;
            clearInterval(wordTypeInterval);
            setTimeout(startTyping, WORD_STAY_DELAY);
          }
        } else if (direction == DIRECTION_BACKWARDS) {
          letterIndex--;

          if (letterIndex == 0) {
            nextWord();
          }
        }

        const textToType = word.substring(0, letterIndex);

        element.textContent = textToType;
      }

      function nextWord() {
        letterIndex = 0;
        direction = DIRECTION_FORWARDS;
        wordIndex++;

        if (wordIndex == words.length) {
          wordIndex = 0;
        }
      }
    }
  });
};
