
const core = require('@actions/core');
const github = require('@actions/github');

try {
  const whoToGreet = core.getInput('who-to-greet');
  const time = new Date().toTimeString();

  core.setOutput('time', time);
  core.info(`Hello ${whoToGreet}!`);
  core.info(`Triggered by: ${github.context.actor}`);
} catch (error) {
  core.setFailed(error.message);
}
