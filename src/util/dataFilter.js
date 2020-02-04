const dataFilter = {
  getFiltered(data, filterType, searchPhrase) {
    if (filterType === "name") {
      searchPhrase = searchPhrase.toLowerCase();
      return data.filter(inhabitant =>
        inhabitant[filterType]
          .toLowerCase()
          .split(" ")
          .some(name => name.startsWith(searchPhrase))
      );
    } else if (filterType === "profession") {
      const arrOfProf = searchPhrase
        .toLowerCase()
        .split(",")
        .map(prof => prof.trim());
      return data.filter(inhabitant =>
        arrOfProf.every(profForSearch =>
          inhabitant["professions"].some(
            prof => prof.toLowerCase() === profForSearch
          )
        )
      );
    } else if (filterType === "hair color") {
      searchPhrase = searchPhrase.toLowerCase();
      return data.filter(inhabitant =>
        inhabitant["hair_color"].toLowerCase().startsWith(searchPhrase)
      );
    } else {
      const border = searchPhrase.split("-").map(item => parseFloat(item));
      return data.filter(
        inhabitant =>
          Math.floor(inhabitant[filterType]) >= Math.min(...border) &&
          Math.floor(inhabitant[filterType]) <= Math.max(...border)
      );
    }
  },
  getFriends(data, name) {
    const friends = [];
    friends.push(...data.filter(inhabitant => inhabitant.name === name));
    data
      .filter(inhabitant => inhabitant.name === name)[0]
      .friends.forEach(friendName => {
        const friend = data.filter(
          potentialFriend => potentialFriend.name === friendName
        );
        friends.push(...friend);
      });
    return friends;
  }
};

export default dataFilter;
