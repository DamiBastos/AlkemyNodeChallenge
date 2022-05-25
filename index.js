const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const preloadInfo  = require('./src/controllers/preloadInfo.js');
// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(3001, async () => {
    await  preloadInfo();
    
      
    console.log('Listening at 3001'); // eslint-disable-line no-console
  });
});