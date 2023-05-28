import React from "react";
import dummyImage from "../../../assets/images/posts/post1.jpg";
import dummyImage2 from "../../../assets/images/posts/post2.jpg";
import { useRecoilValue } from "recoil";
import { eventData } from "../../../Atoms/selectors";
import { getImage } from "../../../utils";
import moment from "moment";
import ScrollAnimation from "react-animate-on-scroll";

const Events = () => {
  const data = useRecoilValue(eventData);

  return (
    <div className="event_cont bg-[#d9f0f7] min-h-[400px] md:pt-4 md:pb-16 py-4 pb-12 animatedParent">
      <div className="wrapper">
        <div className="flex flex-col lg:px-4 xl:px-0 md:px-4 px-4">
          <div className="flex-row flex justify-start w-full items-center py-8">
            <h2 className="text-[26px] font-bold">Upcoming Events</h2>
          </div>

          <div className="flex flex-row  gap-4 md:justify-start md:flex-nowrap flex-wrap justify-center">
            {data?.length ? (
              data?.map((d: any, index: number) => {
                const date = moment(d.eventDate).format("MMM-DD");
                const [month, day] = date.split("-");

                return (
                  <ScrollAnimation
                    initiallyVisible={true}
                    animateOnce
                    className="md:max-w-[300px] sm:max-w-[48%] max-w-full w-full bg-white rounded-lg overflow-hidden cursor-pointer"
                    animateIn="animate__fadeInLeft"
                    delay={(index + 1) * 250}
                  >
                    <div>
                      <img
                        src={getImage(d.mainImage.asset._ref)}
                        alt="this is an image"
                        className="block w-full h-[200px] object-cover"
                      />
                    </div>
                    <div className="flex flex-row py-4">
                      <div className="flex-col flex px-6 items-center">
                        <div className="uppercase text-[16px] text-[#09546d]">
                          {month}
                        </div>
                        <span className="font-bold text-[35px]">{day}</span>
                      </div>
                      <div className="px-4 pl-0">
                        <h3 className="font-bold text-[14px] mb-2">
                          {d?.title}
                        </h3>
                        <p className="text-sm font-thin">
                          {d?.shortDescription}
                        </p>
                      </div>
                    </div>
                  </ScrollAnimation>
                );
              })
            ) : (
              <div>No event added!</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
