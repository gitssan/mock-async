export const asyncRequest = (value: number) => {
  return new Promise(function (resolve) {
    setTimeout(function () {
      const returnValue: number = value + 1;
      console.log(returnValue);
      resolve({ originalValue: value, returnValue });
    }, 1000);
  });
};
