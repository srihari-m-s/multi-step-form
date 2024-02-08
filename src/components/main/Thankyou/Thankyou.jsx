import Card from "../../ui/Card/Card";
import { ThankyouIcon } from "../../../assets/images";

export default function Thankyou() {
  return (
    <Card>
      <div className="flex flex-col items-center text-center gap-4 py-8 lg:max-w-[635px]">
        <div className="">
          <img
            src={ThankyouIcon}
            alt="Thank you"
            className="w-16 h-16 lg:w-20 lg:h-20"
          />
        </div>
        <h1 className="text-marine_blue text-2xl font-primary_bold lg:text-3xl">
          Thank you!
        </h1>
        <p className="text-cool_gray lg:w-4/5">
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com
        </p>
      </div>
    </Card>
  );
}
