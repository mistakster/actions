import { it, expect} from "vitest";
import { add } from ".";

it('should sum first and second arguments', () => {
  expect(add(7, 4)).toBe(11);
});

it('should be commutative', () => {
  const result1 = add(7, 4);
  const result2 = add(4, 7);
  expect(result1).toBe(result2);
});
