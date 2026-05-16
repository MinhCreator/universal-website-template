export function HomePage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="hero bg-base-200 rounded-box p-8 mb-8">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold mb-4">
              Universal Website Template
            </h1>
            <p className="text-lg mb-6">
              Built with Vite, React, TanStack, TailwindCSS v4, Material UI,
              Chakra UI, and daisyUI
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          { name: "MUI", path: "/mui", desc: "Material UI components" },
          { name: "Chakra UI", path: "/chakra", desc: "Chakra UI components" },
          { name: "daisyUI", path: "/daisy", desc: "daisyUI components" },
          { name: "TanStack Query", path: "/query", desc: "Data fetching example" },
        ].map((item) => (
          <a
            key={item.path}
            href={item.path}
            className="card bg-base-100 shadow-md hover:shadow-xl transition-shadow"
          >
            <div className="card-body">
              <h2 className="card-title">{item.name}</h2>
              <p>{item.desc}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
