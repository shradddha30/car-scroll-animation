import Hero from '../components/Hero';

export default function Home() {
  return (
    <main className="bg-[#f0f0f0]">
      {/* 1. Main Animation Section */}
      <Hero />

      {/* 2. Scroll Space: Iske bina scroll-linked animation trigger nahi hoga */}
      <div style={{ 
        height: '400vh', 
        backgroundColor: '#f0f0f0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <h2 style={{ color: '#ccc', fontSize: '2rem' }}>Keep Scrolling for Stats...</h2>
      </div>
    </main>
  );
}