function callAPI({ activePage, totalPage }) {
    return new Promise((resolve, reject) => {
        const url = `http://localhost:3001/humans?_page=${activePage}&_limit=${totalPage}`
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