import Image from "next/image";
import ProfilePic from "@/app/assets/profile-pic.png";

export default function page() {
  return (
    <div className="flex justify-center max-w-5xl mx-auto">
      <div className="flex flex-col justify-start items-center min-h-screen">
        <Image src={ProfilePic} alt="Profile" width={100} height={100} className="rounded-full" />
        <h1 className="text-4xl font-bold">Abhijeet Sharma</h1>
        <p className="text-xl">Frontend Developer and Designer</p>
      </div>
    </div>
  )
}
