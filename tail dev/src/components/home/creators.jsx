import React, { useContext } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
} from "@material-tailwind/react";
import { UsersIcon } from "@heroicons/react/24/solid";

import { FeatureCard, TeamCard } from "@/widgets/cards";
import { featuresData, teamData, contactData } from "@/data";
import { textsContext, linksContext } from "@/contexts";

const Creators = () => {
  const { state: linksState } = useContext(linksContext);
  const { state: textsState } = useContext(textsContext);
  return (
    <section className=" bg-brown px-4 pb-20 pt-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuresData.map(({ color, title, icon, description }) => (
            <FeatureCard
              key={title}
              color={color}
              title={title}
              icon={React.createElement(icon, {
                className: "w-5 h-5 text-white",
              })}
              description={description}
            />
          ))}
        </div>
        <div className="mt-32 flex flex-wrap items-center">
          <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white p-3 text-center shadow-lg">
              <UsersIcon className="h-6 w-6 text-blue-gray-900" />
            </div>
            <Typography
              variant="h3"
              className="mb-3 font-bold"
              color="blue-gray"
            >
              Working with us is a pleasure
            </Typography>
            <Typography className="mb-8 font-normal ">
              Don't let your uses guess by attaching tooltips and popoves to any
              element. Just make sure you enable them first via JavaScript.
              <br />
              <br />
              The kit comes with three pre-built pages to help you get started
              faster. You can change the text and images and you're good to go.
              Just make sure you enable them first via JavaScript.
            </Typography>
            <Button variant="outlined">read more</Button>
          </div>
          <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
            <Card className="shadow-lg shadow-gray-500/10">
              <CardHeader className="relative h-56">
                <img
                  alt="Card Image"
                  src="/img/teamwork.jpeg"
                  className="h-full w-full"
                />
              </CardHeader>
              <CardBody>
                <Typography
                  variant="h5"
                  color="blue-gray"
                  className="mb-3 font-bold"
                >
                  Top Notch Services
                </Typography>
                <Typography className="font-normal text-blue-gray-500">
                  The Arctic Ocean freezes every winter and much of the sea-ice
                  then thaws every summer, and that process will continue
                  whatever happens.
                </Typography>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Creators;
