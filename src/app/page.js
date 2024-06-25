import {Pixelify_Sans} from 'next/font/google';
import { Noto_Sans_SignWriting } from 'next/font/google';

const pixelifySans = Pixelify_Sans({weight: ['400'], subsets: ['latin']});
const notoSans = Noto_Sans_SignWriting({weight: ['400'], subsets: ['latin-ext']});

export default function Home() {
  return (
    <main className="p-12">
      <div className="space-y-6">
        <h1 className="text-3xl font-semibold mb-6">An Introduction to Next.js</h1>
        <p className={pixelifySans.className}>
          Next.js is a powerful React framework that enables developers to build highly optimized, fast, and user-friendly web applications. Created by Vercel, Next.js provides a comprehensive set of tools and features that enhance the development experience and improve performance.
        </p>

        <h2>What is Next.js?</h2>
        <p className={notoSans.className}>
          Next.js is a React-based framework that offers server-side rendering (SSR), static site generation (SSG), and client-side rendering (CSR). It simplifies the process of building complex applications by providing out-of-the-box features such as routing, code-splitting, and server-side rendering. These capabilities allow developers to create dynamic, fast, and SEO-friendly web applications.
        </p>

        <h2>Key Features of Next.js</h2>
        <ul className="space-y-3">
          <li><strong>Server-Side Rendering (SSR):</strong> Next.js allows for server-side rendering, which means pages are rendered on the server before being sent to the client. This results in faster initial page loads and better SEO.</li>
          <li><strong>Static Site Generation (SSG):</strong> With SSG, Next.js generates static HTML files at build time. This is ideal for content-heavy sites where the content does not change frequently.</li>
          <li><strong>API Routes:</strong> Next.js enables developers to create API endpoints directly within the application, providing a full-stack development experience.</li>
          <li><strong>Automatic Code Splitting:</strong> Next.js automatically splits code into smaller bundles, ensuring that only the necessary code is loaded, which improves performance.</li>
          <li><strong>Image Optimization:</strong> The framework includes built-in image optimization, reducing the size of images and enhancing load times.</li>
        </ul>

        <h2>Why Use Next.js?</h2>
        <p>
          Next.js offers several advantages over other frameworks and libraries. Its server-side rendering and static site generation capabilities ensure that applications are fast and SEO-friendly. The automatic code splitting and image optimization features contribute to better performance and user experience. Additionally, the framework&apos;s simplicity and developer-friendly features, such as file-based routing and API routes, make it a popular choice among developers.
        </p>

        <h2>Conclusion</h2>
        <p>
          In conclusion, Next.js is a versatile and powerful framework that brings the best of React to the table while adding its own unique features. Whether you are building a static website, a server-rendered application, or a combination of both, Next.js provides the tools and capabilities needed to create high-performance web applications. Its growing popularity and strong community support make it an excellent choice for modern web development.
        </p>
      </div>
    </main>
  );
}
