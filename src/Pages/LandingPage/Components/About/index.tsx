import { FC } from "react";

const Index: FC = () => {
  return (
    <div className="flex w-[calc(100% - 160px)] p-20 pt-36" id="about">
      <div className="text-[40px] font-medium leading-normal basis-[26%]">
        About
      </div>

      <div className="text-2xl font-normal leading-9 text-left basis-[74%] text-primary-text pr-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.
      </div>
    </div>
  );
};

export default Index;
