function filterApiData(apiData, mandatoryKeys) {
  const data = apiData;
  // const filteredData = filterApiData(data, ["id"]);
  let resultArr = [];
  let check;

  console.log("test" + apiData[2]["id"]);

  for (let i = 0; i < mandatoryKeys.length; i++) {
    check = mandatoryKeys[i];
    console.log(check);
    for (let j = 0; j < apiData.length; j++) {
      if (apiData[j].hasOwnProperty(check)) {
        resultArr.push(apiData[j]);
      }
    }
  }

  return resultArr;
}
