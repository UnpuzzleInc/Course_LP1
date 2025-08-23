# Hero Section Requirements Document

## Overview
This document outlines the requirements to recreate the Landio website hero section pixel-perfect using Next.js and Tailwind CSS.

## Design Specifications

### 1. Layout Structure
- **Container**: Full width with max-width of 1200px centered
- **Content Alignment**: Center-aligned text content
- **Layout Type**: Flexbox column layout
- **Vertical Stacking**: Hero content stacked vertically

### 2. Color Palette
- **Background**: Dark navy/black (#04070d)
- **Primary Gradient**: Radial gradient with subtle transparency
- **Text Colors**: 
  - Primary text: White (#ffffff)
  - Secondary text: Light gray (#9ca3af or similar)
- **Accent Colors**: To be determined from button hover states

### 3. Typography
- **Font Family**: Inter (Google Font)
- **Main Headline**: 
  - Font size: ~72px desktop, ~48px mobile
  - Font weight: Bold (700-800)
  - Line height: 1.1
- **Subtitle/Description**: 
  - Font size: ~20px desktop, ~18px mobile
  - Font weight: Regular (400)
  - Line height: 1.6
  - Color: Lighter gray for contrast

### 4. Components

#### Navigation Bar
- **Position**: Fixed or absolute at top
- **Background**: Transparent or semi-transparent
- **Items**: Logo, menu items, CTA button
- **Style**: Minimal, clean design

#### Hero Content
- **Headline**: Large, impactful statement (2-3 lines max)
- **Subtitle**: Supporting description (1-2 lines)
- **CTA Buttons**: 
  - Primary button with gradient or solid fill
  - Secondary button (optional) with outline style
  - Border radius: 36px
  - Padding: ~16px 32px
  - Hover effects with smooth transitions

#### Visual Elements
- **Background Pattern**: Subtle gradient mesh or noise texture
- **Radial Gradients**: Multiple overlapping for depth
- **Optional**: Abstract shapes or illustrations

### 5. Spacing Guidelines
- **Section Padding**: 
  - Top: 100px (accounting for navbar)
  - Bottom: 80px
  - Horizontal: 40px on larger screens, 20px on mobile
- **Element Gaps**:
  - Between headline and subtitle: 24px
  - Between subtitle and buttons: 44px
  - Between buttons: 16px

### 6. Animations & Interactions
- **On Load**: Fade-in animation for text content
- **Button Hover**: Scale transform or background color change
- **Smooth Transitions**: 300ms ease for all interactive elements
- **Optional**: Parallax scroll effects for background elements

### 7. Responsive Design
- **Breakpoints**:
  - Mobile: < 640px
  - Tablet: 640px - 1024px
  - Desktop: > 1024px
- **Mobile Adjustments**:
  - Reduced font sizes
  - Stack buttons vertically
  - Adjust padding/margins
  - Simplified background effects

### 8. Technical Implementation

#### Required Components
1. `Hero.tsx` - Main hero section component
2. `Navigation.tsx` - Top navigation bar
3. `Button.tsx` - Reusable button component
4. `GradientBackground.tsx` - Background effects component

#### Tailwind Extensions Needed
```javascript
// tailwind.config.js additions
theme: {
  extend: {
    colors: {
      'dark-navy': '#04070d',
      // Add more custom colors
    },
    backgroundImage: {
      'radial-gradient': 'radial-gradient(...)',
      // Add custom gradients
    },
    animation: {
      'fade-in': 'fadeIn 0.5s ease-in',
      // Add custom animations
    }
  }
}
```

### 9. Assets Required
- Logo (SVG preferred)
- Any decorative icons
- Background patterns/textures (if applicable)
- Font files (Inter from Google Fonts)

### 10. Performance Considerations
- Optimize images and use next/image
- Lazy load non-critical elements
- Minimize CSS bundle size
- Use CSS-in-JS only when necessary
- Implement proper SEO meta tags

## Implementation Checklist

- [ ] Set up Inter font from Google Fonts
- [ ] Configure Tailwind with custom colors and gradients
- [ ] Create Navigation component
- [ ] Build Hero section layout
- [ ] Implement responsive design
- [ ] Add animations and transitions
- [ ] Create reusable Button component
- [ ] Implement background effects
- [ ] Test on multiple devices
- [ ] Optimize performance

## Notes
- The exact text content needs to be confirmed by viewing the live site
- Some visual effects may require custom CSS beyond Tailwind utilities
- Consider using Framer Motion for complex animations
- Ensure accessibility standards are met (WCAG 2.1 AA)