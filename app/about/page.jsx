import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <div className="flex justify-center items-center min-h-screen">
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
  );
}
