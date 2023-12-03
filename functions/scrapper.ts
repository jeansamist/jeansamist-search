import axios from "axios";
import * as cheerio from "cheerio";
import * as iconv from "iconv-lite";

export interface ScrappingData {
  href: string;
  title: string;
  description: string;
  path: string;
}

export async function getGoogleResults(
  query: string
): Promise<ScrappingData[]> {
  const final: ScrappingData[] = [];

  try {
    const { data } = await axios.get(
      `https://www.google.com/search?q=${query}`,
      {
        responseType: "arraybuffer",
      }
    );
    const decodedData = iconv.decode(data, "ISO-8859-1");
    const $ = cheerio.load(decodedData, { decodeEntities: false });
    const divs = $("div.Gx5Zad");
    divs.each((index, element) => {
      const link = $(element).find("a");
      const title = $(element).find("div.vvjwJb");
      const description = $(element).find("div.s3v9rd");
      const path = $(element).find("div.UPmit");

      const titleText = title.text();
      const descriptionText = description.text();
      const pathText = path.text();
      const url = new URL("https://jeansamist.com" + link.attr("href"));

      const href = url.searchParams.get("q") || "";

      final.push({
        href,
        title: titleText,
        description: descriptionText,
        path: pathText,
      });
    });
  } catch (error) {
    console.error("Error fetching Google results:", error);
  }

  return final.filter((link) => link.title);
}
