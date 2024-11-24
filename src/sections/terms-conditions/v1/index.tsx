import { SocialItemProps, blurDataUrl } from '@/src/common-types';
import { Container } from '@/src/components/container';
import { CustomLink } from '@/src/components/custom-link';
import { cn } from '@/src/utils/shadcn';
import Image from 'next/image';
import {
  FaLinkedinIn,
  FaQuoteRight,
  FaRegComments,
  FaRegFolderOpen,
  FaRegUser,
  FaReply,
  FaTags,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from 'react-icons/fa6';

const socialLinks: SocialItemProps[] = [
  {
    icon: <FaFacebookF />,
    href: 'https://www.facebook.com/',
  },
  {
    icon: <FaTwitter />,
    href: 'https://twitter.com/',
  },
  {
    icon: <FaInstagram />,
    href: 'https://www.instagram.com/',
  },
  {
    icon: <FaLinkedinIn />,
    href: 'https://www.linkedin.com/',
  },
];

const linkClasses = cn(
  'transition-colors duration-400 hover:text-primary ease-in-out inline'
);

export function TermsConditionsSection() {
  return (
    <section className="section-padding-primary">
      <Container>
        <div className="grid gap-30px lg:grid-cols-[1fr_410px]">
          <div>
            <div className="[&_p+P]:mt-4">
              <Image
                src="/assets/images/blog/blog-details-1.png"
                alt="blog single 1"
                width={850}
                height={538}
                placeholder="blur"
                blurDataURL={blurDataUrl}
                sizes="100vw"
              />

              {/* Meta  */}
              <ul
                aria-label="blog meta list"
                className="mb-4 mt-6 flex flex-wrap items-center gap-x-[1.125rem] gap-y-2 lg:mb-5 lg:mt-30px"
              >
                <li className="flex items-center gap-2.5">
                  <span className="flex-none text-sm text-primary">
                    <FaRegUser />
                  </span>
                  <span>
                    By{' '}
                    <CustomLink href="#" className={linkClasses}>
                      admin
                    </CustomLink>
                  </span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="flex-none text-sm text-primary">
                    <FaRegFolderOpen />
                  </span>
                  <CustomLink href="#" className={linkClasses}>
                    Category
                  </CustomLink>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="flex-none text-sm text-primary">
                    <FaRegComments />
                  </span>
                  <span>
                    <CustomLink href="#" className={linkClasses}>
                      Comments (05)
                    </CustomLink>
                  </span>
                </li>
              </ul>

              <div className="my-4 h-px bg-body/30 lg:my-5"></div>
              <p>
                Aliquam eros justo, posuere loborti viverra laoreet matti
                ullamcorper posuere viverra .Aliquam eros justo, posuere
                lobortis, viverra laoreet augue mattis fermentum ullamcorper
                viverra laoreet Aliquam eros justo, posuere loborti viverra
                laoreet matti ullamcorper posuere viverra .Aliquam eros justo,
                posuere lobortis non, viverra laoreet augue mattis.Aliquam eros
                justo, posuere loborti viverra laoreet matti ullamcorper posuere
                viverra .Aliquam eros justo, posuere lobortis, viverra laoreet
                augue mattis fermentum ullamcorper viverra laoreet Aliquam eros
                justo, posuere loborti viverra laoreet matti ullamcorper posuere
                viverra .Aliquam eros justo, posuere lobortis non, viverra
                laoreet augue mattis ullamcorper posuere viverra laoreet augue
                mattis.
              </p>

              <blockquote className="my-30px grid gap-5 rounded-5 bg-accent-100 py-10 text-center dark:bg-accent-700 lg:px-[70px]">
                <span className="mx-auto grid h-[50px] w-[50px] place-items-center rounded-full bg-white text-[1.25rem] text-primary dark:bg-accent-900">
                  <FaQuoteRight />
                </span>
                <p className="font-secondary text-md font-medium leading-[1.25] md:text-lg">
                  With a commitment to driving technological evolution, our IT
                  solutions and services are the cornerstone of your digital
                  progression. We transcend boundaries, enabling businesses to
                  not
                </p>
                <div className="mt-3 text-accent-700 dark:text-white">
                  <h3 className="h3">Stanio lainto</h3>
                  <p>Authore</p>
                </div>
              </blockquote>
              <p>
                Aliquam eros justo, posuere loborti viverra laoreet matti
                ullamcorper posuere viverra .Aliquam eros justo, posuere
                lobortis non, viverra laoreet augue mattis fermentum ullamcorper
                viverra laoreet Aliquam eros justo, posuere.
              </p>
              <p>
                Aliquam eros justo, posuere loborti viverra laoreet matti
                ullamcorper posuere viverra .Aliquam eros justo, posuere
                lobortis, viverra laoreet augue mattis fermentum ullamcorper
                viverra laoreet Aliquam eros justo, posuere loborti viverra
                laoreet matti ullamcorper posuere viverra .Aliquam eros justo,
                posuere lobortis non.
              </p>
              <Image
                src="/assets/images/blog/blog-details-2.png"
                alt="blog single 2"
                width={850}
                height={352}
                placeholder="blur"
                blurDataURL={blurDataUrl}
                sizes="100vw"
                className="mb-30px mt-[60px] block rounded-5"
              />
              <p>
                Aliquam eros justo, posuere loborti viverra lao ullamcorper
                posuere viverra .Aliquam eros justo, posuere lobortis non,
                viverra laoreet augue mattis start fermentum ullamcor viverra
                laoreet By Admin . Creativity . 28th February 2022 . Leave a
                comment viverra laoreet augue mattis start fermentum star.
              </p>
              <p>
                Aliquam eros justo, posuere loborti viverra laoreet matti
                ullamcorper posuere viverra .Aliquam eros justo, posuere
                lobortis, viverra laoreet augue mattis fermentum ullamcorper
                viverra laoreet Aliquam eros justo, posuere loborti viverra
                laoreet matti ullamcorper posuere viverra .Aliquam eros justo,
                posuere lobortis non.
              </p>
              <div className="my-10 flex flex-wrap items-center justify-between gap-x-5 gap-y-2.5 rounded-5 bg-accent-100 px-30px py-6 dark:bg-accent-700">
                <div className="flex items-center gap-2.5">
                  <span className="text-primary">
                    <FaTags />
                  </span>
                  <div className="inline-flex flex-wrap gap-1">
                    <span>
                      <CustomLink href="#" className={linkClasses}>
                        Marketing
                      </CustomLink>
                      ,
                    </span>
                    <span>
                      <CustomLink href="#" className={linkClasses}>
                        branding
                      </CustomLink>
                      ,
                    </span>
                    <span>
                      <CustomLink href="#" className={linkClasses}>
                        corporate
                      </CustomLink>
                      ,
                    </span>
                    <span>
                      <CustomLink href="#" className={linkClasses}>
                        business
                      </CustomLink>
                    </span>
                  </div>
                </div>
                {socialLinks && socialLinks.length > 0 && (
                  <nav aria-label="social links">
                    <ul className="inline-flex items-center gap-4  text-primary">
                      {socialLinks.map((socialLink, index) => (
                        <li key={index}>
                          <CustomLink
                            className="block text-base/[1.75] transition-transform duration-350 hover:-translate-y-1"
                            href={socialLink.href}
                            openNewTab
                          >
                            <span>{socialLink.icon}</span>
                          </CustomLink>
                        </li>
                      ))}
                    </ul>
                  </nav>
                )}
              </div>
            </div>
          </div>
          <div className="grid gap-30px self-baseline max-md:mx-auto max-md:max-w-[410px] lg:gap-10"></div>
        </div>
      </Container>
    </section>
  );
}
