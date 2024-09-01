export const getDealershipsById = (data, id) => {
  return data.find((dealerships) => dealerships.id === Number(id));
}

export const getDealershipsByRaiting = (data, raiting) => {
  return data.find((dealerships) => dealerships.raiting === Number(raiting));
}

export const getDealershipsByCity = (data, city) => {
  return data.find((dealerships) => dealerships.city === Number(city));
}