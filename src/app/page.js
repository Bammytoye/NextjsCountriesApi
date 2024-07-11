import Countries from "@/components/Countries";
import Image from "next/image";
import ApiCountries from "@/components/ApiCountries";


export default function Home() {
  return (
    <>
      {/* <Countries /> */}
      <ApiCountries />
    </>
  );
}
