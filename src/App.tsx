import { KageLandingPage } from "@designcodeio/threeui";
import "@designcodeio/threeui/style.css";

export function Scene() {
  return (
    <div className="shader-frame">
      <KageLandingPage
        headingFont="onest"
        bodyFont="onest"
        headingWeight="400"
        bodyWeight="300"
        primaryColor="#e0231c"
        headingSize={46}
        bodySize={17}
        headingLetterSpacing={-0.012}
      />
    </div>
  );
}

export function App() {
  return (
    <main style={{ width: '100vw', height: '100vh', margin: 0, padding: 0, overflow: 'hidden' }}>
      <iframe
        src="/landing-pages/kage.html"
        title="AUTOSITES | Modern Digital Technology & AI Agency"
        style={{ width: '100%', height: '100%', border: 0, display: 'block' }}
        allow="autoplay *; microphone *; speech-synthesis *; camera *; clipboard-write *"
      />
    </main>
  );
}

export default App;

