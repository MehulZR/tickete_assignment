"use client";
import * as RadixAccordion from "@radix-ui/react-accordion";

interface accordionInterface {
  title: string;
  description: string;
}
interface accordionInterfaceArray {
  items: accordionInterface[];
}
export default function Accordion({ items }: accordionInterfaceArray) {
  return (
    <RadixAccordion.Root type="multiple" className="flex flex-col divide-y">
      {items.map((item, i) => {
        return (
          <RadixAccordion.Item
            key={i}
            value={item.title}
            className="overflow-hidden"
          >
            <RadixAccordion.Header>
              <RadixAccordion.Trigger className="flex items-center justify-between w-full py-6 text-lg font-semibold text-left group text-textPrimary">
                {item.title}
                <div className="relative">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="absolute top-0 left-0 w-5 h-5 rotate-90 group-data-[state=open]:rotate-180 transition-transform"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </RadixAccordion.Trigger>
            </RadixAccordion.Header>
            <RadixAccordion.Content className="text-textSecondary overflow-hidden data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
              <div className="pb-6">{item.description}</div>
            </RadixAccordion.Content>
          </RadixAccordion.Item>
        );
      })}
    </RadixAccordion.Root>
  );
}
