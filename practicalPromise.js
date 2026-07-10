const yourPromise = new Promise((resolve,reject)=>{
    fetch ("https://jsonplaceholder.typicode.com/posts/2")
        .then((response) => {
            //check if the network requests was successful
            if (!response.ok) {
                reject("Network was not ok");
            }
            return response.json(); //convert response to json
        })
        .then ((data) => {
            resolve(data); //successfully return the data
        })
        .catch((error) => {
            reject(error); //Handle any network or parsing errors
        });
});

yourPromise
    .then((data) => console.log("fetched data: ",data))
    .then((err) => console.log("Error: ",err));