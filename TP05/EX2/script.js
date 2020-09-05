//a,b,c sont de type string
var a,b,c;
a="1";
b="2";
c=a+b;
console.log("a=", a , "  typeof(a):" , typeof(a));
console.log("b=", b , "  typeof(b):" , typeof(b));
console.log("c=", c , "  typeof(c):" , typeof(c));
//forcez le type de a et b à entier
a=parseInt(a);
b=parseInt(b);
c=a+b;
console.log("\na=", a , " typeof(a):" , typeof(a));
console.log("b=", b , "typeof(b):" , typeof(b));
console.log("c=", c , "typeof(c):" , typeof(c));