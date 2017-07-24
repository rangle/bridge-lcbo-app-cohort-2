export const GET_API_RESULTS = 'GET_API_RESULTS';
export const SEND_API_RESULTS = 'SEND_API_RESULTS';



export const getAPIResults = (searchString) => {
  //goes to the epic
  console.log(8, 'getAPIResults: searchString', searchString)
  return ({
  type: GET_API_RESULTS,
  payload: searchString
})};


export const sendAPIResults = (productsList) => {

  return ({
  type: SEND_API_RESULTS,
  payload: productsList
})
};
