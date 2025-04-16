import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GraduationCap } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/theme/mode-toggle";


function AuthPage() {
  const [activeTab, setActiveTab] = useState("signin");
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex items-center justify-between border-b px-4 lg:px-6 h-14 bg-white shadow-sm dark:bg-zinc-900">
        <Link
          to={"/"}
          className="flex items-center justify-center hover:text-[#747bff] transition-all"
        >
          <GraduationCap className="h-8 w-8 mr-4" />
          <span className="font-extrabold text-xl">LMS Learn</span>
        </Link>
        <ModeToggle />
      </header>
      <div className="flex flex-1 items-center justify-center  bg-background">
        <Tabs
          value={activeTab}
          defaultValue="signin"
          className="w-full max-w-md "
          onValueChange={(value) => setActiveTab(value)}
        >
          <TabsList className="grid w-full grid-cols-2 gap-2">
            <TabsTrigger value="signin">Sign In</TabsTrigger>
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
          </TabsList>
          <TabsContent value="signin">
            <Card className="p-6 space-y-4">
              <CardHeader>
                <CardTitle>Sign in to your account</CardTitle>
                <CardDescription>
                  Enter your email and password to access your account
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <label htmlFor="name">Name</label>
                </div>
                <div className="space-y-1">
                  <label htmlFor="username">Username</label>
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save changes</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="signup">
            <Card className="p-6 space-y-4">
              <CardHeader>
                <CardTitle>Sign in to your account</CardTitle>
                <CardDescription>
                  Enter your email and password to access your account
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <label htmlFor="name">Name</label>
                </div>
                <div className="space-y-1">
                  <label htmlFor="username">Username</label>
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save changes</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default AuthPage;
