import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main>
      <Hero />
      {/* Scroll karne ke liye extra space niche */}
      <div style={{ height: "200vh", background: "#111", textAlign: "center", paddingTop: "50px" }}>
        <h2 style={{ color: "#555" }}>Keep Scrolling for Stats...</h2>
      </div>
    </main>
  );
}