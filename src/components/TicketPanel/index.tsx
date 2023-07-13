import TicketCard from "./TicketCard";
import TicketOverview from "./TicketOverview";
export default function TicketPanel() {
  return (
    <div className="flex flex-col items-center flex-shrink-0 basis-72 lg:basis-80 gap-9">
      <h1 className="w-full mb-5 text-5xl text-left sm:hidden text-textPrimary">
        Confirm and pay
      </h1>

      <TicketCard />
      <div className="h-[1px] w-full bg-border"></div>
      <TicketOverview />
    </div>
  );
}
