import { htmlToReact } from '@/lib/data/transformers/htmlToReact';
import { IImage, IImageLink, ILink } from '@/ui/types/commonTypes';
import { HiOutlineLocationMarker, HiOutlineMail, HiOutlinePhone } from 'react-icons/hi';
import Image from 'next/image';
import { Anchor } from '../base/Anchor';
import { Container } from '../helpers/Container';
import { Link } from '../helpers/Link';
import { Copy } from '../Typography/Copy/Copy';
import { NewsletterSubscriptionWebform } from './NewsletterSubscriptionWebform';

interface IProps {
  logo: IImage;
  intro: string;
  info: string;
  socials: ILink[];
  addressLine1?: string;
  addressLine2?: string;
  phone?: string;
  email?: string;
  partnersLogos: IImageLink[];
  newsletterFormActionUrl?: string;
  addressLink?: string;
  contactLabel?: string;
  nlPretitle: string;
  nlTitle: string;
  nlEmailLabel: string;
  nlButtonLabel: string;
}

export const Footer = ({
  logo,
  intro,
  info,
  socials,
  addressLine1,
  addressLine2,
  phone,
  email,
  partnersLogos,
  newsletterFormActionUrl,
  addressLink,
  contactLabel,
  nlPretitle,
  nlTitle,
  nlEmailLabel,
  nlButtonLabel,
}: IProps) => {
  return (
    <footer className="bg-primary py-16" id="page-footer">
      <Container size="2xl">
        <div className="flex flex-col items-start gap-4 lg:flex-row lg:justify-between lg:gap-8">
          <div className="relative w-full max-w-[225px] md:max-w-[330px]">
            <Image
              src={logo.src}
              alt="Site logo"
              width={logo.dimensions?.width}
              height={logo.dimensions?.height}
              className="h-auto w-full"
            />
          </div>
          <div className="lg:w-1/2 lg:flex-none">
            <Copy className="text-black">{htmlToReact(intro)}</Copy>
          </div>
        </div>
        <div className="mt-12 flex flex-col lg:flex-row lg:items-start lg:justify-between lg:gap-8">
          <div>
            <div>{htmlToReact(info)}</div>
            {newsletterFormActionUrl && (
              <div className="mt-20 mb-12">
                <NewsletterSubscriptionWebform
                  newsletterFormActionUrl={newsletterFormActionUrl}
                  pretitle={nlPretitle}
                  title={nlTitle}
                  emailLabel={nlEmailLabel}
                  buttonLabel={nlButtonLabel}
                />
              </div>
            )}
            {partnersLogos[0] && (
              <div className="mt-12 hidden max-w-[180px] lg:block">
                <Link href={partnersLogos[0].linkUrl} target={partnersLogos[0].linkTarget}>
                  <Image
                    src={partnersLogos[0].src}
                    alt={partnersLogos[0].alt}
                    width={partnersLogos[0].dimensions?.width}
                    height={partnersLogos[0].dimensions?.height}
                    className="h-auto w-full"
                  />
                </Link>
              </div>
            )}
          </div>
          <div className="mt-12 flex flex-col justify-between gap-12 lg:mt-0 lg:w-1/2 lg:flex-none lg:flex-row lg:gap-16">
            <div className="flex flex-col gap-4">
              <h3 className="mb-4 text-sm font-bold">Social Media</h3>
              {socials.map((item) => (
                <Anchor key={item.href} href={item.href} target={item.target} className="text-lg">
                  {item.title}
                </Anchor>
              ))}
            </div>
            <div>
              <h3 className="mb-6 text-sm font-bold">{contactLabel ?? 'Contact'}</h3>
              <div className="flex flex-col gap-4">
                <div className="flex gap-2">
                  <HiOutlineLocationMarker className="mt-1" />
                  {addressLink ? (
                    <Link href={addressLink} target="_blank" className="block">
                      {addressLine1}
                      <br />
                      {addressLine2}
                    </Link>
                  ) : (
                    <div>
                      {addressLine1}
                      <br />
                      {addressLine2}
                    </div>
                  )}
                </div>
                <div className="flex gap-2">
                  <HiOutlinePhone className="mt-1" />
                  <Anchor href={`tel:${phone ?? ''}`}>{phone}</Anchor>
                </div>
                <div className="flex gap-2">
                  <HiOutlineMail className="mt-1" />
                  <Anchor href={`mailto:${email ?? ''}`}>{email}</Anchor>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-8">
          <div className="grid grid-cols-3 items-end justify-between gap-6 md:flex lg:w-1/2 lg:justify-start lg:gap-9">
            {partnersLogos[1] && (
              <div className="relative w-full md:max-w-[180px]">
                <Link href={partnersLogos[1].linkUrl} target={partnersLogos[1].linkTarget}>
                  <Image
                    src={partnersLogos[1].src}
                    alt={partnersLogos[1].alt}
                    width={partnersLogos[1].dimensions?.width}
                    height={partnersLogos[1].dimensions?.height}
                    className="h-auto w-full"
                  />
                </Link>
              </div>
            )}
            {partnersLogos[0] && partnersLogos[2] && (
              <div className="relative w-full md:max-w-[180px]">
                <div className="lg:hidden">
                  <Link href={partnersLogos[0].linkUrl} target={partnersLogos[0].linkTarget}>
                    <Image
                      src={partnersLogos[0].src}
                      alt={partnersLogos[0].alt}
                      width={partnersLogos[0].dimensions?.width}
                      height={partnersLogos[0].dimensions?.height}
                      className="h-auto w-full"
                    />
                  </Link>
                </div>
                <div className="mt-4">
                  <Link href={partnersLogos[2].linkUrl} target={partnersLogos[2].linkTarget}>
                    <Image
                      src={partnersLogos[2].src}
                      alt={partnersLogos[2].alt}
                      width={partnersLogos[2].dimensions?.width}
                      height={partnersLogos[2].dimensions?.height}
                      className="h-auto w-full"
                    />
                  </Link>
                </div>
              </div>
            )}
            {partnersLogos[3] && (
              <div className="relative flex w-full justify-center md:max-w-[180px] md:justify-start">
                <div className="w-[75%] lg:w-[75%]">
                  <Link href={partnersLogos[3].linkUrl} target={partnersLogos[3].linkTarget}>
                    <Image
                      src={partnersLogos[3].src}
                      alt={partnersLogos[3].alt}
                      width={partnersLogos[3].dimensions?.width}
                      height={partnersLogos[3].dimensions?.height}
                      className="h-auto w-full"
                    />
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </Container>
    </footer>
  );
};
