var databox = require('./lib/databox.js');

databox.listAvailableStores().then((stores) => console.log(stores));

databox.walkStoreCatalogs().then((stores) => console.log(JSON.stringify(stores, null, '\t'))).catch((err) => console.error(err));

databox.mapStoreCatalogs((cat, i) => {
	console.log('Store ' + i + ':', JSON.stringify(cat, null, '\t'));
}).catch((err) => console.error(err));
