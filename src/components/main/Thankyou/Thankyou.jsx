import Card from "../../ui/Card/Card";
import { ThankyouIcon } from "../../../assets/images";

export default function Thankyou() {
  return (
    <Card>
      <div className="flex flex-col items-center text-center gap-4 py-8">
        <div className="">
          <img src={ThankyouIcon} alt="Thank you" width={60} height={60} />
        </div>
        <h1 className="text-marine_blue text-2xl font-primary_bold">
          Thank you!
        </h1>
        <p className="text-cool_gray">
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com
        </p>
      </div>
    </Card>
  );
}
