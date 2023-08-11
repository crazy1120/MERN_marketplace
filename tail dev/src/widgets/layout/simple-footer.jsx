import PropTypes from "prop-types";
import { Typography } from "@material-tailwind/react";
import { HeartIcon } from "@heroicons/react/24/solid";

export const SimpleFooter = ({ brandName, brandLink, routes }) => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary py-2">
      <div className="flex w-full flex-wrap items-center justify-center gap-6 px-2 md:justify-between">
        <Typography variant="small" className="font-normal text-black">
          &copy; {year}, created with{" "}
          <HeartIcon className="-mt-0.5 inline-block h-3.5 w-3.5" /> by{" "}
          <a
            href={brandLink}
            target="_blank"
            className="hover:text-blue-500 transition-colors"
          >
            {brandName}
          </a>{" "}
          for a better marketplace.
        </Typography>
        <ul className="flex items-center gap-4">
          {routes.map(({ name, path }) => (
            <li key={name}>
              <Typography
                as="a"
                href={path}
                target="_blank"
                variant="small"
                className="px-1 py-0.5 font-normal text-black transition-colors hover:scale-110"
              >
                {name}
              </Typography>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

SimpleFooter.defaultProps = {
  brandName: "Libright",
  brandLink: "https://www.creative-tim.com",
  routes: [
    { name: "Creative Tim", path: "https://www.creative-tim.com" },
    { name: "About Us", path: "https://www.creative-tim.com/presentation" },
    { name: "Blog", path: "https://www.creative-tim.com/blog" },
    { name: "License", path: "https://www.creative-tim.com/license" },
  ],
};

SimpleFooter.propTypes = {
  brandName: PropTypes.string,
  brandLink: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object),
};

SimpleFooter.displayName = "/src/widgets/layout/simple-footer.jsx";

export default SimpleFooter;
