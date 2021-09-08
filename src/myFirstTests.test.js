import bankAccount from './bankAccount';


function findMultiples(integer, limit) {   
  const limitArr = [];   
    for ( let i = 1 ; i <= limit / integer; i ++){     
      limitArr.push(integer * i);   
    }   
  return limitArr; 
}


describe('bankAccount', () => {
  beforeEach(() => {
    bankAccount.balance = 1000;
  })
  test('find multiples should return an array', () => {
    expect(Array.isArray(findMultiples(1, 1))).toBe(true);
  })
  
  test('find multiples should return expected multiple array', () => {
    expect(findMultiples(5, 25)).toEqual([5, 10, 15, 20, 25]);
  })
  
  test('bankAccount balance should be a number', () => {
    expect(typeof bankAccount.balance).toBe('number');
  })
  
  test('bankAccount balance should default to 1000', () => {
    expect(bankAccount.balance).toEqual(1000);
  })
  
  test('deposit money increases balance by specified amount', () => {
    bankAccount.depositMoney(700);
    expect(bankAccount.balance).toBe(1700);
  })
  
  test('withdrawMoney decreases balance by a specified amount', () => {
    bankAccount.withdrawMoney(500);
    expect(bankAccount.balance).toBe(500);
  })
})