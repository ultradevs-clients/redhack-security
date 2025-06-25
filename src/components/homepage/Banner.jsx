import Link from "next/link";
import BannerBottom from "./BannerBottom";

export default function Banner() {
  return (
    <div className="banner-container">
      <div className="banner">
        <div className="container flex pt-10 md:pt-20 lg:pt-0 lg:items-center h-full">
          <section className="lg:px-10 px-5 lg:w-2/4 w-full pb-16">
            <h1 className="text-background !text-4xl lg:!text-5xl lg:w-11/12">
              Continuous Threat Discovery & Exploitation
            </h1>
            <p className="font-semibold text-background w-10/12 lg:w-4/6">
              Trusted Global Offensive Security & Pentesting Platform{" "}
            </p>
            <div className="text-background flex lg:flex-row flex-col lg:gap-6 gap-4 text-lg pt-8">
              <Link href="/">
                <button className="btn">Learn More</button>
              </Link>
              <Link href="/">
                <button className="btn btn--outline">Service</button>
              </Link>
            </div>
          </section>
        </div>
      </div>
      <BannerBottom />
    </div>
  );
}
