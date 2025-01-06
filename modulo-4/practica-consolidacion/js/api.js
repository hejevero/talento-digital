const api = {};

api.people = async (id = null) => {
    try {
        let url = `https://swapi.tech/api/people${id ? "/" + id : ""}/?format=json`;
        let data = null;

        await fetch(url).then((response) => {
            data = response.json();
        });

        return data;
    } catch (error) {
        return false;
    }
};

export { api };
