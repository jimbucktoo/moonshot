# Startup Evaluation Platform

A comprehensive web application built with Next.js and React that helps entrepreneurs evaluate their startup ideas through AI-powered analysis and insights.

## 🏗 Architecture Overview

### Tech Stack
- **Frontend Framework**: Next.js 14 with React 18
- **Styling**: Tailwind CSS with shadcn/ui components
- **Type Safety**: TypeScript
- **State Management**: React Hooks (useState)
- **Routing**: Next.js App Router
- **UI Components**: Radix UI primitives with shadcn/ui

### Project Structure

├── app/                    # Next.js app directory
│   ├── evaluate/          # Evaluation flow pages
│   │   ├── product-overview/     # Product info collection
│   │   ├── product-goal/        # Goals and milestones
│   │   ├── innovation-feasibility/ # Technical evaluation
│   │   ├── team-organization/   # Team assessment
│   │   ├── business-model/      # Business plan analysis
│   │   ├── report/             # Final evaluation report
│   │   └── thank-you/          # Processing page
│   ├── features/          # Features showcase page
│   ├── auth/             # Authentication pages
│   └── layout.tsx        # Root layout
├── components/           # Reusable components
│   ├── ui/              # UI component library
│   ├── nav-header.tsx   # Navigation header
│   ├── survey-progress.tsx # Progress indicator
│   ├── evaluation-form.tsx # Main evaluation form
│   └── evaluation-report.tsx # Results display
├── styles/              # Global styles
└── public/             # Static assets

## 🔄 Core Features & Flows

### 1. Evaluation Process
- Multi-step form with 6 key sections:
  1. Product Overview
  2. Product Goals & Planning
  3. Innovation & Technical Feasibility
  4. Team & Organization
  5. Business Model
  6. Partnerships & Support

- Each section captures specific aspects:
  - Product validation
  - Market analysis
  - Technical assessment
  - Team capabilities
  - Business viability

### 2. User Interface Components

#### Navigation Header (`nav-header.tsx`)
- Consistent branding
- Authentication links
- Main navigation menu

#### Survey Progress (`survey-progress.tsx`)
- Visual progress tracking
- Step completion indicators
- Navigation between sections

#### Evaluation Form (`evaluation-form.tsx`)
- Form state management with React hooks
- Multi-step form validation
- Data collection and persistence

## 💡 Key Technical Features

### 1. State Management
- React hooks for form state
- Step progression tracking
- Data persistence between steps

### 2. Form Validation
- Required field validation
- Input format checking
- Cross-field validation rules

### 3. UI/UX Considerations
- Responsive design
- Loading states
- Error handling
- Progress preservation

## 🎨 Design System

### Colors
- Primary: #17b7ba (Teal)
- Background: #f6f3f3 (Light Gray)
- Text Primary: #000000
- Text Secondary: #666666

### Component Styling
- Consistent spacing
- Typography scale
- Color harmony
- Interactive states

## 🚀 Development Setup

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation & Development

```bash
# Install dependencies (use --legacy-peer-deps due to date-fns version conflict)
npm install --legacy-peer-deps

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Note: We use --legacy-peer-deps flag during installation to resolve dependency conflicts between date-fns and react-day-picker packages. 