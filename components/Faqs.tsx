import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import '../app/sf-pro.css';

const Faqs = () => {
  return (
    <section className="py-8 px-4 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">FAQ</h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>How do I make a backup?
            </AccordionTrigger>
            <AccordionContent>
              You can make a backup by going to the settings and selecting the
              backup option.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Are the passwords synced across devices </AccordionTrigger>
            <AccordionContent>
            no, the passwords are stored on the device and never leave the device
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>How to Import passwords</AccordionTrigger>
            <AccordionContent>
              You can import passwords by going to the settings and selecting
              the import option.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default Faqs;