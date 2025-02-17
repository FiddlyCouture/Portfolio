import { home } from "./Float/config";
import Float from "./Float/Float";
import { SectionLayout } from "./Layout";
import SplitText from "./SplitText/SplitText";
import { Heading, SubHeading } from "./Typography";

export default function Home() {
  return (
    <SectionLayout className="overflow-hidden">
      <div className="md:max-w-2/3 flex w-full flex-col items-center space-y-11">
        <SubHeading dark>
          <span className="font-bold">Hello! </span>My name is
        </SubHeading>

        <Heading dark className="text-center font-extrabold">
          <SplitText text="Abhishek" />
          <SplitText text="Jain" />
        </Heading>

        <p className="text-center md:whitespace-pre-line">
          {`I am a software developer who loves to work on
                the Trading Systems and Machine learning. I am passionate about building simple
                and elegant solutions to complex problems in some of the world's cutting industry.`}
        </p>
      </div>
      <Float config={home} />
    </SectionLayout>
  );
}
