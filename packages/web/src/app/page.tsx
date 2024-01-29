import { add, multiply } from "@mistakster/ui-kit";

export default function Home() {
  return (
    <main className="p-8">
      <p className="p-2">
        7 + 4 = {add(7, 4)}
      </p>
      <p className="p-2">
        7 * 4 = {multiply(7, 4)}
      </p>
    </main>
  );
}
