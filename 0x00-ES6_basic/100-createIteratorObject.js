export default function createIteratorObject(report) {
  const departments = Object.values(report.allEmployees);
  const employees = [].concat(...departments);
  let index = 0;

  return {
    next() {
      const result = {
        value: index < employees.length ? employees[index] : undefined,
        done: index >= employees.length,
      };

      index += 1;
      return result;
    },
    [Symbol.iterator]() {
      return this;
    },
  };
}
