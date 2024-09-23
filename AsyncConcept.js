
function getDataCallback(successCallback, failureCallback) {
    setTimeout(() => {
        const success = true;  
        if (success) {
            successCallback("Data received successfully!");
        } else {
            failureCallback("Error: Unable to fetch data.");
        }
    }, 1000);
}

getDataCallback(
    (message) => console.log(message), 
    (error) => console.log(error)     
);

//Promises
function getDataPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true;  
            if (success) {
                resolve("Data received successfully!");
            } else {
                reject("Error: Unable to fetch data.");
            }
        }, 1000);
    });
}

getDataPromise()
    .then((message) => console.log(message)) 
    .catch((error) => console.log(error));   


//Async Await
async function fetchDataAsync() {
        try {
            const result = await getDataPromise();
            console.log(result);
        } catch (error) {
            console.error(error);
        }
    }
    
    fetchDataAsync();
    