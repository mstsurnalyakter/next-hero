import Header from "@/components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello World</h1>
      <button>Click me</button>
      <Header/>
    </main>
  );
}
