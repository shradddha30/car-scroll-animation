import Hero from '../components/Hero';

export default function Home() {
  return (
    <main className="bg-[#e5e5e5]">
      {/* 1. Main Animation Section */}
      <Hero />
      
      {/* 2. Scroll Space: Iske bina animation trigger nahi hoga */}
      <div style={{ 
        height: '300vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center' 
      }}>
        <h2 className="text-gray-400 text-2xl font-light">
          Scroll back up to see the car reveal again!
        </h2>
      </div>

      {/* 3. Footer ya End Section (Optional) */}
      <footer className="p-10 text-center bg-white">
        <p>© 2026 WELCOMEITZFIZZ Project</p>
      </footer>
    </main>
  );
}