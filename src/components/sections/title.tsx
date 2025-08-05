import Image from "next/image";
import { MapPin } from "lucide-react";

import CamHeadshot from "/public/images/headshot.jpg";
import Wave from "/public/images/wave.png";
import SocialIcons from "@/components/data-display/social-icons";
import Typography from "@/components/general/typography";
import Container from "@/components/layout/container";

const TitleSection = () => {
  return (
    <Container id="home">
      <div className="flex flex-col gap-12 md:flex-row">
        {/* Image */}
        <div className="flex items-center justify-center md:order-last md:flex-grow md:justify-end">
          <div className="relative h-[300px] w-[280px] md:h-[360px] md:w-[320px]">
            <Image
              src={CamHeadshot}
              alt="Headshot of Cam"
              className="absolute z-10 h-[280px] w-[240px] border-8 border-gray max-md:left-5 md:left-0 md:top-0 md:h-[320px] md:w-[280px]"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex max-w-3xl flex-grow flex-col justify-center gap-8 md:order-first md:items-start md:justify-center 2xl:gap-12">
          <div className="flex flex-col gap-2">
            <Typography variant="h1">
              <span className="bg-gradient-to-r from-blue-800 via-blue-600 to-blue-300 bg-clip-text text-transparent animate-pulse-wave">
                Hi! I'm Cam
              </span>{" "}
              <span className="inline-block animate-[slide-in-from-right_2.5s_ease-out_forwards] align-middle">
                <Image src={Wave} alt="Wave" width={48} height={48} className="inline-block align-middle" priority />
              </span>
            </Typography>
            <div className="h-1 w-16 bg-gradient-to-r from-blue-800 to-blue-300 rounded-full"></div>
            <Typography>
            Sophomore at Cornell University majoring in Computer Science and Cognitive Science, 
            with a passion for using technology to tackle environmental and social challenges. 
            Please take a look around to explore my projects, skills, and experiences.
            </Typography>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <MapPin className="stroke-gray-600" />
              <Typography>Seal Beach, CA </Typography>
              <div className="flex items-center gap-2"></div>
              <MapPin className="stroke-gray-600" />
              <Typography>Ithaca, NY</Typography>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500"></span>
                </span>
              </div>
              <Typography>
                Excited for new projects and opportunities!
              </Typography>
            </div>
          </div>
          <SocialIcons />
        </div>
      </div>
    </Container>
  );
};

export default TitleSection;
