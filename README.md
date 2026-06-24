🛍️ FakeStore Product Catalog Application
A modern, dynamic, and fully responsive E-Commerce Product Catalog built with React, Tailwind CSS, and shadcn/ui. The application seamlessly fetches live data from the Fake Store API, handles asynchronous state updates, and renders a beautifully structured product showcase grid.

🚀 Live Preview
Here is a visual showcase of the product cards grid layout:git push -u origin main
(./images/Screenshot%202026-06-24%20112641.png)

✨ Key Features
Asynchronous Data Fetching: Utilizes modern Async/Await practices inside React's useEffect hook to fetch data reliably from a public REST API.

Fully Responsive Grid: Leverages Tailwind CSS Grid utilities to adjust fluidly across devices:

📱 Mobile: 1 Column

📟 Tablets: 2 Columns

💻 Desktops/Large Screens: 4 Columns

Strict Layout Management: Employs Tailwind's line-clamp (line-clamp-1 for titles, line-clamp-2 for bodies) and aspect-square on images to guarantee absolute visual consistency and prevent text overflow from breaking the card alignments.

Polished Interactive UI: Includes reusable buttons from shadcn/ui, a custom floating "Add to Favorites" heart button, product rating badges with dynamic SVG icons from lucide-react, and a volume/size selector (25ml / 50ml / 100ml).

🛠️ Tech Stack & Libraries
React.js (Functional Components, useState, useEffect)

Tailwind CSS (Utility-first styling, Responsive Grid, Line Clamping)

Lucide React (Vector icons for Star and HeartIcon)

shadcn/ui (Accessible, customizable design system primitives like the Button component)

📂 Project Structure
Here is how the dynamic logic and presentational UI components are cleanly separated:

Bash
src/
├── components/
│   ├── ui/
│   │   └── button.jsx   # Reusable shadcn Button component
│   └── card.jsx         # Presentational component for the product card layout
└── Home.jsx             # Container component (Handles API logic & grid mapping)
💻 Code Architecture Highlight
🧩 Dynamic Prop Mapping (Home.jsx)
The container component fetches the data array and maps it dynamically into our custom <Card/> components, providing unique key props for optimal React reconciliation:

JavaScript
{posts.map((post) => (
  <Card
    key={post.id}
    post_title={post.title}
    post_body={post.description}
    post_price={post.price}
    post_image={post.image}
    post_rate={post.rating?.rate}
  />
))}
🎨 Visual Layout Protection (card.jsx)
To make sure the cards maintain a uniform height regardless of the API's varying description lengths, line-clamp is injected:

HTML
<h3 className="text-lg font-medium line-clamp-1">{post_title}</h3>
<p className="text-gray-400 text-md line-clamp-2 capitalize">{post_body}</p>
🔧 Installation & Setup
Follow these steps to get a local copy up and running:

Clone the repository:

git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name


2. **Install project dependencies:**
   Make sure you have `lucide-react` and any class-merging utilities for shadcn installed:
   ```bash
npm install lucide-react clsx tailwind-merge
Start the local development server (Vite):

npm run dev


---

## 📝 Props API Reference

The `<Card/>` component accepts the following props:

| Prop Name | Type | Description |
| :--- | :--- | :--- |
| `post_title` | `String` | The main title of the product. |
| `post_body` | `String` | The detailed description of the product. |
| `post_price` | `Number/String`| The cost of the item. |
| `post_image` | `String (URL)` | The hosting URL for the product image. |
| `post_rate` | `Number` | The average star-rating score. |