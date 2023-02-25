const zbir = (a, b) => {
  console.log(a + b);
};

const num = 55;

//JavaScript moduli nam dozvoljavaju da podelimo nas kod u odvojene fajlove.
//Oni se oslanjaju na dve naredbe (statements);
//1.import
//2.export

//Postoje 2 nacina exportovanja neke funkcije,promenjive:
//1.default export
//2. export

export default zbir;
export { num };
