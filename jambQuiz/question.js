function Question(text, choice, answer) {this.text = text;
this.choice = choice;
this.answer = answer}

Question.prototype.correctAnswer = function(input){return input === this.answer}

var obj1 = new Question