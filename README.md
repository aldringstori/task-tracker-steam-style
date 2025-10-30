# Steam Task Tracker - Next.js + TypeScript

A modern task tracking application built with Next.js 14, TypeScript, and Steam-inspired design.

## 🚀 Features

- ✅ **Next.js 14** with App Router
- ✅ **TypeScript** for type safety
- ✅ **Built-in Hot Reload** (no configuration needed!)
- ✅ **Steam-Style Header** with navigation and dropdowns
- ✅ **Profile & Statistics** with levels and achievements
- ✅ **LocalStorage** for data persistence
- ✅ **Export/Import** data as JSON
- ✅ **Responsive Design**

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at: **http://localhost:3000**

## 🔥 Hot Reload

Next.js includes **Fast Refresh** out of the box! Changes to your code will automatically update in the browser instantly without losing component state.

## 📁 Project Structure

```
steam-next/
├── app/
│   ├── components/
│   │   └── Header.tsx          # Steam-style header component
│   ├── lib/
│   │   └── utils.ts            # Utility functions
│   ├── types/
│   │   └── index.ts            # TypeScript types
│   ├── globals.css             # Global styles
│   ├── layout.tsx              # Root layout
│   └── page.tsx                # Home page
├── public/                     # Static assets
├── package.json
├── tsconfig.json               # TypeScript config
└── next.config.js              # Next.js config
```

## 🛠️ Available Scripts

```bash
# Development server with hot reload
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## 🎨 Key Features Implemented

### Header Component
- Steam-authentic navigation bar
- Profile dropdown menu
- Account settings dropdown
- Notification bell
- User avatar with level display

### Type Safety
All components are fully typed with TypeScript:
- `Task` interface for task data
- `ProfileStats` for statistics
- `Achievement` for achievement system
- Proper prop types for all components

### Data Management
- LocalStorage persistence
- Export data as JSON
- Clear all data functionality
- Automatic save

## 🚀 Next Steps

To complete the full application, add:

1. **Task Management Components**
   - TaskList component
   - TaskDetail component
   - TaskModal for creating/editing tasks

2. **Time Tracking**
   - Timer functionality
   - Session recording
   - Activity log

3. **Profile Page**
   - Full profile view
   - Achievement showcase
   - Statistics dashboard

## 📝 Development Tips

### Hot Reload
Next.js automatically reloads when you save changes to:
- `.tsx` and `.ts` files
- `.css` files
- Configuration files

### TypeScript
- Use `npm run dev` to get real-time type checking
- Types are automatically inferred where possible
- Add explicit types for props and function returns

### Styling
- Global styles in `app/globals.css`
- Component-specific styles can be added using CSS Modules
- Steam color palette:
  - Primary: `#1b2838`
  - Accent: `#66c0f4`
  - Text: `#c7d5e0`

## 🐛 Troubleshooting

**Port already in use:**
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Or use a different port
npm run dev -- -p 3001
```

**TypeScript errors:**
```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run dev
```

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [React Documentation](https://react.dev/)

## 🎮 Steam Design

This app faithfully recreates Steam's design:
- Dark theme with gradient headers
- Blue accent colors (#66c0f4)
- Hover effects and transitions
- Dropdown menus and navigation
- Typography and spacing
# task-tracker-steam-style
