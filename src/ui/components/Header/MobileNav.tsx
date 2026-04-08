'use client';

import { ICmsSettings } from '@/lib/data/types/cms';
import { TLocales, i18n } from '@/lib/config/config';
import { useGSAP } from '@gsap/react';
import classNames from 'classnames';
import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';
import { IoClose, IoMenu } from 'react-icons/io5';
import { ScrollLink, IScrollLink } from '../base/ScrollLink';
import { Container } from '../helpers/Container';
import { Link } from '../helpers/Link';

gsap.registerPlugin(useGSAP);

interface IProps {
  links: IScrollLink[];
  currentLang: TLocales;
  settings: ICmsSettings;
}

export const MobileNav = ({ links, currentLang, settings }: IProps) => {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
  const menuPanelRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const tlRef = useRef<GSAPTimeline | null>(null);

  useEffect(() => {
    if (mobileMenuIsOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [mobileMenuIsOpen]);

  useGSAP(
    () => {
      tlRef.current = gsap
        .timeline({ paused: true })
        .to(menuPanelRef.current, {
          x: 0,
          duration: 0.6,
          ease: 'power3.inOut',
        })
        .fromTo(
          '.link',
          { opacity: 0, y: 8 },
          { opacity: 1, y: 0, stagger: 0.1, duration: 0.3 },
          '>-0.2',
        );
    },
    { scope: containerRef },
  );

  const openMenu = () => {
    setMobileMenuIsOpen(true);
    tlRef.current?.restart();
  };

  const closeMenu = () => {
    setMobileMenuIsOpen(false);
    tlRef.current?.reverse();
  };

  return (
    <div ref={containerRef} className="lg:hidden">
      <Container className="flex items-center justify-center text-center">
        <button
          className="flex items-center gap-(--spacing-sm) rounded-full border border-neutral-300 px-(--spacing-md) py-(--spacing-sm) leading-6 font-bold text-neutral-600"
          onClick={openMenu}
        >
          <IoMenu className="text-2xl" />
          <span>Menu</span>
        </button>
      </Container>

      <div className="bg-primary fixed inset-0 z-50 translate-x-full lg:hidden" ref={menuPanelRef}>
        <div className="flex h-full w-full flex-col items-center justify-between gap-32 pt-8 pb-16">
          <div>
            <button
              className="border-primary-400 flex items-center gap-(--spacing-sm) rounded-full border px-(--spacing-md) py-(--spacing-sm) leading-6 font-bold text-neutral-600"
              onClick={closeMenu}
            >
              <IoClose className="text-2xl" />
              <span>Close</span>
            </button>
          </div>
          <nav className="h-full max-h-[350px]">
            <ul className="flex h-full flex-col items-center justify-between uppercase">
              {links.map((item) => (
                <li key={item.id}>
                  <ScrollLink
                    url={item.url}
                    label={item.label}
                    postClickHandler={closeMenu}
                    additionalClasses="link"
                  />
                </li>
              ))}
              <li>
                <ScrollLink
                  url="#page-footer"
                  label={settings.locallang.contact_menu ?? 'Contact'}
                  postClickHandler={closeMenu}
                  additionalClasses="link"
                />
              </li>
            </ul>
          </nav>
          <div className="flex gap-2 uppercase">
            {Object.entries(i18n.routes).map(([key, value]) => (
              <Link
                key={key}
                href={value}
                className={classNames({ 'opacity-20': key === currentLang })}
              >
                {key}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
