🛍️ FakeStore Product Catalog
A sleek, dynamic, and fully responsive E-Commerce Product Showcase application. This project fetches live commercial data asynchronously from the Fake Store API and presents it through an optimized presentation layer utilizing fluid layout handling.

🚀 Live Preview
Below is the visual interface showcasing the dynamic responsive product grid:
![Product Showcase](./images/Screenshot%202026-06-24%20112641.png)

✨ Core Architecture & Features
📡 Asynchronous Side-Effect Layer
Utilizes streamlined React useEffect hooks paired with Async/Await paradigms to seamlessly query and resolve asynchronous JSON payloads from an external REST API gateway.

📱 Responsive Grid System
Optimized with a mobile-first philosophy using Tailwind CSS grid layouts, scaling seamlessly across multiple viewport breaks:

Mobile devices: grid-cols-1

Tablets / Medium viewports: grid-cols-2

Desktops / Ultra-wide monitors: grid-cols-4

🎨 Visual Integrity Protection
Implements multi-line content truncation (line-clamp-1 for headings, line-clamp-2 for bodies) combined with strict aspect-square container enforcement to ensure asynchronous image assets align correctly, preventing text overflow from disrupting grid proportions.

🕹️ Polished Micro-Interactions
Features flexible volumetric configuration toggles (25ml, 50ml, 100ml) using functional interactive states.

Floating absolute-positioned "Add to Favorites" bookmarks with direct lucide-react modern vectors.

📂 Structural Overview
Bash
src/
├── components/
│   ├── ui/
│   │   └── button.jsx   # Accessible shadcn base element component
│   └── card.jsx         # Atomic presentation layer component
└── Home.jsx             # Container orchestration layer (API logic & list iteration)
💻 Technical Implementation Highlights
🧩 Declarative Rendering (Home.jsx)
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
🧱 Layout Guardrails (card.jsx)
HTML
<h3 className="text-lg font-medium line-clamp-1">{post_title}</h3>
<p className="text-gray-400 text-md line-clamp-2 capitalize">{post_body}</p>
🔧 Local Development & Deployment
1. Clone & Navigate
Bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
2. Dependency Resolution
Bash
npm install lucide-react clsx tailwind-merge
3. Execution
Bash
npm run dev
📊 Component API Specifications
<Card /> Props
Prop Name	Datatype	Purpose
post_title	String	Maps string values directly to header text slots.
post_body	String	Main body string descriptive data (Truncated automatically).
post_price	Number / String	Renders computational product item pricing metrics.
post_image	String (URL)	Absolute asset URL endpoints.
post_rate	Number	Computes float values into decimal rating metrics.