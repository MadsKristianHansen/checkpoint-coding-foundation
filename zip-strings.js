function zipStrings(strA, strB) {
  const strAArray = strA.split("");
  const strBArray = strB.split("");
  let result = "";
  let comparisonLength;

  if (strAArray.length >= strBArray.length) {
    comparisonLength = strAArray.length;
  } else {
    comparisonLength = strBArray.length;
  }

  for (let i = 0; i < comparisonLength; i++) {
    if (strAArray[i] === undefined || strAArray[i] === "") {
      result += strBArray[i];
    } else if (strBArray[i] === undefined || strBArray[i] === "") {
      result += strAArray[i];
    } else {
      result += strAArray[i] + strBArray[i];
    }
  }

  return result;
}
