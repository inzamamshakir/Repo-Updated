'use client';
import { useParams } from 'next/navigation';
import { Button } from '@/src/components/button';
import { Container } from '@/src/components/container';
import { CustomLink } from '@/src/components/custom-link';
import { TextInput } from '@/src/components/inputs/text-input';
import { cn } from '@/src/utils/shadcn';
import Image from 'next/image';
import {
  FaArrowRight,
  FaMagnifyingGlass,
  FaRegComments,
  FaRegFolderOpen,
  FaRegUser,
} from 'react-icons/fa6';
import { Author, authorData } from '@/data/blog-section/blogs/author';
import {
  CategoryList,
  categoryListData,
} from '@/data/blog-section/blogs/categories';
import { blogs } from '@/data/blog-section/blogs';

function SearchBox() {
  return (
    <div className="space-y-5 rounded-5 bg-accent-100 p-8 dark:bg-accent-700 lg:p-10">
      <h3 className="font-secondary text-md font-bold leading-[1.25] text-accent-900 dark:text-white md:text-lg">
        Searach
      </h3>
      <div className="flex items-center gap-0">
        <TextInput
          placeholder="Your name"
          name="text"
          className="rounded-5 rounded-r-none border-none bg-white dark:bg-accent-900"
        />
        <Button
          type="submit"
          className={cn('!h-[60px] !w-[60px] flex-none rounded-l-none !p-0')}
        >
          <span className="relative z-1">
            <FaMagnifyingGlass />
          </span>
        </Button>
      </div>
    </div>
  );
}

interface TagwidgetProps {
  tags: string[];
}

const tagwidgetData: TagwidgetProps = {
  tags: ['All Project', 'Stand', 'Regularly', 'Startup', 'Productsline'],
};

function Tagswidget({ tags }: TagwidgetProps) {
  return (
    <div className="space-y-5 rounded-5 bg-accent-100 p-8 dark:bg-accent-700 lg:p-10">
      <h3 className="font-secondary text-md font-bold leading-[1.25] text-accent-900 dark:text-white md:text-lg">
        Tags
      </h3>
      {tags && tags.length > 0 && (
        <nav aria-label="tags">
          <ul className="flex flex-wrap gap-5">
            {tags.map((tag, index) => (
              <li
                key={index}
                className="inline-flex min-h-[2.5rem] cursor-pointer items-center rounded-5 border border-accent-900/20 px-2.5 py-0.5 text-accent-800 transition-colors duration-300 hover:border-transparent hover:bg-primary hover:text-white dark:border-none dark:bg-accent-900 dark:text-body  dark:hover:bg-primary dark:hover:text-white"
              >
                {tag}
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}

// Repeated styles
const paginationItemClasses = cn(
  'grid h-[65px] w-[65px] place-items-center border border-[#3b3b3b] bg-accent-700 font-secondary text-base font-bold text-white rounded-full transition-colors duration-300 hover:bg-primary hover:border-primary'
);

const linkClasses = cn(
  'transition-colors duration-400 hover:text-primary ease-in-out'
);

export function CategoryListSection() {
  const params = useParams(); // Get the dynamic route parameter
  const category = params?.categories;

  if (typeof category !== 'string') {
    return <p>Category Not Found. Please try again.</p>;
  }

  const filteredBlogs = blogs.filter((blog) =>
    blog.categories.includes(category)
  );

  console.log(filteredBlogs, 'Filtered Blogs');

  return (
    <section className="section-padding-primary">
      <Container>
        <div className="grid gap-30px lg:grid-cols-[1fr_410px]">
          <div>
            {filteredBlogs && filteredBlogs.length > 0 && (
              <div className="grid gap-10 lg:gap-20">
                {filteredBlogs.map(
                  (
                    {
                      slug,
                      image,
                      authorName,
                      categories,
                      commentCount,
                      title,
                      description,
                    },
                    index
                  ) => (
                    <article key={index} className="group">
                      <figure
                        className={cn(
                          // General
                          'relative z-1 overflow-hidden rounded-5',

                          // after => image overlay effect
                          'after:pointer-events-none after:absolute after:left-0 after:top-0 after:z-1 after:h-0 after:w-full after:bg-white/30 after:opacity-100',
                          // hover
                          'group-hover:transition-all group-hover:after:h-full group-hover:after:opacity-0 group-hover:after:duration-400 group-hover:after:ease-linear'
                        )}
                      >
                        <Image
                          src={image.src}
                          alt={image.alt}
                          width={850}
                          height={575}
                          sizes="100vw"
                          className="object-cover transition-transform duration-500 [transform:scale(1.05)] group-hover:[transform:scale(1)]"
                        />
                      </figure>

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
                              {authorName}
                            </CustomLink>
                          </span>
                        </li>
                        <li className="flex items-center gap-2.5">
                          <span className="flex-none text-sm text-primary">
                            <FaRegFolderOpen />
                          </span>
                          <CustomLink href="" className={linkClasses}>
                            {categories}
                          </CustomLink>
                        </li>
                        <li className="flex items-center gap-2.5">
                          <span className="flex-none text-sm text-primary">
                            <FaRegComments />
                          </span>
                          <span>
                            <CustomLink href="#" className={linkClasses}>
                              Comments ({commentCount})
                            </CustomLink>
                          </span>
                        </li>
                      </ul>
                      <h3 className="font-secondary text-lg font-bold leading-[1.25] text-accent-900 dark:text-white md:text-xl">
                        <CustomLink
                          href={slug}
                          className={cn(
                            linkClasses,
                            'text-accent-900 hover:text-primary dark:text-white dark:hover:text-primary'
                          )}
                        >
                          {title}
                        </CustomLink>
                      </h3>
                      <div className="my-4 h-px bg-body/30 lg:my-5"></div>
                      <p>{description}</p>
                      <Button
                        asChild
                        className={cn([
                          // Layout
                          'mt-6 rounded-5 border border-primary bg-transparent text-accent-900 hover:text-primary dark:hover:text-primary lg:mt-30px',
                          'after:hidden',
                        ])}
                      >
                        <CustomLink href={slug}>
                          <span className="relative z-1">Read More</span>
                          <span className="relative top-[-2px] z-1 text-sm/[1] text-primary transition-colors duration-300">
                            <svg
                              width="1em"
                              height="1em"
                              viewBox="0 0 12 12"
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M11.8125 5.75C11.8125 6.24219 11.4023 6.65234 10.9375 6.65234H7V10.5898C7 11.0547 6.58984 11.4375 6.125 11.4375C5.63281 11.4375 5.25 11.0547 5.25 10.5898V6.65234H1.3125C0.820312 6.65234 0.4375 6.24219 0.4375 5.75C0.4375 5.28516 0.820312 4.90234 1.3125 4.90234H5.25V0.964844C5.25 0.472656 5.63281 0.0625 6.125 0.0625C6.58984 0.0625 7 0.472656 7 0.964844V4.90234H10.9375C11.4023 4.875 11.8125 5.28516 11.8125 5.75Z" />
                            </svg>
                          </span>
                        </CustomLink>
                      </Button>
                    </article>
                  )
                )}
                <div>
                  <ul
                    className="flex flex-wrap items-center justify-center gap-3 md:gap-5"
                    aria-label="pagination"
                  >
                    <li>
                      <a
                        className={paginationItemClasses}
                        href="#"
                        aria-label="pagination button"
                        role="button"
                      >
                        01
                      </a>
                    </li>
                    {/* <li>
                      <a
                        className={paginationItemClasses}
                        href="#"
                        aria-label="pagination button"
                        role="button"
                      >
                        02
                      </a>
                    </li>
                    <li>
                      <a
                        className={paginationItemClasses}
                        href="#"
                        aria-label="pagination button"
                        role="button"
                      >
                        03
                      </a>
                    </li> */}
                    <li>
                      <a
                        className={cn(
                          paginationItemClasses,
                          'border-primary bg-primary'
                        )}
                        href="#"
                        aria-label="pagination button"
                        role="button"
                      >
                        <FaArrowRight />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
          <div className="grid gap-30px self-baseline max-md:mx-auto max-md:max-w-[410px] lg:gap-10">
            <Author {...authorData} />
            <SearchBox />
            <CategoryList {...categoryListData} />
            <Tagswidget {...tagwidgetData} />
          </div>
        </div>
      </Container>
    </section>
  );
}
