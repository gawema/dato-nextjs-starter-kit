import { HiOutlineMail } from 'react-icons/hi';
import { Copy } from '../Typography/Copy/Copy';
import { H3 } from '../Typography/Headings/Headings';

export const NewsletterSubscriptionWebform = async ({
  newsletterFormActionUrl,
  pretitle,
  title,
  emailLabel,
  buttonLabel,
}: {
  newsletterFormActionUrl?: string;
  pretitle: string;
  title: string;
  emailLabel: string;
  buttonLabel: string;
}) => {
  if (!newsletterFormActionUrl) {
    return null;
  }

  return (
    <div>
      <Copy size="small">{pretitle}</Copy>
      <H3>{title}</H3>
      <form
        target="_blank"
        action={newsletterFormActionUrl}
        className="relative mt-6 flex flex-col gap-6 md:flex-row md:items-end lg:items-end"
      >
        <div className="xl:w-full">
          <label htmlFor="email" className="flex items-center gap-1 text-sm font-bold">
            {emailLabel}
          </label>
          <div className="relative">
            <input
              id="email"
              className="not-disabled placeholder:text-primary-400 text-primary-400 bg-primary block w-full border-0 border-b py-2 pr-4 pl-0 text-lg leading-7 font-light transition duration-200 ease-in-out focus:ring-0 focus:outline-none xl:w-full"
              name="email"
              placeholder=""
              type="email"
              defaultValue=""
            />
          </div>
        </div>
        <div className="w-full md:w-auto">
          <button className="border-primary bg-primary hover:text-primary transition-all flex h-[45px] cursor-pointer items-center gap-1 border px-4 text-black duration-150 ease-linear hover:border-black hover:bg-black">
            <HiOutlineMail />
            <span>{buttonLabel}</span>
          </button>
        </div>
      </form>
    </div>
  );
};
