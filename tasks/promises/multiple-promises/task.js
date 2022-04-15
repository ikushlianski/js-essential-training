/**
 * Task
 *
 * Return multiple names from the "server" in one request. The result should be ["John", "Kevin", "Albert"]
 */

function serverResponse(id) {
  const response = {
    1: 'John',
    2: 'Kevin',
    3: 'Albert',
  };

  return new Promise((resolve, reject) => {
    if (response[id]) {
      resolve({name: response[id]});
    } else {
      reject({error: new Error('No such id')});
    }
  });
}

// this is a single request fetching one name, but we need multiple names in a single request

// const singleResponse = serverResponse(1).then(({name}) => {
//   return name
// })

// DO NOT CHANGE VARIABLE NAME `namesFromServer`
export const namesFromServer = []
