// program executed through command line
console.log('Welcome to Holberton School, what is your name?');

process.stdin.once('data', (data) => {
  const name = data.toString();
  console.log('Your name is:', name);
  console.log('This important software is now closing');
  process.exit();
});
