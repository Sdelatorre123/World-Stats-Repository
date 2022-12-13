// Using sportdataapi for matches
export const findMatch = (query) => {
    return fetch(`https://app.sportdataapi.com/api/v1/soccer/teams?apikey=e558c5c0-769c-11ed-9c99-75e00b9c52e1&country_id=48`);
};
