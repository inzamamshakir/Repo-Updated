import { LinkProps } from '@/src/common-types';
import { CustomLink } from '@/src/components/custom-link';
import { cn } from '@/src/utils/shadcn';

interface CategoryListProps {
  links: LinkProps[];
}

export const categoryListData: CategoryListProps = {
  links: [
    {
      label: 'Blockchain',
      href: '/blog/category/blockchain',
    },
    {
      label: 'Business Advice',
      href: '',
    },
    {
      label: 'Stock market',
      href: '',
    },
    {
      label: 'Regular start',
      href: '',
    },
    {
      label: 'Regular start',
      href: '/nothing',
    },
  ],
};

const linkClasses = cn(
  'transition-colors duration-400 hover:text-primary ease-in-out'
);

export function CategoryList({ links }: CategoryListProps) {
  return (
    <div className="space-y-5 rounded-5 bg-accent-100 p-8 dark:bg-accent-700 lg:p-10">
      <h3 className="font-secondary text-md font-bold leading-[1.25] text-accent-900 dark:text-white md:text-lg">
        Categories
      </h3>
      {links && links.length > 0 && (
        <nav aria-label="footer links navigation">
          <ul className="grid gap-2.5 divide-y divide-accent-700/20 dark:divide-accent-200/20">
            {links.map((link, index) => (
              <li
                key={index}
                className="flex items-center gap-2.5 pt-2.5 first:pt-0"
              >
                <span className="grid h-3 w-3 place-items-center border border-primary">
                  <span className="block h-0.5 w-0.5 bg-primary"></span>
                </span>
                <CustomLink href={`${link.href}`} className={linkClasses}>
                  {link.label}
                </CustomLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}
