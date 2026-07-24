# 🌿 World Peas - E-Commerce Frontend (Figma to Code)

World Peas is a pixel-perfect, highly responsive React and Tailwind CSS implementation of the "World Peas" e-commerce web design from Figma. The project features a modern shopping layout, dynamic product routing, active filter chips, and an interactive checkout basket experience.

---

## 🚀 Status & Current Progress

- **Basket / Shopping Cart Page:** **Completed (95%+ Pixel-Perfect)**
  - Fully matched using PerfectPixel extension layout overlays.
  - Implemented responsive grid structure for vegetable product cards and the order summary module.
  - Fine-tuned interactive micro-paddings, dimensions (`w-[126px] h-[48px]`), and dynamic hover transitions.
- **Multi-Page Routing:** **Completed**
  - Integrated `react-router-dom` with dynamic product detail routes (`/product/:id`) and dedicated page views (`/checkout`).
- **Interactive Produce Filters:** **Completed**
  - State-driven filter buttons (`Default`, `A-Z`, `List view`) with dynamic active styling.

---

## 🛠️ Tech Stack Used

- **Frontend Library:** React (Vite)
- **Styling Framework:** Tailwind CSS
- **Routing:** React Router v6
- **Animations:** Framer Motion
- **Design Accuracy Tools:** Figma, PerfectPixel Extension
- **Deployment:** Vercel

---

## 📦 Key Technical Implementations

- **Component Reusability:** Split the codebase into modular functional components like `Navbar`, `Vegs`, `Summary`, `Produce`, and `ProductPage` for clean maintenance.
- **Dynamic Routing & Params:** Utilized `useParams` and dynamic route parameters (`:id`) to switch product views seamlessly.
- **Arbitrary Tailwind Layouts:** Leveraged square-bracket notation (`-[...]`) to precisely snap fixed Figma pixel boundaries without compromising code cleanliness.
- **Responsive Navigation:** Designed adaptive UI components that adjust padding, typography, and button sizing across mobile, tablet, and desktop breakpoints.

---

## 💻 How to Run Locally

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/your-username/worldpeas.git](https://github.com/your-username/worldpeas.git)
   ```
