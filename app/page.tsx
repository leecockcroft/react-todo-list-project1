import Image from "next/image";
import TodoState from "./Components/TodoState"
export default function Home() {
  return (
    <div className="container mx-auto p-4 sm:w-[20%] place-content-center grid sm:h-[100vh]">
      <main className="">
      
       <TodoState/>
      </main>
    </div>
  );
}
