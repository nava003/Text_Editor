import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// PUT logic that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.log('PUT to the database');

  const contactDB = await openDB('jate', 1);
  const tx = contactDB.transaction('jate', 'readwrite');
  const store = tx.objectStore('jate');
  const request = store.put( { id: 1, txt_content: content } );

  const result = await request;
  console.error('Data saved to the database', result);
}

// GET logic that gets all the content from the database
export const getDb = async () => {
  console.log('GET from the database');
  
  const contactDB = await openDB('jate', 1);
  const tx = contactDB.transaction('jate', 'readonly');
  const store = tx.objectStore('jate');
  const request = store.getAll();

  const result = await request;
  console.error('result.value', result);
}

initdb();
