```javascript
import AsyncStorage from '@react-native-async-storage/async-storage';

const myObject = { name: 'John Doe', age: 30 };

const storeData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
    console.log('Data stored successfully!');
  } catch (e) {
    console.log('Error storing data:', e);
  }
};

const getData = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch(e) {
    console.log('Error retrieving data:', e);
  }
};

storeData('myKey', myObject)
  .then(() => getData('myKey').then(retrievedObject => console.log('Retrieved object:', retrievedObject)));
```