import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import { MDXProvider } from '@mdx-js/react';
import Nav from './nav';
import Footer from './footer';
import ThemeSwitch from './themeSwitch';


function Layout({ pageOpts, children }) {
  const { route } = useRouter();
  const { pageMap } = pageOpts;

  const extractMdxPages = (items) => {
    return items.reduce((mdxPages, item) => {
      if (item.kind === 'MdxPage') {
        mdxPages.push(item);
      } else if (item.children) {
        mdxPages.push(...extractMdxPages(item.children));
      }
      return mdxPages;
    }, []);
  };

  const postsFolder = pageMap.find(item => item.kind === 'Folder' && item.name === 'posts');

  let Posts = null;
  let LatestPost = null;

  if (postsFolder) {
    const postsMdxPages = extractMdxPages(postsFolder.children);

    // Get the latest post (assuming postsMdxPages is already sorted by date)
    // const latestPost = postsMdxPages[0];
    const latestPosts = postsMdxPages.filter(post => post.name !== 'index').slice(0, 3); // Change the number to the desired count

    LatestPost = (
      <div>
      <h2>Latest Posts:</h2>
      <ul>
        {latestPosts.map(post => (
          <li key={post.route}>
            <Link href={post.route}>
              {post.frontMatter.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
    );

    // Exclude the 'index' page from the list of posts
    const filteredPosts = postsMdxPages.filter(item => item.name !== 'index');

    Posts = (
      <ul>
        {filteredPosts.map(item => (
          <li key={item.route}>
            <Link href={item.route}>
              {item.frontMatter.title}
            </Link>
          </li>
        ))}
      </ul>
    );
  }

  const isPostPage = route === '/posts';

  return (
    <div className="flex flex-col min-h-screen dark:border-white">
      <Head>
        <title>{pageOpts.title}</title>
        <link rel="icon" href="./favicon.png" />
      </Head>
      <div className="flex flex-col prose prose-slate dark:prose-invert flex-grow container mx-auto mb-6 w-full"> 
        <main className="flex-grow">
          <h1>{pageOpts.title}</h1>
          <Nav />
          <article>
            {(!isPostPage || route === '/posts') && (
              <MDXProvider
                components={{
                  h1: (props) => <h1 {...props} />,
                  pre: ({ filename, ...props }) => (
                    <div>
                      {filename && <div>{filename}</div>}
                      <pre {...props} />
                    </div>
                  ),
                }}
              >
                {children}
              </MDXProvider>
            )}
            {route === '/' && LatestPost}
            {isPostPage && Posts}
          </article>
        </main>
      <Footer />
      </div>
    </div>
  );
}

export default function Theme(props) {
  const { route } = useRouter();
  const context = globalThis.__nextra_pageContext__[route];
  if (!context) throw new Error(`No content found for ${route}.`);
  const { pageOpts, Content } = context;

  return (
    <Layout pageOpts={pageOpts}>
      <Content {...props} />
    </Layout>
  );
}
