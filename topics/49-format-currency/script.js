// .toLocaleString() = returns a string with a language sensitive representation of a number
// basically to format numbers

// Intl.NumberFormat() [outside of scope of today's lesson]

// number.toLocaleString("locale", {options});

// 'locale' = specify the language (undefined = default set in browser)
// 'options' = object with formatting options

let number = 123456.789;

//number = number.toLocaleString(undefined); // default locale -> 123,456.789 (of United States)
//number = number.toLocaleString('en-US'); // 123,456.789
//number = number.toLocaleString('de-DE'); // in germany -> 123.456,789 (they use . for comma and after , means after decimal)
//number = number.toLocaleString('hi-IN'); // for India 1,23,456.789

//number = number.toLocaleString('en-US', {style: "currency", currency: "USD"}); // $123,456.789
//number = number.toLocaleString('de-DE', {style: "currency", currency: "EUR"} ); // 123.456,79 €
number = number.toLocaleString('hi-IN', {style: "currency", currency: "INR"}); // ₹1,23,456.79

console.log(number);