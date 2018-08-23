// 1. show crash1 - doesnt break app
// 2. show crash2 - does break app
// 3. why does crash2 kill the app and crash1 does not
// 4. add middlewware 
// 5. show crash1 handled
// 6. show crash2 unhandled
// 7. add uncaughtException
// 8. show crash1 handled in middleware
// 9. show crash2 handled in uncaughtException and UI is timing out
// 10. show next usage with crash3

const express = require('express');
var bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json({
  limit: '10mb'
}));

app.get('/crash1', (req, res, next) => {
  console.log(undefined.split('|')[1])
  res.send('will crash the app!');
});

app.get('/crash2', (req, res, next) => {
  process.nextTick(function () {
    var j = i.someProperty;
  });
})

app.get('/crash3', (req, res, next) => {
  process.nextTick(function () {
    try {
      var j = i.someProperty;
    } catch (err) {
      console.log('------>>>> in catch for next');
      next(err);
    }
  });
})

app.get('/', (req, res) => res.send('Hello World!'));

app.use(function (err, req, res, next) {
  console.error('--->>>> error middleware', err.stack);
  res.status(500).send('Something broke!');
})

process.on('uncaughtException', function (err) {
  console.log('--->>>> uncaughtException', err.stack);
});


app.listen(9900, () => console.log('Example app listening on http://localhost:9900!'));

