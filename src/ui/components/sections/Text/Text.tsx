import { htmlToReact } from '@/lib/data/transformers/htmlToReact';
import { Container } from '../../helpers/Container';
import { Copy } from '../../Typography/Copy/Copy';
import { H5, HDisplay } from '../../Typography/Headings/Headings';

interface IProps {
  id?: string;
  pretitle?: string;
  title?: string;
  text?: string;
}

export const Text = ({ id, pretitle, title, text }: IProps) => {
  return (
    <section className="c-text bg-yellow py-12 text-center" id={id}>
      <Container size="2xl">
        <div className="flex flex-col gap-10">
          {pretitle && <H5 className="text-black">{pretitle}</H5>}
          {title && <HDisplay as="h2">{title}</HDisplay>}
          {text && (
            <Copy className="text-black" size="large">
              {htmlToReact(text)}
            </Copy>
          )}
        </div>
      </Container>
    </section>
  );
};
