const { spawn} = require("child_process");

// Starts localstack
const startLocalstack = spawn("localstack", ["start"]);

startLocalstack.stdout.on("data", data => {
  console.log(`stdout: ${data}`);
});

startLocalstack.stderr.on("data", data => {
  console.log(`stderr: ${data}`);
});

startLocalstack.on('error', (error) => {
  console.log(`error: ${error.message}`);
});

startLocalstack.on("close", code => {
  console.log(`child process exited with code ${code}`);
});