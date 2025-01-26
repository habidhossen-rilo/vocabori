export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <p>Dashboard Layout</p>
      <main>{children}</main>
      <p>Dashboard Layout</p>
    </div>
  );
}
