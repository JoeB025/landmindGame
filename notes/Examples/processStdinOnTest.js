process.stdin.on('data', data => { 
  console.log(`You typed ${data.toString()}`); 
  process.exit(); 
});


// log to ask user to type something in the console.  
console.log('Please type something and then press Enter');


// Instructions:  
// Go to the file directory as normal and key in node nameOfFile
// A prompt for you should appear to type something in. 
// The input will then log in the console with the message 'You typed yourInput'
// All input will be returned as a string
// The function will then exit the program


// Note: I have never used process.stdin.on before so I included this to demonstrate my method of learning
// and how I went from this simple test / example to incorporating it into the game.
// I opted to use this method as it allows a user to play the game through the console
