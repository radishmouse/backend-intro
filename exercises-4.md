# Rhyming replacer

Warning: this is even more ridiculous than the previous three exercises.

Feel free to skip this one if your threhold for the ridiculous is low.

Create a new branch on your emoji-replacer program.

`npm install` the `rhymes` package

If your `findEmoji` function cannot find a replacement for a word, call the `rhymes()` function (provided by the `rhymes` module).

This should give you an array of objects consisting of a `.word` and a `.score`.

Return the rhyming word with the highest score.

Alternatively, search MDN for a function that generates a random number. Use the random number get choose a random object from the array of rhymes.