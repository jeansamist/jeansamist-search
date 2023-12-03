import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { Photo, createClient } from "pexels";
import "./globals.css";
export const metadata: Metadata = {
  title: "Jeansamist Search",
  description: "Focus on the essentials",
  applicationName: "Jeansamist Search",
  creator: "jeansamist",
};
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Ball } from "@/components/ball";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  let photo = {
    src: {
      original:
        "https://images.pexels.com/photos/8335926/pexels-photo-8335926.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  };
  try {
    const client = createClient(process.env.PEXEL_API_KEY || "");
    photo = (await client.photos.random()) as Photo;
  } catch (error) {
    photo = {
      src: {
        original:
          "https://images.pexels.com/photos/8335926/pexels-photo-8335926.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
    };
  }
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        style={{
          background: `url("${photo.src.original}") no-repeat center / cover fixed`,
        }}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          forcedTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Ball />
          <div className="w-full h-screen bg-gradient-to-t to-background from-background2">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
