const countdown = require('countdown-pkg');
const host = process.env.HOST;
const port = process.env.PORT;
const baseUrl = host + (port ? ':' + port : '');

const countdownCb = async () => {
  await fetch(baseUrl + '/api/recipes/newWinner');
  console.log('New winner set');
}

module.exports = {
    format_date: (date) => {
      // Format date as MM/DD/YYYY
      return date.toLocaleDateString();
    },
    countdown: async (date, time) => {
    try {
        countdown(date, time, countdownCb);
    } catch (error) {
        console.error('Error updating recipes or choosing random recipe:', error);
        return null;
    }
  }
};