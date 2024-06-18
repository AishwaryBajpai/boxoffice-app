const BASE_URL = 'https://api.tvmaze.com';

const apiGet = async (queryString) => {
  const result = await fetch(`${BASE_URL}${queryString}`);

  const response = await result.json();

  return response;
};

export const searchForShows = query => apiGet(`/search/shows?q=${query}`);

export const searchForPeople = query => apiGet(`/search/people?q=${query}`);