import Image from "next/image";
import hero from '@/public/hero.jpg'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (

    <>
      <div className="w-screen h-96">

        <Image className="w-full h-full object-fill" src={hero} alt="BlogImage" />
      </div>

      {/* blogs */}
      <div className="h-full">

        <div className="flex justify-center items-center mt-12">
          <Card className="w-[400px]">
            <CardHeader>
              <CardTitle>About Us</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Welcome to MyApp! We provide innovative solutions for modern web applications. 🚀
              </p>
            </CardContent>
          </Card>
        </div>

      </div>
    </>
  );
}
