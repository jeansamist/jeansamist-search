import { ResultCard } from "@/components/ResultCard";
import { SearchResult } from "@/components/SearchResult";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ScrappingData, getGoogleResults } from "@/functions/scrapper";
import { cn } from "@/lib/utils";
export default async function Search({
  params,
}: {
  params: { query: string };
}) {
  let data: boolean | ScrappingData[] = false;
  try {
    data = await getGoogleResults(params.query);
  } catch (error) {}

  return (
    <main className="">
      <nav className="topbar bg-transparent">
        <div className="container flex flex-col md:flex-row md:justify-between md:h-16 gap-4 items-center p-4">
          <div>
            <h1 className="font-extrabold text-xl md:text-3xl text-center">
              Jeansamist <span className="font-bold ">Search</span>
            </h1>
          </div>
          <nav className={cn("flex items-center space-x-4 lg:space-x-6")}>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </nav>
        </div>
      </nav>
      <ScrollArea className="h-[calc(100vh-116.25px)] md:h-[calc(100vh-65px)] w-full">
        <div className="container py-16 w-full grid md:grid-cols-2 gap-8">
          <div className="space-y-8">
            <ResultCard query={params.query} />
            {data ? (
              data.map((result, key) => <SearchResult {...result} key={key} />)
            ) : (
              <Card>
                <CardContent>Some thing went wrong</CardContent>
              </Card>
            )}
          </div>
          <div></div>
        </div>
      </ScrollArea>
    </main>
  );
}
