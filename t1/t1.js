'use strict';

async function getResponse() {
  const response = await fetch('https://reqres.in/api/users/1');
  const data = await response.json();
  console.log(data);
}

getResponse();
