import { htmlToReact } from '@/lib/data/transformers/htmlToReact';
import * as RadixAccordion from '@radix-ui/react-accordion';
import { AiOutlineMinus as MinusIcon, AiOutlinePlus as PlusIcon } from 'react-icons/ai';
import { Container } from '../../helpers/Container';
import { Copy } from '../../Typography/Copy/Copy';
import { H2 } from '../../Typography/Headings/Headings';

interface IProps {
  id?: string;
  title?: string;
  items: { id: string; title: string; subtitle?: string; body: string }[];
}

export const Accordion = ({ id, title, items }: IProps) => {
  return (
    <section className="c-accordion py-12 xl:py-16" id={id}>
      <Container size="2xl">
        <div className="grid grid-cols-12 gap-x-4 lg:gap-x-6">
          <div className="col-span-full mb-6 lg:col-span-3 lg:mb-0">{title && <H2>{title}</H2>}</div>

          <div className="col-span-full lg:col-span-9">
            <RadixAccordion.Root type="multiple">
              {items.map((item) => (
                <RadixAccordion.Item
                  value={item.id}
                  key={item.id}
                  className="group border-t border-neutral-200 last:border-b"
                >
                  <RadixAccordion.Trigger className="flex w-full cursor-pointer flex-col-reverse gap-2 py-4 text-left md:flex-row md:items-center md:justify-between md:py-8 lg:pr-6 lg:pl-12">
                    <div className="flex flex-col items-start self-start">
                      <Copy className="font-bold">{item.title}</Copy>
                      {item.subtitle && <Copy size="small">{item.subtitle}</Copy>}
                    </div>
                    <div className="flex h-10 w-10 items-center justify-center self-end overflow-hidden rounded-full bg-neutral-200 text-neutral-600">
                      <div className="relative h-4 w-4">
                        <PlusIcon className="absolute inset-0 group-data-[state=closed]:opacity-100 group-data-[state=open]:opacity-0" />
                        <MinusIcon className="absolute inset-0 group-data-[state=closed]:opacity-0 group-data-[state=open]:opacity-100" />
                      </div>
                    </div>
                  </RadixAccordion.Trigger>
                  <RadixAccordion.Content className="data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown overflow-hidden">
                    <div className="pt-4 pb-8 md:pt-8 md:pb-16 lg:pr-24 lg:pl-12">
                      <Copy>{htmlToReact(item.body)}</Copy>
                    </div>
                  </RadixAccordion.Content>
                </RadixAccordion.Item>
              ))}
            </RadixAccordion.Root>
          </div>
        </div>
      </Container>
    </section>
  );
};
