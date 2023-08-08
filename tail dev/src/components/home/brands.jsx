import { useContext } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  IconButton,
  Input,
  Textarea,
} from "@material-tailwind/react";

import { PageTitle, Footer } from "@/widgets/layout";
import { FeatureCard, TeamCard } from "@/widgets/cards";
import { featuresData, teamData, contactData } from "@/data";
import { textsContext, linksContext } from "@/contexts";

const Brands = () => {
  const { state: linksState } = useContext(linksContext);
  const { state: textsState } = useContext(textsContext);
  return (
    <section className="bg-primary px-4 pb-48 pt-20">
      <div className="container mx-auto">
        <PageTitle heading="Here are our heroes">
          According to the National Oceanic and Atmospheric Administration, Ted,
          Scambos, NSIDClead scentist, puts the potentially record maximum.
        </PageTitle>
        <div className="mt-24 grid grid-cols-1 gap-12 gap-x-24 md:grid-cols-2 xl:grid-cols-4">
          {teamData.map(({ img, name, position, socials }) => (
            <TeamCard
              key={name}
              img={img}
              name={name}
              position={position}
              socials={
                <div className="flex items-center gap-2">
                  {socials.map(({ color, name }) => (
                    <IconButton key={name} color={color} variant="text">
                      <i className={`fa-brands text-lg fa-${name}`} />
                    </IconButton>
                  ))}
                </div>
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
