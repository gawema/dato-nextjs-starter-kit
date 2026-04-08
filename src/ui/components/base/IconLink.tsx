import { ElementType, HTMLAttributeAnchorTarget } from 'react';
import { Link } from '../helpers/Link';

interface IProps {
  Icon: ElementType;
  url: string;
  target?: HTMLAttributeAnchorTarget;
}

export const IconLink = ({ Icon, url, target }: IProps) => {
  return (
    <Link
      href={url}
      target={target}
      className="hover:text-pear transition-all duration-150 ease-linear"
    >
      <Icon />
    </Link>
  );
};
