import Logo from "../components/Logo";

export default function Home() {
  return (
    <main>
      {/* Header */}
      <header className="flex justify-between items-center px-8 py-4 shadow">
        <Logo />
        <div className="flex gap-4">
          <a href="/login" className="text-primary font-medium">
            Login
          </a>
          <a
            href="/register"
            className="bg-primary text-white px-4 py-2 rounded"
          >
            Register
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="text-center py-20 bg-gradient-to-r from-primary to-red-900 text-white">
        <h2 className="text-4xl font-bold mb-4">Find Your Life Partner</h2>
        <p className="text-lg mb-6">
          Trusted Matrimony for Sagar Samaj – Gawandi Community
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="/register"
            className="bg-gold text-black px-6 py-3 rounded font-semibold"
          >
            Create Profile
          </a>
          <a href="/login" className="border border-white px-6 py-3 rounded">
            Login
          </a>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-8 grid md:grid-cols-4 gap-6 text-center">
        {[
          "Create Profile",
          "Admin Approval",
          "Send Interest",
          "Chat & Connect",
        ].map((step, i) => (
          <div key={i} className="p-6 shadow rounded">
            <h3 className="font-bold text-primary mb-2">{step}</h3>
            <p className="text-sm text-gray-600">
              Simple, safe and community verified
            </p>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="text-center py-6 bg-gray-100 text-sm">
        © {new Date().getFullYear()} Sagar Samaj Vivah
      </footer>
    </main>
  );
}
