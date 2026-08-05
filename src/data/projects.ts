export interface Project {
  slug: string
  name: string
  category: string
  tagline: string
  description: string
  tech: string[]
  link?: string
  linkLabel?: string
}

export const PROJECTS: Project[] = [
  {
    slug: 'sarahs-sweet-delights',
    name: "Sarah's Sweet Delights",
    category: 'Coursework',
    tagline: 'WordPress and WooCommerce bakery storefront',
    description:
      'A full ecommerce site for a bakery business, built on WordPress and WooCommerce. Over 50 products, cart and checkout, customer accounts, and order management, localized for Malaysian customers with RM pricing. I handled the responsive layout, Yoast SEO, Wordfence security, UpdraftPlus backups, and cache tuning that cut Speed Index from 1.7s to 0.9s.',
    tech: ['WordPress', 'WooCommerce', 'PHP', 'MySQL', 'Nginx'],
  },
  {
    slug: 'pricepoint',
    name: 'PricePoint',
    category: 'Coursework',
    tagline: 'Pricing decision tool for small businesses',
    description:
      'A Spring Boot web app that helps Malaysian micro and small businesses see their real margin on every product, not just their monthly revenue. Includes a break-even calculator, a what-if simulator, multi-product comparison, and a dashboard that leads with whichever finding matters most. Backed by 43 automated tests, containerised with a multi-stage Docker build and deployed to Railway.',
    tech: ['Spring Boot', 'Spring Security', 'MySQL', 'Thymeleaf', 'Docker'],
  },
  {
    slug: 'driveeasy-motors',
    name: 'DriveEasy Motors',
    category: 'Coursework',
    tagline: 'Used car marketplace with bidding',
    description:
      'A Spring Boot marketplace for buying and selling used cars, with separate user and admin roles, a two-step bid approval workflow, test drive booking, image uploads, and multi-criteria search across the listings.',
    tech: ['Spring Boot', 'Spring Security', 'Thymeleaf', 'MySQL'],
  },
  {
    slug: 'novadrive-motors',
    name: 'NovaDrive Motors',
    category: 'Coursework',
    tagline: 'React car marketplace with social login',
    description:
      'A second take on a car marketplace, this time as a React single-page app with Google and Facebook sign-in, car listings you can add and edit, a search page, and a personal dashboard for your own listings.',
    tech: ['React', 'OAuth', 'JWT'],
  },
]
