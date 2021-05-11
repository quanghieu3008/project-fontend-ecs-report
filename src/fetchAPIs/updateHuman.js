function callAPI(human) {
    return new Promise((resolve, reject) => {
        const url = 'http://localhost:3001/humans/' + human.id
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(human)
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
