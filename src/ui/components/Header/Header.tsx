'use client';

import { ICmsSettings } from '@/lib/data/types/cms';
import { TLocales, i18n } from '@/lib/config/config';
import { IImage } from '@/ui/types/commonTypes';
import classNames from 'classnames';
import Image from 'next/image';
import { ScrollLink, IScrollLink } from '../base/ScrollLink';
import { Container } from '../helpers/Container';
import { Link } from '../helpers/Link';
import { MobileNav } from './MobileNav';

interface IProps {
  logo: IImage;
  links: IScrollLink[];
  currentLang: TLocales;
  settings: ICmsSettings;
}

export const Header = ({ logo, links, currentLang, settings }: IProps) => {
  const validLinks = links.filter((item) => item.label !== '' && item.url !== '');

  return (
    <header className="py-6 lg:py-4">
      <Container size="2xl" className="hidden lg:block">
        <nav>
          <ul className="flex items-center justify-between uppercase">
            {validLinks.map((item) => (
              <li key={item.id}>
                <ScrollLink url={item.url} label={item.label} />
              </li>
            ))}

            <li>
              <ScrollLink url="#page-footer" label={settings.locallang.contact_menu ?? 'Contact'} />
            </li>

            <li className="flex gap-2 uppercase">
              {Object.entries(i18n.routes).map(([key, value]) => (
                <Link
                  key={key}
                  href={value}
                  className={classNames({ 'opacity-20': key === currentLang })}
                >
                  {key}
                </Link>
              ))}
            </li>
          </ul>
        </nav>
      </Container>

      <MobileNav links={validLinks} currentLang={currentLang} settings={settings} />

      <div className="mt-12 flex justify-center">
        <div className="w-3/5 max-w-[450px] min-w-[210px]">
          <Image
            src={logo.src}
            alt="Site Logo"
            width={logo.dimensions?.width}
            height={logo.dimensions?.height}
            className="h-auto w-full"
          />
        </div>
      </div>
    </header>
  );
};
