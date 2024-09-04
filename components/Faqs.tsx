import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faqs = () => {
  return (
    <section className="py-8 px-4 bg-black text-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">FAQ</h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>How do I make a backup?
            </AccordionTrigger>
            <AccordionContent>
            To make a backup, please do the following:

1. Open One Key app.
2. Once inside the app, click on Menu icon on top left corner and click on Backup/Restore.
3. Click on BACKUP button.

The backup will be created in phone's internal storage under onekey_backup folder. Please remember that a backup is always protected by a password which is same as your master password at the time of backup. The Auto backup feature available for premium users creates automatic backups based on a certain chosen internal. This ensures that you will always have a backup in case of any event of data loss.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is it styled?</AccordionTrigger>
            <AccordionContent>
              Yes. It comes with default styles that match the other
              components&apos; aesthetic.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Is it animated?</AccordionTrigger>
            <AccordionContent>
              Yes. It&apos;s animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default Faqs;