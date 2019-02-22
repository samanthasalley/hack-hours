/**
 * Creates a deep clone of value.
 * var users = [{ 'user': 'barney' },{ 'user': 'fred' }];
 * var deepClone = cloneDeep(users)
 * deepClone === users → false
 * deepClone[0] === users[0] → false
 * deepClone[0].user === users[0].user → true
 */
const cloneDeep = (value) => {
  const isObjOrArr = val => typeof val === 'object' && val !== null;
  if (!isObjOrArr(value)) return value;
  if (Array.isArray(value)) return value.map(el => cloneDeep(el));
  return Object.keys(value).reduce((acc, key) => {
    acc[key] = cloneDeep(value[key]);
    return acc;
  }, {});
};

// const users = [{ 'user': 'barney' }, { 'user': 'fred' }];
// const usersClone = cloneDeep(users);
// console.log('usersClone === users → false =>', usersClone === users);
// console.log('usersClone[0] === users[0] → false =>', usersClone[0] === users[0]);
// console.log('usersClone[0].user === users[0].user → true =>', usersClone[0].user === users[0].user);