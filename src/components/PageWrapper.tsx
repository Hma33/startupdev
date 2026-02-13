import Header from "./Header.tsx";

export default function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-full min-h-screen">
      <Header />
      {children}
    </div>
  );
}
