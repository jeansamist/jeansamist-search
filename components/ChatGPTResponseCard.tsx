import { FunctionComponent } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
// import {} from 'iconsax-react'
export const ChatGPTResponseCard: FunctionComponent<{ query: string }> = ({
  query,
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">ChatGPT</CardTitle>
        <CardDescription>
          Response and results analyse of ChatGPT
        </CardDescription>
      </CardHeader>
      <CardContent>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae,
        ab. Dolorum sint ullam unde, labore, hic consectetur rerum nisi, enim
        ipsa esse pariatur. Fugiat eveniet nostrum eius repellendus eos cumque.
      </CardContent>
    </Card>
  );
};
