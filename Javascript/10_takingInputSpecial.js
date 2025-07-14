process.stdout.write("Enter something: ");

process.stdin.on("data", function (data) {
  var noOfBits = parseInt(data.toString().trim());
  //code you want to execute
  process.exit();
});

// because it you write code below stdin then both of them are executed at same time hence you may get some thing like Enter something: 'code/function you want to execute' then it will aske you for input
