import { AuthorProps } from "@/src/common-types";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa6";
import Image from 'next/image';
import { CustomLink } from '@/src/components/custom-link';



export const authorData: AuthorProps = {
  image: {
    src: '/assets/images/blog/author-1.png',
    alt: 'author image 1',
  },
  name: 'Naturials paul',
  about:
    'Aliquam eros justo, posuere lobort viverra lao ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis non',
  socialLinks: [
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
  ],
};


export function Author({ image, name, about, socialLinks }: AuthorProps) {
  return (
    <div className="space-y-5 rounded-5 bg-accent-100 p-8 text-center dark:bg-accent-700 lg:p-10">
      <Image
        {...image}
        alt={image.alt || name}
        width={127}
        height={127}
        className="mx-auto rounded-full object-cover"
      />
      <h3 className="font-secondary text-lg font-bold leading-[1.25] text-accent-900 dark:text-white md:text-xl">
        {name}
      </h3>
      <p>{about}</p>
      {socialLinks && socialLinks.length > 0 && (
        <nav aria-label="social links">
          <ul className="inline-flex items-center divide-x divide-accent-800/50 text-accent-900  dark:divide-accent-100/50 dark:text-white">
            {socialLinks.map((socialLink, index) => (
              <li key={index}>
                <CustomLink
                  className="block px-4 text-base/[1.75]  transition-transform duration-350 hover:-translate-y-1 hover:text-primary"
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
  );
}
