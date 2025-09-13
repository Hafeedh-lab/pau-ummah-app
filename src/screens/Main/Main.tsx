import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

export const Main = (): JSX.Element => {
  const navigationItems = [
    { label: "HOME", href: "#" },
    { label: "ABOUT US", href: "#" },
    { label: "EVENTS", href: "#" },
    { label: "OUR AIM", href: "#" },
  ];

  const prayerTimes = [
    { name: "FAJR", azan: "05:30", prayer: "05:30" },
    { name: "ZUHR", azan: "12:30", prayer: "12:30" },
    { name: "ASR", azan: "4:16", prayer: "4:16" },
    { name: "MAGRIB", azan: "6:58", prayer: "6:58" },
    { name: "ISHA", azan: "8:08", prayer: "8:08" },
    { name: "JUMMAH", azan: "1:45", prayer: "1:45" },
  ];

  const pastEventCards = [
    { title: "IFTAR DINNER", position: "top-[2692px] left-[147px]" },
    { title: "SEMINARS", position: "top-[2692px] left-[591px]" },
    { title: "IFTAR DINNER", position: "top-[2692px] left-[1032px]" },
    { title: "IFTAR DINNER", position: "top-[2946px] left-[147px]" },
    { title: "", position: "top-[2946px] left-[591px]" },
    { title: "", position: "top-[2946px] left-[1032px]" },
    { title: "IFTAR DINNER", position: "top-[3265px] left-[147px]" },
    { title: "", position: "top-[3265px] left-[591px]" },
    { title: "", position: "top-[3265px] left-[1032px]" },
  ];

  const upcomingEvents = [
    {
      title: "ISLAMIC SEMINAR",
      time: "Every Saturday 10:00AM",
      position: "top-[3884px] left-[139px]",
    },
    {
      title: "GAME NIGHT",
      time: "Every Wednesday/After Isha prayer",
      position: "top-[4176px] left-[168px]",
    },
    {
      title: "GAME NIGHT",
      time: "Every Wednesday/After Isha prayer",
      position: "top-[4407px] left-[168px]",
    },
    {
      title: "GAME NIGHT",
      time: "Every Wednesday/After Isha prayer",
      position: "top-[4638px] left-[168px]",
    },
  ];

  const paginationDots = [
    { active: false, opacity: "opacity-[0.66]", position: "left-[483px]" },
    { active: false, opacity: "opacity-[0.34]", position: "left-[743px]" },
  ];

  return (
    <div
      className="bg-white grid justify-items-center [align-items:start] w-screen"
      data-model-id="17:29"
    >
      <div className="bg-white overflow-hidden w-[1440px] h-[5608px] relative">
        {/* Header Contact Bar */}
        <div className="absolute w-[1269px] h-[65px] top-[5px] left-[86px] bg-[#58a44d] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
          <div className="absolute top-[19px] left-[124px] font-medium text-white text-[22px] [font-family:'Montserrat',Helvetica] tracking-[0] leading-[normal]">
            +234 567 889 23
          </div>

          <img
            className="absolute w-[49px] h-[49px] top-3 left-[526px]"
            alt="Ic outline email"
            src="https://c.animaapp.com/mf32ys6aFP0154/img/ic-outline-email.svg"
          />

          <div className="absolute top-[19px] left-[580px] [font-family:'Montserrat',Helvetica] font-normal text-white text-[22px] tracking-[0] leading-[normal]">
            pau.edu.ng
          </div>

          <img
            className="absolute w-7 h-[41px] top-[13px] left-[829px]"
            alt="Vector"
            src="https://c.animaapp.com/mf32ys6aFP0154/img/vector.svg"
          />

          <div className="absolute top-[26px] left-[865px] [font-family:'Montserrat',Helvetica] font-semibold text-white text-xl tracking-[0] leading-[normal] whitespace-nowrap">
            Pan atlantic university Ibeju lekki
          </div>
        </div>

        <div className="absolute top-[-31px] left-[651px] [font-family:'Montserrat',Helvetica] font-bold text-white text-lg tracking-[0] leading-[normal] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
          CONTACT US
        </div>

        {/* Logo and Navigation */}
        <div className="absolute top-[156px] left-[98px] [font-family:'Montserrat',Helvetica] font-bold text-[#34495e] text-xl tracking-[0] leading-[normal] whitespace-nowrap translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
          PAN ATLANTIC UNIVERSITY MOSQUE
        </div>

        <img
          className="absolute w-[42px] h-[42px] top-[140px] left-[54px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]"
          alt="Noto mosque"
          src="https://c.animaapp.com/mf32ys6aFP0154/img/noto-v1-mosque.svg"
        />

        <nav className="inline-flex items-center gap-[30px] absolute top-[159px] left-[577px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
          {navigationItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="relative w-fit mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-bold text-[#34495e] text-lg tracking-[0] leading-[normal] hover:text-[#58a44d] transition-colors cursor-pointer"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <Button className="absolute w-[230px] h-[53px] top-[141px] left-[1180px] bg-[#34495e] hover:bg-[#2c3e50] text-white font-bold text-lg [font-family:'Montserrat',Helvetica] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms] h-auto">
          DONATE NOW
        </Button>

        {/* Hero Section */}
        <div className="absolute w-[1441px] h-[651px] top-[196px] -left-px translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1000ms]">
          <div className="absolute w-[1441px] h-[646px] top-0 left-0">
            <div className="absolute w-[1440px] h-[552px] top-px left-0 bg-[#34495e] rotate-[0.09deg]" />

            <h1 className="absolute w-[583px] top-[133px] left-[72px] [font-family:'Montserrat',Helvetica] font-bold text-white text-[64px] tracking-[0] leading-[normal]">
              WELCOME TO PAU MUSLIM COMMUNITY
            </h1>

            <p className="absolute top-[369px] left-[81px] [font-family:'Montserrat',Helvetica] font-bold text-white text-xl tracking-[0] leading-[normal] whitespace-nowrap">
              A home for muslim students tha attend pan atlantic university
            </p>

            <Button className="absolute w-[292px] h-[50px] top-[427px] left-[81px] bg-white hover:bg-gray-100 text-[#34495e] font-bold text-lg [font-family:'Montserrat',Helvetica] h-auto">
              JOIN OUR COMMUNITY NOW
            </Button>

            <div className="absolute w-[606px] h-[606px] top-4 left-[803px]">
              <img
                className="absolute w-[549px] h-[454px] top-[47px] left-7"
                alt="Vector"
                src="https://c.animaapp.com/mf32ys6aFP0154/img/vector-1.svg"
              />
            </div>
          </div>

          <h2 className="absolute top-[607px] left-[76px] [font-family:'Montserrat',Helvetica] font-bold text-[#34495e] text-4xl tracking-[0] leading-[normal]">
            WELCOME TO THE MASGID
          </h2>
        </div>

        {/* Prayer Timing Section */}
        <div className="absolute top-[602px] left-[971px] text-4xl [font-family:'Montserrat',Helvetica] font-bold text-[#34495e] tracking-[0] leading-[normal] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1200ms]">
          PRAYER TIMING
        </div>

        <div className="flex flex-col w-[130px] gap-5 top-[863px] left-[820px] items-center absolute translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1400ms]">
          <div className="relative self-stretch mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-bold text-[#34495e] text-lg tracking-[0] leading-[normal]">
            Name of salat
          </div>
          {prayerTimes.map((prayer, index) => (
            <div
              key={index}
              className="relative self-stretch [font-family:'Montserrat',Helvetica] font-bold text-[#34495e] text-lg text-center tracking-[0] leading-[normal]"
            >
              {prayer.name}
            </div>
          ))}
          <div className="relative w-12 h-12" />
        </div>

        <div className="flex flex-col w-24 gap-[19px] top-[863px] left-[1046px] items-center absolute translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1600ms]">
          <div className="relative self-stretch mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-bold text-[#34495e] text-lg tracking-[0] leading-[normal]">
            Azan time
          </div>
          {prayerTimes.map((prayer, index) => (
            <div
              key={index}
              className="relative self-stretch font-bold text-[#34495e] text-lg text-center [font-family:'Montserrat',Helvetica] tracking-[0] leading-[normal]"
            >
              {prayer.azan}
            </div>
          ))}
        </div>

        <div className="flex flex-col w-24 gap-[19px] top-[863px] left-[1238px] items-center absolute translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1800ms]">
          <div className="relative w-[114px] mt-[-1.00px] ml-[-9.00px] mr-[-9.00px] text-lg [font-family:'Montserrat',Helvetica] font-bold text-[#34495e] tracking-[0] leading-[normal]">
            Prayer time
          </div>
          {prayerTimes.map((prayer, index) => (
            <div
              key={index}
              className="relative self-stretch font-bold text-[#34495e] text-lg text-center [font-family:'Montserrat',Helvetica] tracking-[0] leading-[normal]"
            >
              {prayer.prayer}
            </div>
          ))}
        </div>

        {/* Our Aim Section */}
        <div className="top-[851px] left-[75px] font-bold text-lg absolute [font-family:'Montserrat',Helvetica] text-black tracking-[0] leading-[normal] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:2000ms]">
          OUR AIM
        </div>

        <div className="absolute w-[645px] top-[874px] left-[75px] [font-family:'Montserrat',Helvetica] font-medium text-[#001f3f] text-xl tracking-[0] leading-[normal] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:2200ms]">
          Norem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
          fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
          elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
          lectus. Class aptent taciti sociosqu ad litora torquent per conubia
          nostra, per inceptos himenaeos. Praesent auctor purus luctus enim
          egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex.
          Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum
          lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in
          elementum tellus.
        </div>

        <Button className="absolute w-[228px] h-[53px] top-[1140px] left-[79px] bg-[#34495e] hover:bg-[#2c3e50] text-white font-bold text-lg [font-family:'Montserrat',Helvetica] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:2400ms] h-auto">
          READ MORE
        </Button>

        {/* What The Mosque Does Section */}
        <h2 className="absolute top-[1446px] left-[157px] [text-shadow:0px_4px_4px_#00000040] [font-family:'Montserrat',Helvetica] font-bold text-[#34495e] text-[32px] tracking-[0] leading-[normal] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:2600ms]">
          WHAT THE MOSQUE DOES
        </h2>

        <img
          className="absolute w-[1105px] h-[609px] top-[1512px] left-[156px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:2800ms]"
          alt="Vector"
          src="https://c.animaapp.com/mf32ys6aFP0154/img/vector-2.svg"
        />

        <div className="absolute w-[77px] h-[79px] top-[1686px] left-[1620px] bg-[#d9d9d9] rounded-[38.5px/39.5px] rotate-[145.88deg]" />

        {/* Pagination Dots */}
        {paginationDots.map((dotGroup, groupIndex) => (
          <div
            key={groupIndex}
            className={`inline-flex gap-5 top-[2134px] ${dotGroup.position} ${dotGroup.opacity} items-center absolute translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:${3000 + groupIndex * 200}ms]`}
          >
            <div className="relative w-[43px] h-[41px] bg-[#34495e] rounded-[21.5px/20.5px]" />
            <div className="relative w-[43px] h-[41px] bg-white rounded-[21.5px/20.5px]" />
            <div className="relative w-[43px] h-[41px] bg-[#34495e] rounded-[21.5px/20.5px]" />
            <div className="relative w-[43px] h-[41px] bg-[#34495e] rounded-[21.5px/20.5px]" />
          </div>
        ))}

        {/* Past Events Section */}
        <h2 className="absolute top-[2547px] left-[550px] [font-family:'Montserrat',Helvetica] font-bold text-[#001f3f] text-[40px] tracking-[0] leading-[normal] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:3400ms]">
          PAST EVENTS
        </h2>

        {pastEventCards.map((card, index) => (
          <Card
            key={index}
            className={`absolute w-[276px] h-[171px] ${card.position} bg-white shadow-[0px_8px_4px_#00000040] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:${3600 + index * 100}ms]`}
          >
            <CardContent className="p-0 h-full flex items-end justify-center pb-4">
              {card.title && (
                <div className="[font-family:'Montserrat',Helvetica] font-bold text-[#001f3f] text-xl tracking-[0] leading-[normal] whitespace-nowrap">
                  {card.title}
                </div>
              )}
              {card.position === "top-[2692px] left-[591px]" && (
                <img
                  className="absolute w-6 h-6 top-[100px] left-[117px]"
                  alt="Iconoir send"
                  src="https://c.animaapp.com/mf32ys6aFP0154/img/iconoir-send.svg"
                />
              )}
            </CardContent>
          </Card>
        ))}

        {/* Upcoming Events Section */}
        <h2 className="absolute top-[3745px] left-[512px] [font-family:'Montserrat',Helvetica] font-bold text-[#001f3f] text-[40px] tracking-[0] leading-[normal] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:4500ms]">
          UPCOMING EVENTS
        </h2>

        {upcomingEvents.map((event, index) => (
          <Card
            key={index}
            className={`absolute w-[1103px] h-[142px] ${event.position} bg-white shadow-[8px_4px_4px_#00000040] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:${4700 + index * 200}ms]`}
          >
            <CardContent className="p-0 h-full">
              {event.position === "top-[4407px] left-[168px]" && (
                <div className="w-[279px] top-[22px] left-[141px] font-medium text-xl absolute [font-family:'Montserrat',Helvetica] text-black tracking-[0] leading-[normal]">
                  OUR VISION
                </div>
              )}
              <div
                className={`absolute w-[512px] ${event.position === "top-[4407px] left-[168px]" ? "top-[53px]" : event.position === "top-[4176px] left-[168px]" ? "top-9" : event.position === "top-[4638px] left-[168px]" ? "top-14" : "top-4"} left-[${event.position === "top-[4407px] left-[168px]" || event.position === "top-[4176px] left-[168px]" || event.position === "top-[4638px] left-[168px]" ? "22px" : "51px"}] [font-family:'Montserrat',Helvetica] font-bold text-[#001f3f] text-2xl tracking-[0] leading-[normal]`}
              >
                {event.title}
              </div>
              <div
                className={`absolute w-[987px] ${event.position === "top-[4407px] left-[168px]" ? "top-[87px]" : event.position === "top-[4176px] left-[168px]" ? "top-[70px]" : event.position === "top-[4638px] left-[168px]" ? "top-[90px]" : "top-[55px]"} left-[${event.position === "top-[4407px] left-[168px]" || event.position === "top-[4176px] left-[168px]" || event.position === "top-[4638px] left-[168px]" ? "22px" : "51px"}] [font-family:'Montserrat',Helvetica] font-bold text-[#001f3f] text-2xl tracking-[0] leading-[normal]`}
              >
                {event.time}
              </div>
            </CardContent>
          </Card>
        ))}

        {/* Footer Section */}
        <div className="absolute top-[5382px] left-[150px] [font-family:'Montserrat',Helvetica] font-bold text-[#001f3f] text-xl tracking-[0] leading-[normal] whitespace-nowrap translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:5500ms]">
          Whether youre a student seeking guidance looking for a place to
          pray,or eager to volunteer-you belong here
        </div>

        <Button className="absolute w-[389px] h-[78px] top-[5454px] left-[280px] bg-[#58a44d] hover:bg-[#4a8c3a] text-[#001f3f] font-bold text-xl [font-family:'Montserrat',Helvetica] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:5700ms] h-auto">
          Volunteer with us
        </Button>

        <Button className="absolute w-[389px] h-[78px] top-[5454px] left-[771px] bg-[#58a44d] hover:bg-[#4a8c3a] text-[#001f3f] font-bold text-xl [font-family:'Montserrat',Helvetica] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:5900ms] h-auto">
          Join our whatsapp group
        </Button>
      </div>
    </div>
  );
};
