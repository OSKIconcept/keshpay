import RotatingLogo from "./RotatingLogo";

const TextWithSpinner = () => {
  return (
    <div className="flex h-fit relative gap-1 md:gap-2 items-center w-fit">
      <span className=" md:text-[84px] leading-none  md:text- text-[56px] text-[#001329] lg:text-[112px]">
        Gl
      </span>
      <RotatingLogo />
      <span>bal</span>
    </div>
  );
};

export default TextWithSpinner;
