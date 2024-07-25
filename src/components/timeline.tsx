import { TIMELINE, TimelineEvent } from "@/config";
import { FC } from "react";

type TimelineProps = {
  events?: TimelineEvent[];
};

const Timeline: FC<TimelineProps> = ({ events = TIMELINE }) => {
  return (
    <section>
      <h2 className="mb-4 text-3xl font-bold">Experience</h2>
      <div className="relative">
        <div className="absolute left-1/2 h-full -translate-x-1/2 transform border-l-2 border-slate-500/50"></div>
        {events.map((event, index) => (
          <TimelineItem key={index} event={event} isLeftAligned={index % 2 === 0} />
        ))}
      </div>
    </section>
  );
};

type TimelineItemProps = {
  event: TimelineEvent;
  isLeftAligned: boolean;
};
const TimelineItem: FC<TimelineItemProps> = ({ event, isLeftAligned }) => {
  return (
    <article className={`flex ${isLeftAligned ? "flex-row-reverse" : "flex-row"} relative items-center py-4`}>
      <div className="flex-1 border border-slate-500/50"></div>
      <div
        className={`absolute left-1/2 order-1 h-4 w-4 -translate-x-1/2 transform rounded-full bg-yellow-800/50 ${isLeftAligned ? "-ml-7" : "ml-7"}`}
      />
      <div className={`flex flex-1 ${isLeftAligned ? "flex-row-reverse" : "flex-row"}`}>
        <div className={`flex items-center ${isLeftAligned ? "flex-row-reverse" : "flex-row"}`}>
          <div
            className={`mx-4 flex-1 rounded-lg px-6 py-4 shadow-sm shadow-slate-500 ${isLeftAligned ? "ml-8" : "mr-8"} backdrop-blur-xl`}
          >
            <h3 className="mb-2 text-lg font-light">{event.title}</h3>
            <p className="text-xs font-light">{event.content}</p>
          </div>
          <div
            className={`order-2 flex aspect-square items-center justify-center rounded-full border border-slate-500/50 p-3 shadow-md shadow-slate-300/30 backdrop-blur-xl ${isLeftAligned ? "ml-4" : "mr-4"}`}
          >
            <span className="text-xs text-white">{event.date}</span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Timeline;
