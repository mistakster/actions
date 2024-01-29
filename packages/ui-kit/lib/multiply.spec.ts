import { it, expect} from "vitest";
import { multiply } from ".";

it('should sum first and second arguments', () => {
  expect(multiply(7, 4)).toBe(28);
});

it('should be commutative', () => {
  const result1 = multiply(7, 4);
  const result2 = multiply(4, 7);
  expect(result1).toBe(result2);
});
