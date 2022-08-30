/* 1. Írj egy függvény kifejezést `removeDuplicatesFromArray` néven, ami a paraméterként
 megadott tömbből eltávolítja a duplikált elemeket! A tömb csak primítív értékeket
 tartalmaz!
A függvény visszatérési értéke a duplikált elemektől mentes új tömb! */

const removeDuplicatesFromArray = (array) => array.filter((c, index) =>
  array.indexOf(c) === index);

removeDuplicatesFromArray([1, 2, 3, 4, 1, 2]);
export default removeDuplicatesFromArray;
