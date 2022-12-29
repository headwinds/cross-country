// https://developers.google.com/web/ilt/pwa/working-with-indexeddb
// https://github.com/jakearchibald/idb
import { getWindow, getNavigator, getDocument } from '../server-side-util';
import { openDB, deleteDB, wrap, unwrap } from 'idb';
async function getIndexDB() {
  const screenWindow = getWindow();
  if (!screenWindow) return null;
  if (!('indexedDB' in screenWindow)) {
    console.log("This browser doesn't support IndexedDB");
    return false;
  }
  const db = await openDB('cabinquest', 3, {
    upgrade(upgradeDb, oldVersion, newVersion, transaction) {
      if (!upgradeDb.objectStoreNames.contains('golds')) {
        const goldsDB = upgradeDb.createObjectStore('golds', {
          autoIncrement: true,
        });
        goldsDB.createIndex('title', 'title', { unique: false });
      }

      if (!upgradeDb.objectStoreNames.contains('porthole')) {
        const portholeDB = upgradeDb.createObjectStore('porthole', {
          autoIncrement: true,
        });
        portholeDB.createIndex('link', 'link', { unique: true }); // probably link would be more unique here
      }

      if (!upgradeDb.objectStoreNames.contains('shadowhunt')) {
        upgradeDb.createObjectStore('shadowhunt', { autoIncrement: true });
      }

      if (!upgradeDb.objectStoreNames.contains('logs')) {
        upgradeDb.createObjectStore('logs', {
          keyPath: 'id',
          autoIncrement: true,
        });
      }
    },
  });
  return db;
}
export async function addItemToStore(store, item) {
  const dbPromise = getIndexDB();
  return dbPromise
    .then(function (db) {
      const tx = db.transaction(store, 'readwrite');
      const storeDB = tx.objectStore(store);
      storeDB.add(item);
      return tx.complete;
    })
    .then(function () {
      console.log('success addItemToStore ', store);
    });
}
export async function getItemFromStore(store, item, key) {
  const dbPromise = getIndexDB();
  console.log('get item: ', item);
  console.log('get item key: ', key);
  return dbPromise
    .then(function (db) {
      var tx = db.transaction(store, 'readonly');
      var storeDB = tx.objectStore(store);
      return storeDB.get(item[key]); //store.get('sandwich');
    })
    .then(function (val) {
      console.log('get item val: ', val);
      console.dir(val);
    });
}
export async function getAllItemsFromStore(store) {
  const dbPromise = getIndexDB();

  return dbPromise
    .then(function (db) {
      console.log('objectStoreNames: ', db);
      const tx = db.transaction(store, 'readonly');
      const storeDB = tx.objectStore(store);
      return storeDB.getAll();
    })
    .then(function (items) {
      console.log('Items by name:', items);
      return items;
    });
}
export async function updateItemInStore(store, item) {
  const dbPromise = getIndexDB();
  return dbPromise
    .then(function (db) {
      const tx = db.transaction(store, 'readonly');
      const storeDB = tx.objectStore(store);
      return storeDB.put(item);
    })
    .then(function (val) {
      console.log('success updateItemInStore!');
    });
}
export async function deleteItemFromStore(store, key) {
  const dbPromise = getIndexDB();
  return dbPromise
    .then(function (db) {
      const tx = db.transaction(store, 'readwrite');
      const storeDB = tx.objectStore(store);
      storeDB.delete(key);
      return tx.complete;
    })
    .then(function () {
      console.log('Item deleted');
    });
}
export async function searchItems(lower, upper) {
  if (lower === '' && upper === '') {
    return;
  }
  var range;
  if (lower !== '' && upper !== '') {
    range = IDBKeyRange.bound(lower, upper);
  } else if (lower === '') {
    range = IDBKeyRange.upperBound(upper);
  } else {
    range = IDBKeyRange.lowerBound(lower);
  }
  const dbPromise = getIndexDB();
  return dbPromise
    .then(function (db) {
      var tx = db.transaction(['store'], 'readonly');
      var storeDB = tx.objectStore('store');
      var index = storeDB.index('price');
      return index.openCursor(range);
    })
    .then(function showRange(cursor) {
      if (!cursor) {
        return;
      }
      console.log('Cursored at:', cursor.key);
      for (var field in cursor.value) {
        console.log(cursor.value[field]);
      }
      return cursor.continue().then(showRange);
    })
    .then(function () {
      console.log('Done cursoring');
    });
}
