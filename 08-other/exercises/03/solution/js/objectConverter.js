/* 3. Készíts egy `objectConverter` nevű objektumot, ami az alábbi metódusokkal rendelkezik:
   - `arrayToMap(array)`
   - `arrayToSet(array)`
   - `setToMap(set)`
   - `setToArray(set)`
   - `mapToArray(map)`
   - `mapToSet(map)`

A fenti metódusok értelemszerűen nem másra szolgálnak, mint az egyik összetett adattípusból
 konvertálják át az adatokat egy másikba.
Mindegyik metódus visszatérési értéke egy új Array, Map, vagy Set object. */

const objectConverter = {
  arrayToMap(array) {
    const sampleMap = new Map();
    for (let index = 0; index < array.length; index++) {
      sampleMap.set(index, array[index]);
    }
    return sampleMap;
  },
  arrayToSet(array1) {
    const sampleSet = new Set();
    array1.forEach((element) => {
      sampleSet.add(element);
    });
    return sampleSet;
  },

  setToMap(set) {
    const sampleMap1 = new Map();
    const samplearray = [];
    set.forEach((element) => {
      samplearray.push(element);
    });
    for (let index = 0; index < samplearray.length; index++) {
      sampleMap1.set(index, samplearray[index]);
    }
    return sampleMap1;
  },
  setToArray(set) {
    const samplearray = [];
    set.forEach((element) => {
      samplearray.push(element);
    });
    return samplearray;
  },

  mapToArray(map) {
    const samplearray2 = [];
    map.forEach((element) => {
      samplearray2.push(element);
    });
    return samplearray2;
  },

  mapToSet(map) {
    const sampleSet1 = new Set();
    map.forEach((element) => {
      sampleSet1.add(element);
    });
    return sampleSet1;
  },
};

export default objectConverter;
