let testStringOrNumerArray: (string | number)[];
testStringOrNumerArray = [1, 2, "trzy", "cztery"];

// niewymagany argument w funkcji
let sum = (num1: number, num2: number, another?: number) => {
  return num1 + num2;
};

// typ funkcji:
type myFunc = (a: number, b: string) => void;

let write: myFunc = (numb, strin) => {
  console.log(strin);
};

// różnica pomiędzy interface a type jest taka że interface można rozszerzać np:
interface IUser {
  username: string;
  email: string;
  age: number;
}

interface iEmployee extends IUser {
  eployeeID: number;
}

// typ generyczny w miejsce T możesz wstawić dowolny TYP
interface IUser2<T> {
  username: string;
  email: string;
  age: number;
  extra: T[];
}
const u2: IUser2<string> = {
  username: "John",
  email: "John@doo.com",
  age: 18,
  extra: ["jeden", "dwa"],
};
const u3: IUser2<number> = {
  username: "John",
  email: "John@doo.com",
  age: 18,
  extra: [1, 2, 3, 4],
};
// dalej dla obiektów
interface IUser3<T extends object> {
  username: string;
  email: string;
  age: number;
  extra: T[];
}
const u4: IUser2<{ id: number; str: string }> = {
  username: "John",
  email: "John@doo.com",
  age: 18,
  extra: [
    { id: 1, str: "jeden" },
    { id: 2, str: "dwa" },
  ],
};
interface Icategory {
  id: number;
  str: string;
}
const u5: IUser2<Icategory> = {
  username: "John",
  email: "John@doo.com",
  age: 18,
  extra: [
    { id: 1, str: "jeden" },
    { id: 2, str: "dwa" },
  ],
};
