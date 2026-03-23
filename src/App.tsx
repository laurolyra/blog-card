import "./App.css";
import BlogCard from "./components/BlogCard";
import Credits from "./components/Credits";
import spaceJoy from "./assets/spacejoy-YqFz7UMm8qE-unsplash.jpg";
import { ellipsis } from "./services/ellipsis";

function App() {
  return (
    <div className="min-h-screen bg-linear-to-br from-[#F9FAFB] to-[#D2D6DB]">
      <div className="flex justify-center items-center min-h-screen">
        <BlogCard
          imageAlt="living room"
          imageSrc={spaceJoy}
          title={ellipsis("Top 5 Living Room Inspirations", 30)}
          subtitle={ellipsis("Curated vibrants colors for your living, make it pop & calm in the same time.")}
          tag="Interior"
          url="http://github.com/laurolyra"
        />
      </div>
      <div className="fixed bottom-6 left-6">
        <Credits author="Lauro Lyra Aguiar" username="laurolyra" />
      </div>
    </div>
  );
}

export default App;
