function callAPI(search) {
    const dataSearch = {
        name: search.name,
        score: search.score
    }
    return new Promise((resolve, reject) => {
        const url = `http://localhost:3001/humans?name=${search.name}&score=${search.score}`
        // const url = `http://localhost:3001/humans?q=${search.name}`
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
