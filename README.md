This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Vehiql - AI-Powered Car Marketplace

A modern, professional car marketplace application built with Next.js, featuring AI-powered search and a clean, consistent design system.

## 🚀 Features

- **AI-Powered Search**: Search for cars using text or upload images for AI recognition
- **Professional UI**: Clean design with consistent spacing and professional color scheme
- **Responsive Design**: Seamlessly works across all devices and screen sizes
- **Advanced Filtering**: Browse cars by make, model, body type, price range, and more
- **User Authentication**: Secure sign-in and registration with Clerk
- **Wishlist System**: Save and manage your favorite car listings
- **Test Drive Booking**: Schedule test drives online with flexible timing
- **Real-time Updates**: Live search results and instant feedback

## 🛠 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Radix UI primitives with shadcn/ui
- **Authentication**: Clerk for secure user management
- **Database**: Supabase for data storage
- **Image Processing**: AI-powered car recognition and analysis
- **File Upload**: React Dropzone for image handling
- **Notifications**: Sonner for toast notifications
- **Deployment**: Vercel for seamless deployment

## 🎨 Design System

### Color Palette
- **Primary Blue**: `#2563eb` - Main brand color
- **Secondary Gray**: `#64748b` - Text and subtle elements
- **Accent Orange**: `#f97316` - Call-to-action elements
- **Success Green**: `#059669` - Success states
- **Neutral Tones**: `#f8fafc` to `#0f172a` - Backgrounds and text

### Spacing System
- **Section Spacing**: 4rem (mobile) / 6rem (desktop)
- **Container Spacing**: 1rem (mobile) / 2rem (desktop) with max-width 1200px
- **Card Spacing**: 1.5rem (mobile) / 2rem (desktop)
- **Element Spacing**: 1rem standard, 2rem for large gaps

## 📁 Project Structure

```
├── app/                          # Next.js app directory
│   ├── (auth)/                   # Authentication pages
│   ├── globals.css               # Global styles and design system
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Homepage
├── components/                   # Organized component library
│   ├── cards/                    # Card components
│   │   └── car-card.tsx          # Individual car listing card
│   ├── common/                   # Shared components
│   │   └── car-list.tsx          # Car listing grid
│   ├── forms/                    # Form components
│   │   └── home-search.tsx       # Main search component
│   ├── layout/                   # Layout components
│   │   ├── header.tsx            # Site header
│   │   └── footer.tsx            # Site footer
│   └── ui/                       # Base UI components (shadcn/ui)
├── lib/                          # Utility functions
│   ├── data.ts                   # Mock data and constants
│   ├── supabase.ts               # Database configuration
│   └── utils.ts                  # Helper functions
├── actions/                      # Server actions
│   └── home.ts                   # Homepage-related actions
├── hooks/                        # Custom React hooks
│   └── use-fetch.ts              # Data fetching hook
└── public/                       # Static assets
    ├── make/                     # Car brand logos
    └── body/                     # Car body type images
```

## 🚦 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Supabase account (for database)
- Clerk account (for authentication)

### Installation

1. **Clone the repository:**
```bash
git clone <repository-url>
cd car-marketplace
```

2. **Install dependencies:**
```bash
npm install
# or
yarn install
```

3. **Set up environment variables:**
```bash
cp .env.example .env.local
```

Add your environment variables:
```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_key
CLERK_SECRET_KEY=your_clerk_secret
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_key
```

4. **Run the development server:**
```bash
npm run dev
# or
yarn dev
```

5. **Open your browser:**
Navigate to [http://localhost:3000](http://localhost:3000)

## 🎯 Key Components

### CarCard Component
Professional car listing card with:
- High-quality image display
- Consistent pricing format
- Wishlist functionality
- Hover effects and transitions

### HomeSearch Component
Advanced search interface featuring:
- Text-based search
- AI image recognition
- Drag-and-drop file upload
- Real-time validation

### Design System Classes
- `.professional-card` - Standard card styling
- `.btn-primary` / `.btn-secondary` - Button variants
- `.heading-xl` / `.heading-lg` / `.heading-md` - Typography scale
- `.section-spacing` - Consistent section padding
- `.container-spacing` - Container with proper margins

## 🔧 Development Guidelines

### Code Organization
- Components are organized by function (cards, forms, layout, common)
- Each component has a single responsibility
- Consistent naming conventions throughout
- TypeScript for type safety

### Styling Approach
- Custom CSS classes for design system consistency
- Tailwind utilities for specific adjustments
- Professional color palette with CSS variables
- Responsive design with mobile-first approach

### Performance Optimizations
- Next.js Image component for optimized images
- Lazy loading for car listings
- Efficient state management
- Minimal bundle size with tree shaking

## 🚀 Deployment

The application is optimized for deployment on Vercel:

```bash
npm run build
npm run start
```

For other platforms, ensure environment variables are properly configured.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes following the established patterns
4. Commit your changes: `git commit -m 'Add amazing feature'`
5. Push to the branch: `git push origin feature/amazing-feature`
6. Open a Pull Request

### Code Style
- Use TypeScript for all new components
- Follow the established design system
- Maintain consistent spacing and naming
- Add proper error handling and loading states

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide React](https://lucide.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
