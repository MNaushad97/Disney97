import CTALogo1 from "./images/cta-logo-one.svg"; // jpg is blurry
import CTALogo2 from "./images/cta-logo-two.png";
import Mould_CTA from "./Mould_CTA";

function LoginContent() {
  return (
    <>
      <div
        id="CTA"
        className="max-w-[650px] overflow-hidden items-center ease-out	transition-opacity	 w-full  flex flex-col"
      >
        <Mould_CTA image={CTALogo1}></Mould_CTA>
        <div
          id="SignUp"
          className="font-bold text-[#f9f9f9] bg-[#0063e5] hover:bg-[#0483ee] mb-3 w-full py-4 tracking-[1.5px] border rounded-sm border-transparent"
        >
          GET ALL THREE
        </div>
        <div
          id="description"
          className="text-xs mb-6 tracking-[1.5px] leading-6 "
        >
          Get Premier Access to IPL-2023 for an additional fee with a Disney+
          subscription. As after 10July 2022, the price of Hotstar and Disney+
          will increase by ₹200.
        </div>
        <Mould_CTA image={CTALogo2}></Mould_CTA>
      </div>
    </>
  );
}
export default LoginContent;
