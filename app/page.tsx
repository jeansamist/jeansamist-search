"use client";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Link from "next/link";
import { useState } from "react";
export default function Home() {
  const [query, setquery] = useState("");
  return (
    <main className="">
      <nav className="topbar bg-transparent">
        <div className="container flex flex-col md:flex-row md:justify-between md:h-16 gap-4 items-center p-4">
          <div></div>
          <nav className={cn("flex items-center space-x-4 lg:space-x-6")}>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </nav>
        </div>
      </nav>
      <ScrollArea className="h-[calc(100vh-103.25px)] md:h-[calc(100vh-65px)] w-full">
        <div className="container py-16 pt-32 w-full flex justify-center">
          <Card className="max-w-2xl w-full p-8  bg-background3 backdrop-blur-xl">
            <CardContent className="flex flex-col space-y-8 items-center pt-4">
              <h1 className="font-extrabold text-3xl md:text-5xl text-center">
                Jeansamist <span className="font-bold ">Search</span>
              </h1>
              <div className="w-1/2 h-px bg-foreground"></div>
              <form action="" className=" flex flex-col gap-8 w-full">
                <Input
                  className="text-center font-medium"
                  placeholder="What's happening in the world now ?"
                  value={query}
                  onChange={(e) => setquery(e.target.value)}
                />
                <Link
                  href={query ? `/${encodeURI(query)}` : ""}
                  className={buttonVariants()}
                >
                  Search
                </Link>
              </form>
            </CardContent>
          </Card>
          <div className=""></div>
        </div>
      </ScrollArea>
    </main>
  );
}
