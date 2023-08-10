import React from "react";

import Category from "./category";

const Categories = () => {
  return (
    <section className="bg-primary">
      <Category title="software" bg="bg-software" text="text-software_s" />
      <Category title="finance" bg="bg-finance" text="text-finance_s" />
      <Category title="health" bg="bg-health" text="text-health_s" />
      <Category title="education" bg="bg-education" text="text-education_s" />
      <Category title="realest" bg="bg-realest" text="text-realest_s" />
    </section>
  );
};

export default Categories;
