function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function performTask() {
  try {
    console.log('Task started');
    await delay(2000);
    console.log('Task completed');
  } catch (error) {
    console.error('Error:', error);
  }
}

performTask();
