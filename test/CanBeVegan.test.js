import * as canBeVegan from '../src/modules/canBeVegan';

test('should be flagged ingredient', () => {
  expect(canBeVegan.isFlaggedIngredient('biotin')).toBe(true);
});

test('should NOT be flagged ingredient', () => {
  expect(canBeVegan.isFlaggedIngredient('soy')).toBe(false);
});

test('should NOT contain flagged ingredients', () => {
  expect(
    canBeVegan.containsFlaggedIngredients(['soy', 'cacao butter'])
  ).toEqual(expect.arrayContaining([]));
});

test('should contain flagged ingredients', () => {
  expect(
    canBeVegan.containsFlaggedIngredients(['biotin', 'calciumphosphate', 'soy'])
  ).toEqual(expect.arrayContaining(['biotin', 'calciumphosphate']));
});
