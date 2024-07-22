const button = document.querySelector('#my-button');

const runContest = async () => {
    try {
        const response = await fetch('http://localhost:3001/api/tests/count');
        const data = await response.json();
        console.log('Response from API:', data);
        // You can handle the response data here
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

button.addEventListener('click', async () => {
    try {
        await runContest();
    } catch (error) {
        console.error('Error running contest:', error);
    }
});
