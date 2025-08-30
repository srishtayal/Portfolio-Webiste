import { useRef } from "react";
import Marquee from "../components/Marquee";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const ContactSummary = () => {
  const containerRef = useRef(null);
  const items = [
    "Imagination",
    "Code",
    "Design",
    "Curiosity",
    "Growth",
  ];
  const items2 = [
    "contact",
    "contact",
    "contact",
    "contact",
    "contact",
  ];

  useGSAP(() => {
    gsap.to(containerRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
        markers: false,
      },
    });
  }, []);
  return (
    <section
      ref={containerRef}
      className="flex flex-col items-center justify-between min-h-screen gap-12 mt-16"
    >
      <Marquee items={items} />
      <div className="overflow-hidden font-light text-center contact-text-responsive">
        <p>
          “I love turning <br />
          <span className="font-normal">ideas</span> into{" "}
          <span className="italic">reality</span> <br />
          through <span className="text-gold">code</span>”
        </p>
      </div>
      <Marquee items={items2}  className="text-black bg-transparent border-y-2"
        iconClassName="stroke-gold stroke-2 text-primary"
        icon="material-symbols-light:square"/>
    </section>
  );
};

export default ContactSummary;
