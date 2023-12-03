"use client";

import { FunctionComponent } from "react";

import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useState } from "react";
export const ResultCard: FunctionComponent<{ query: string }> = ({ query }) => {
  const [newQuery, setnewQuery] = useState(query);
  return (
    <Card className="w-full bg-background3 backdrop-blur-xl">
      <CardHeader>
        <CardTitle className="text-xl">Resultat pour : {query}</CardTitle>
      </CardHeader>
      <CardContent className="">
        <form action="" className=" flex flex-col md:flex-row gap-4 w-full">
          <Input
            className="font-medium"
            placeholder="New search"
            value={newQuery}
            onChange={(e) => setnewQuery(e.target.value)}
          />
          <Link
            href={newQuery ? `/${encodeURI(newQuery)}` : ""}
            className={buttonVariants()}
          >
            Search
          </Link>
        </form>
      </CardContent>
    </Card>
  );
};
