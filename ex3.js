function performAsyncOperation1(){
    return new Promise(resolve=>resolve("Async Operation 1"))
}
function performAsyncOperation2(){
    return new Promise(resolve=>resolve("Async Operation 2"))
}
function performAsyncOperation3(){
    return new Promise(resolve=>resolve("Async Operation 3"))
}



async function performOperations() {
  try {
    const result1 = await performAsyncOperation1();
    console.log(result1);

    const result2 = await performAsyncOperation2();
    console.log(result2);

    const result3 = await performAsyncOperation3();
    console.log(result3);
  } catch (error) {
    console.error('Error:', error);
  }
}

performOperations();
