interface IUser {
  name: string;
  age: number;
  location: string;
  nickname?: string;
}

interface IUserLogin extends IUser {
  login: string;
  password: string;
  email: string;
}

let uploadStatus: 'loading' | 'success' | 'error';

let textFormat: 'uppercase' | 'lowercase' | 'capitalize';

function getSum(a: number, b: number): number {
  return a + b;
}

function formatText(text: string, format: 'uppercase' | 'lowercase' | 'capitalize') {
  if (format === 'uppercase') {
    return text.toUpperCase();
  } else if (format === 'lowercase') {
    return text.toLowerCase();
  } else if (format === 'capitalize') {
    return text.charAt(0).toUpperCase() + text.slice(1);
  } else {
    return text;
  }
}

function removeSymbol(text: string, symbol: string): string {
  return text.replaceAll(symbol, '');
}

const users: IUser[] = [
  { name: 'Muhammad Talha', age: 33, location: 'Medina'},
  { name: 'Vladislav', age: 26, location: 'Kiev', nickname: 'Sensei' },
  { name: 'Maballs Ich of Corse', age: 31, location: 'Grand Line' }
];

const pirates = users.filter(user => user.location === 'Grand Line');