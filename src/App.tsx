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
          image={{ src: spaceJoy, alt: "living room" }}
          title={ellipsis("Top 5 Living Room Inspirations", 30)}
          subtitle={ellipsis("Curated vibrants colors for your living, make it pop & calm in the same time.")}
          tags={[
            { tag: "Interior", bgColor: "bg-[#F0FDF4]", borderColor: "border-[#BBF7D0]", textColor: "text-[#15803D]" },
          ]}
          url="http://github.com/laurolyra"
          handleButtonClick={() => window.alert("thanks for the click!")}
        />
      </div>
      <div className="fixed bottom-6 left-6 right-6">
        <Credits author="Lauro Lyra Aguiar" username="laurolyra" repoPath="laurolyra/blog-card" />
      </div>
    </div>
  );
}

export default App;
