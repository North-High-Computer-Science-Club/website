const bodyParser = require('body-parser');
const app = require('Express')();
const dotenv = require('dotenv');
const io = require('socket.io');

io.on('connection', (socket) => {
  console.log(`User connected`);
  socket.on('disconnect', () => {
    console.log(`User disconnected`);
  });
});

dotenv.config({ path: dotenv.config.env });
app.use(bodyParser.urlencoded({ extended: false }));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Listening to requests on port ${PORT}`);
});
