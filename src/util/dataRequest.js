const dataRequest = {
  search(filterType, searchPhrase) {
    const endPoint =
      "https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json";
    return fetch(endPoint)
      .then(res => res.json())
      .then(res => {
        const key = Object.keys(res);
        filterType = filterType.toLowerCase();
        if (filterType === "name") {
          searchPhrase = searchPhrase.toLowerCase();
          return res[key].filter(inhabitant =>
            inhabitant[filterType]
              .toLowerCase()
              .split(" ")
              .some(name => name.startsWith(searchPhrase))
          );
        } else if (filterType === "hair color") {
          searchPhrase = searchPhrase.toLowerCase();
          return res[key].filter(inhabitant =>
            inhabitant["hair_color"].toLowerCase().startsWith(searchPhrase)
          );
        } else {
          if (searchPhrase.includes("-")) {
            const border = searchPhrase.split("-");
            border.forEach(item => parseFloat(item));
            return res[key].filter(
              inhabitant =>
                Math.floor(inhabitant[filterType]) >= Math.min(...border) &&
                Math.floor(inhabitant[filterType]) <= Math.max(...border)
            );
          } else {
            searchPhrase = parseFloat(searchPhrase);
            return res[key].filter(inhabitant =>
              searchPhrase
                ? Math.floor(inhabitant[filterType]) === searchPhrase
                : true
            );
          }
        }
      })
      .catch(err => console.log(err));
  }
};

export default dataRequest;
