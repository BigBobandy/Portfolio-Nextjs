import Image from "next/image";
import Content from "./components/Content";

export default function Home() {
  return (
    <div className="flex justify-center items-center w-full pt-5 ">
      <Image
        src="/headshot.jpg"
        width={400}
        height={700}
        alt="headshot picture of me"
        className="rounded-xl shadow-md drop-shadow-md "
      />
      <Content />
    </div>
  );
}
