const apiUrl = "https://jsonplaceholder.typicode.com/users";

function getApi () {
    return fetch(apiUrl, {
        method:"GET",
        headers: {
            "Content-Type" : "application/json",
        }
    }).then(response => response.json())
    .catch(error => {throw error});
}