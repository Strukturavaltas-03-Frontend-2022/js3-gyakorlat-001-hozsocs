/* 2. Készíts egy `HU` nevű objektumot, aminek az alábbi propertijei vannak:
- `date()`: Visszaadja a paraméterként megadott dátumot a magyar dátumírás szabályainak
 megfelelően
- `currency()`: Visszaadja a paraméterként megadott számot a magyar pénzformátumnak
 megfelelően a Ft végződéssel együtt
- `list()`: A paraméterként kapott string tömböt visszaadja az alábbi formában: első,
második és harmadik" (Tehát vesszőkkel elválasztva az utolsó elem előtt az és szóval) */

const HU = {
  date(datedata) { return Intl.DateTimeFormat('hu-HU').format(datedata); },
  currency(money) {
    return new Intl.NumberFormat('hu-HU', {
      style: 'currency',
      currency: 'HUF',
    }).format(money);
  },

  list(stringArr) {
    const lastEl = stringArr.pop();
    return stringArr.join(', ').concat(` és ${lastEl}`);
  },

};

export default HU;
