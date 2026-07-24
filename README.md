# 🌿 World Peas - E-Commerce Frontend (Figma to Code)

World Peas is a pixel-perfect, highly responsive React and Tailwind CSS implementation of the "World Peas" e-commerce web design from Figma. The project features a modern shopping layout, multi-page routing, active filter chips, optimized WebP assets for high performance, and an interactive checkout basket experience.

---

## 🌐 Live Demo

- **Live Site:** [https://worldpeas.vercel.app](https://worldpeas.vercel.app)

---

## 🚀 Status & Current Progress

- **Basket / Shopping Cart Page:** **Completed (95%+ Pixel-Perfect)**
  - Fully matched using PerfectPixel extension layout overlays.
  - Implemented responsive grid structure for vegetable product cards and the order summary module.
  - Fine-tuned interactive micro-paddings, dimensions (`w-[126px] h-[48px]`), and dynamic hover transitions.
- **Multi-Page Routing:** **Completed**
  - Integrated `react-router-dom` with seamless navigation across product pages and dedicated checkout views.
- **Interactive Produce Filters:** **Completed**
  - State-driven filter buttons (`Default`, `A-Z`, `List view`) with dynamic active styling.
- **Performance Optimization:** **Completed**
  - Converted image assets to modern `.webp` format for fast render times.

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
- **Declarative Multi-Page Routing:** Leveraged `react-router-dom` (`Link`, `Routes`, `Route`) to navigate seamlessly between product pages and dedicated basket/checkout views without full page reloads.
- **Arbitrary Tailwind Layouts:** Leveraged square-bracket notation (`-[...]`) to precisely snap fixed Figma pixel boundaries without compromising code cleanliness.
- **Responsive Navigation:** Designed adaptive UI components that adjust padding, typography, and button sizing across mobile, tablet, and desktop breakpoints.

---

## 💻 How to Run Locally

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/anamafzal021-code/Worldpeas.git](https://github.com/anamafzal021-code/Worldpeas.git)
   cd Worldpeas
   ```

---

## 🎨 Design & Attribution

This project is a code implementation based on the **World Peas** UI design. All design credits go to the original designer from the Figma community.

_Disclaimer: This repository is built for learning, practice, and portfolio presentation purposes._
