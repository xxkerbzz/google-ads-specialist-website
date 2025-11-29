# LeadGen Ads - Google Ads Specialist Website

A professional website for a freelance Google Ads specialist focusing on local lead generation for service-based businesses.

## Features

### Pages
- **Homepage** - Compelling hero section with value proposition, stats, problem/solution framework, and services preview
- **Services** - Detailed service offerings including Google Search Ads, Local Service Ads, and Display Remarketing with pricing
- **Case Studies** - 6 detailed case studies showcasing real results across different service industries
- **About** - Personal story, credentials, values, and working process
- **Contact** - Contact form with industry selection and FAQ section

### Design Features
- Fully responsive design optimized for all devices
- Professional color scheme (Blue/Gray) perfect for B2B services
- Clear call-to-actions throughout
- Navigation with active states
- Consistent footer across all pages
- Tailwind CSS for styling

### SEO Optimization
- Meta tags for all pages
- OpenGraph tags for social sharing
- Semantic HTML structure
- Descriptive page titles and descriptions
- Keyword optimization

### Target Audience
- HVAC companies
- Plumbers
- Electricians
- Roofers
- Landscapers
- Home remodeling contractors
- Pest control services
- Cleaning services

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Deployment Ready:** Vercel, Netlify, or any Node.js hosting

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
app/
├── page.tsx              # Homepage
├── services/
│   └── page.tsx         # Services page
├── case-studies/
│   └── page.tsx         # Case studies page
├── about/
│   └── page.tsx         # About page
├── contact/
│   └── page.tsx         # Contact page
├── layout.tsx           # Root layout with SEO metadata
└── globals.css          # Global styles
```

## Customization

### Update Business Information
1. Change "LeadGen Ads" branding throughout the site
2. Update contact information in footer components
3. Modify email/phone in contact page
4. Adjust pricing on services page
5. Update case study data with real client results

### Styling
- Colors can be modified in `tailwind.config.ts`
- Global styles in `app/globals.css`
- Component-specific styles use Tailwind utility classes

## Form Integration

The contact form currently simulates submission. To integrate with a real backend:

1. Add form submission handler in `app/contact/page.tsx`
2. Options include:
   - Formspree
   - SendGrid
   - Mailchimp
   - Custom API endpoint
   - Email service API

## Deployment

### Vercel (Recommended)
```bash
npx vercel
```

### Netlify
1. Connect your Git repository
2. Build command: `npm run build`
3. Publish directory: `.next`

## Future Enhancements

- Blog section for SEO content
- Client testimonials slider
- Video testimonials
- Live chat integration
- Google Ads performance calculator
- Email newsletter signup
- Mobile menu for responsive navigation

## License

This project is open source and available for modification.
