import Image from "next/image";
import Content from "./components/Content";

export default function Home() {
  return (
    <main className="flex flex-col md:flex-row justify-center items-center w-full pt-5">
      <div className="hidden md:block w-[400px] h-[700px] rounded-xl overflow-hidden shadow-md drop-shadow-md">
        <Image
          src="/headshot.png"
          width={400}
          height={700}
          alt="headshot picture of me"
          priority
        />
      </div>
      <Content />
    </main>
  );
}
