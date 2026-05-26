import Image from "next/image";
import ThemeToggle from "../components/ThemeToggle";
import SparkleButton from "@/components/SparkleButton";

export default function Home() {
  return (

    <div className="relative">
      {/* Theme Toggle  */}
      <div className="absolute top-0 right-0">
        <ThemeToggle />
      </div>

      <div className="grid grid-cols-1 gap-12 md:grid-cols-[2fr_1fr]">
      {/* Left */}
      <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50">
        <main className="flex flex-1 w-full max-w-3xl flex-col gap-13 items-center justify-between py-10 sm:py-32 px-0 xl:px-12 bg-white dark:bg-black sm:items-start">
          {/* Intro */}
          <section>
            <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">Portfolio</h1>
            <p className="text-lg text-stone-500">I’m looking for my next role in <strong>frontend development</strong> or <strong>e-commerce replatforming</strong>. If you’re hiring:</p>
            
            
            {/* <span className="not-prose relative inline-block mt-6">
              <span className="transition-opacity duration-500 opacity-100"></span>
              <a href="https://www.linkedin.com/in/katrine-ren-69705a83/" target="_blank" rel="noopener noreferrer"
                className="relative z-1 inline-flex items-center rounded-md px-4 py-2 text-base font-medium no-underline bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]">Let's talk</a>
            </span> */}
            <SparkleButton href="https://www.linkedin.com/in/katrine-ren-69705a83/" theme='dark'>Let's talk</SparkleButton>

           
            
          </section>
          {/* Work */}
          <section className="flex flex-col gap-4 text-left sm:items-start">
            <h2 className="max-w-xs text-2xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
              Work
            </h2>
            <ul className="list-disc ml-5">
              <li className="text-lg text-stone-500">
                <a href="https://reebok.com.au/" className="font-medium text-zinc-950 dark:text-zinc-50" target="_blank" rel="noopener noreferrer">Reebok AU</a> Shopify Replatforming | Theme, Storefront, Shoppable Journey, custom JSON templates for drag-n-drop CMS </li>
              <li className="text-lg text-stone-500">
                <a href="https://hushpuppies.com.au/" className="font-medium text-zinc-950 dark:text-zinc-50" target="_blank" rel="noopener noreferrer">Hush Puppies</a> Shopify Replatforming | Spearheaded the frontend Shopify migration for Hush Puppies, delivering a high-performance Liquid storefront with custom product layouts, customer account profile, shopping cart and an asynchronous mini-cart to optimize the shopping journey.</li>
                <li className="text-lg text-stone-500">
                <a href="https://volley.com/" className="font-medium text-zinc-950 dark:text-zinc-50" target="_blank" rel="noopener noreferrer">Volley</a> Shopify Replatforming Project | Architected the end-to-end Shopify Liquid storefront for the Hush Puppies replatforming, engineering dynamic product pages (PLP/PDP) and a seamless AJAX-driven mini-cart.
              </li>
              <li className="text-lg text-stone-500"><a href="https://www.davidjones.com/careers" className="font-medium text-zinc-950 dark:text-zinc-50" target="_blank" rel="noopener noreferrer">David Jones Career Hub</a> | also the showcase of the <a href="https://www.davidjones.com/careers" className="font-medium text-zinc-950 dark:text-zinc-50" target="_blank" rel="noopener noreferrer">custom Cloudinary video player plugin</a> architected and built by me, applying Cloudinary SDK & HLS adpative streaming</li>
              <li className="text-lg text-stone-500"><a href="https://www.davidjones.com/services/beauty-services" className="font-medium text-zinc-950 dark:text-zinc-50" target="_blank" rel="noopener noreferrer">David Jones Beauty Service Booking</a> | Enable content to be self-managed in Google Sheets by store service team with modernised UI</li>
              <li className="text-lg text-stone-500"><a href="https://www.davidjones.com/services/fashion-services" className="font-medium text-zinc-950 dark:text-zinc-50" target="_blank" rel="noopener noreferrer">David Jones Fashion Service Booking</a>  | Enable content to be self-managed in Google Sheets by store service team with modernised UI</li>
              <li className="text-lg text-stone-500"><a href="https://www.davidjones.com/credit-card" className="font-medium text-zinc-950 dark:text-zinc-50" target="_blank" rel="noopener noreferrer">David Jones Credit Card Hub</a> | Built and maintained</li>
              <li className="text-lg text-stone-500"><a href="https://www.davidjones.com/blog/fragrance-layering" className="font-medium text-zinc-950 dark:text-zinc-50" target="_blank" rel="noopener noreferrer">Fragrance Layering Blog Post</a> | one of the most popular David Jones blog posts with JuxtaposeJS sliders, ranking in Top 4 Google Search results for keyword "fragrance layering"</li>
              <li className="text-lg text-stone-500"><a href="https://www.davidjones.com/blog/trends-to-know-in-2026/" className="font-medium text-zinc-950 dark:text-zinc-50" target="_blank" rel="noopener noreferrer">Trends To Know 2026</a> | one of the high-engagment David Jones blog posts with Slick carousels and ranked in Top 4 Google Search results for keyword "trends 2026"</li>
              <li className="text-lg text-stone-500"><a href="https://www.davidjones.com/blog/gifting/in-the-year-of-the-horse-your-2026-chinese-zodiac-predictions/" className="font-medium text-zinc-950 dark:text-zinc-50" target="_blank" rel="noopener noreferrer">Year of Horse Horoscope Blog Post</a> | one of the most high-engaging David Jones blog posts with gamified zodiac spinning wheels</li>
            </ul>
          </section>
        </main>
      </div>
      {/* Right sidebar */}
      <div className="py-10 sm:py-32">
        <h2 className="text-2xl font-semibold text-black dark:text-zinc-50 pb-8">About Me</h2>
        <p className="text-stone-500">
          <Image
            className="float-left mt-0! mr-7 mb-2 w-[3lh] lg:w-[5lh] rounded-full"
            src="/profile.png"
            alt="Katrine Ren's profile picture"
            width={500}
            height={500}
            priority
          />
          Hey, I am Katrine, a Web Developer with 5 years of experience in fashion retail and e-commerce, specialising in Shopify development, frontend performance, and CMS-driven solutions. I bring end-to-end ownership, a get-it-done attitude, and a track record of delivering high-impact digital experiences at scale — from re-platforming retail storefronts to measurable SEO and performance wins.
        </p>
        {/* Contact */}
          <section className="flex gap-4 text-sm font-medium sm:flex-row mt-10">
            <SparkleButton href="https://github.com/rmit-s3617315-Katrine-Ren/my-portfolio" theme="dark">GitHub</SparkleButton>
            <SparkleButton href="https://www.linkedin.com/in/katrine-ren-69705a83/" theme="light">LinkedIn</SparkleButton>
          </section>
      </div>
    </div>
    </div>
  
  );
}
