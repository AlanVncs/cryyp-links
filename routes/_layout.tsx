import { Footer } from "../components/common/Footer.tsx";
import { Header } from "../components/common/Header.tsx";

import type { LayoutProps } from "$fresh/server.ts";

export default function Layout({ Component }: LayoutProps) {
  return (
    <body class="flex flex-col min-h-screen">
      <Header />
      <Component />
      <Footer />
    </body>
  );
}
