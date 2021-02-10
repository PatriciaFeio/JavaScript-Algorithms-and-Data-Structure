// complete a promise with resolve and reject

/* const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer represents a response from a server
    let responseFromServer;
      
    if(responseFromServer) {
      // Change this line
    } else {  
      // Change this line
    }
  }); */

  const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer represents a response from a server
    let responseFromServer;
      
    if(responseFromServer) {
      resolve('We got the data');
    } else {  
      reject('Data not received');
    }
  });