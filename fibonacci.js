document.write("<h2>welcome</h2>");

const number = parseInt(prompt("Enter number for nth length "));

var fib = [];
let n1 = 0, n2 = 1, nextNumber;


document.write("Fibonacci Series: ");
document.write(n1+" ");
document.write(n2+" ");



var input = number - 2;

for(let i=2; i<number; i++)
{
    nextNumber = n1 + n2;
    document.write(nextNumber + " ");
    n1 = n2;
    n2 = nextNumber;
}
