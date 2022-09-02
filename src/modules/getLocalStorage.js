// GET ARRAY FROM LOCAL STORAGE --------
const getLocalStorage = () => {
  let arr = JSON.parse(localStorage.getItem('taskListArr'));
  if (arr === null) {
    arr = [];
  }
  return arr;
};

export default getLocalStorage;
