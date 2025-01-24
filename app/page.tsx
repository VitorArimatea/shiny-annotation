import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-around">
      <h1 className="text-2xl">Hello, I'm Vítor Arimatéa</h1>
      
      <Button className="mt-5">ShadCN Button</Button>
    </main>
  );
}
