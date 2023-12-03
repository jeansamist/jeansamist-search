import { FunctionComponent } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrappingData } from "@/functions/scrapper";
import Link from "next/link";
export const SearchResult: FunctionComponent<ScrappingData> = ({
  description,
  href,
  path,
  title,
}) => {
  return (
    <Card className="w-full bg-background3 backdrop-blur-xl">
      <CardHeader>
        <CardTitle className="text-2xl underline">
          <Link href={href}>{title}</Link>
        </CardTitle>
        <CardDescription>{path}</CardDescription>
      </CardHeader>
      <CardContent>{description}</CardContent>
    </Card>
  );
};
