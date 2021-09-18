const greetings = ["hello", "how are you?", "whats your name", "whats up!", "bro"];

const randomGreeting = () => {
  let greeting = greetings[Math.floor(Math.random() * greetings.length)];

  console.log(greeting);
};

module.exports = { randomGreeting };
