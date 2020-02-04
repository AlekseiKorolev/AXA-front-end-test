const dataRequest = {
  getData() {
    const endPoint =
      "https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json";
    return fetch(endPoint).then(res => res.json());
  }
};

export default dataRequest;
