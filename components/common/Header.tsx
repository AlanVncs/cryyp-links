import { JSX } from "preact";

export function Header(props: JSX.HTMLAttributes<HTMLElement>) {
  return (
    <header class="flex items-center justify-center h-[75px] bg-gray-800 text-white text-md">
      Header da aplicação
    </header>
  );
}
