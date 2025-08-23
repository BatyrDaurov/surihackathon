import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className={"notfound"}>
      <div className="notfound__wrapper">
        <h1>Are you lost, buddy?</h1>
        <p>The page you are looking for does not exist.</p>
        <Link href="/">{"<-"} Go back home</Link>
      </div>
      <Image src={"/chameleon.png"} width={700} height={1100} alt="" />
    </div>
  );
}
