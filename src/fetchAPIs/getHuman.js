/**
* File dinh nghia API lay du lieu tu Backend
*/
function callAPI() {
    return new Promise((resolve, reject) => {
        const url = 'http://localhost:3001/humans'
        fetch(url, {
            method: 'GET'
        })
            .then((response) => response.json())
            .then((res) => {
                resolve(res);
            })
            .catch((error) => {
                reject(error);
            });
    });
}
export default callAPI;
