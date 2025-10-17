import Link from 'next/link';

const docsMenu = [
  { title: 'Getting Started', href: '/documentation/getting-started' },
  { title: 'Architecture', href: '/documentation/architecture' },
  { title: 'Demo', href: '/documentation/demo' },
  { title: 'Testing', href: '/documentation/testing' },
];

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-[100dvh] bg-gray-950 text-gray-100 flex">
      <aside className="w-64 bg-gray-900 border-r border-gray-800 p-6 hidden md:block">
        <h2 className="text-2xl font-bold mb-8">Documentation</h2>
        <nav className="space-y-4">
          {docsMenu.map((item) => (
            <Link key={item.href} href={item.href} className="block py-2 px-3 rounded hover:bg-gray-800 transition">
              {item.title}
            </Link>
          ))}
        </nav>
      </aside>
  <main className="flex-1 p-6 md:p-12 overflow-auto pt-32">
        {children}
      </main>
    </div>
  );
}
