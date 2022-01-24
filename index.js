const fs = require('fs');
const dotenv = require('dotenv')

dotenv.config()

const fbVideoUpload = require('./fbVideoUpload')


const args = {
  token: process.env.ACCESS_TOKEN, 
  id: process.env.PAGE_ID, 
  stream: fs.createReadStream('./video.mkv'), // path to the video
  title: "A Quick Test",
  description: "Just a quick test",
  thumb: {
    value: fs.createReadStream('./video.jpg'),
    options: {
      filename: 'video.jpg',
      contentType: 'image/jpg'
    }
  }
};

fbVideoUpload(args).then((res) => {
  console.log('res: ', res);
}).catch((e) => {
  console.error(e);
});
