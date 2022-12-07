const express = require('express');
const app = express();
const cors = require('cors')
const axios = require('axios');

app.use(cors())

const filterData = (data) => {
  
  let keys = Object.keys(data);

  const filter = (keys.map(critter => {
    return ({
      name: data[critter].name['name-USen'],
      price: data[critter].price,
      icon_uri: data[critter].icon_uri,
      catchphrase: data[critter]["catch-phrase"]
    })
  }));

  return(filter);
}

const axiosInstance = axios.create({
  baseURL: 'https://acnhapi.com/'
});

app.get("/fish", async(req, res, next) => {
  try {

    const response = await axiosInstance.get('v1/fish');

    res.send(filterData(response.data));

  } catch (error) {
    res.send(error.message);
  }
})

app.get("/sea", async(req, res, next) => {
  try {

    const response = await axiosInstance.get('v1/sea');
    
    res.send(filterData(response.data));

  } catch (error) {

    res.send(error.message);

  }
})

app.get("/bugs", async(req, res, next) => {
  try {

    const response = await axiosInstance.get('v1/bugs');
    
    res.send(filterData(response.data));

  } catch (error) {

    res.send(error.message);

  }
})

app.listen(5000, () => {console.log("Server started on port 5000")})