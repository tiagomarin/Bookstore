// SAVE ARRAY AS STRING TO LOCAL STORAGE --------

const saveInLocalStorage = (arr) => {
  localStorage.setItem('taskListArr', JSON.stringify(arr));
};

export default saveInLocalStorage;
