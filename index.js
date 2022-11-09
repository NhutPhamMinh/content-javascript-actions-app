const core = require('@actions/core');
const github = require('@actions/github');

try {
    // get input parameter from action.yml
    const nameToGreet = core.getInput('who-to-greet');
    console.log(`input param from main.yml: ${nameToGreet}!`);

    // set output parameter
    const time = (new Date()).toTimeString();
    core.setOutput("time", time);
    
    console.log(`Application is running: ${time}`);
} catch (error) {
    console.log(error.message);
}