const { exec } = require("child_process");

const queueNames = process.argv[2].split(",");
queueNames.forEach((queue) => {
  exec(
    `awslocal sqs create-queue --queue-name ${queue} ${
      queue.includes(".fifo") ? `--attributes FifoQueue=true` : ""
    }`,
    (error, stdout, stderr) => {
      if (error) {
        console.log(`error: ${error.message}`);
        return;
      }
      if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
      }
      console.log(`stdout: ${stdout}`);
    }
  );
});
