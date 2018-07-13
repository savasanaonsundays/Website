const isEmpty = value =>//BELOW A CHECK TO SEE IF THINGS ARE EMPTY / A GOLOBAL METHOD TO CHECK IF EMPTY 
  //ALL THE DIFFERENT POSSIBLE WAYS SOMETHING CAN BE EMPTY 
  value === undefined ||
  value === null ||
  (typeof value === 'object' && Object.keys(value).length === 0) || //CHECK FOR EMPTY OBJECT 
  (typeof value === 'string' && value.trim().length === 0);//CHECK FOR EMPTY STRING

module.exports = isEmpty;//EXPORTING IT SO WE CAN USE IT
