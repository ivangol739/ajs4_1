import getHealth from '../app';

test.each([
  { name: 'Mar', health: 80, expected: 'healthy' },
  { name: 'Mar', health: 50, expected: 'wounded' },
  { name: 'Mar', health: 10, expected: 'critical' },
])('should return status health', ({ name, health, expected }) => {
  const received = getHealth({
    name, health,
  });
  expect(received).toEqual(expected);
});
