const api = {};

api.people = async (id = null) => {
    let url = `https://swapi.dev/api/people${id ? "/" + id : ""}/?format=json`;
    let data = null;

    await fetch(url).then((response) => {
        data = response.json();
    });

    return data;
};

export { api };
