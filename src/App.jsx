import { ParallaxBanner } from "react-scroll-parallax";
import "./App.css";

function App() {
  return (
    <>
      <ParallaxBanner
        layers={[
          {
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyJYBaRWoG6vzN83qe3KmXyYsJvN1TWff-8w&s",
            speed: -20,
          },
          {
            speed: -15,
            children: (
              <div className="absolute inset-0 flex items-center justify-center">
                <h1 className="text-8xl text-white font-thin">Hello World!</h1>
                <h1 className="text-8xl text-white font-thin">Hello World!</h1>
              </div>
            ),
          },
          { image: "/static/banner-foreground.png", speed: -10 },
        ]}
        className="aspect-[3/1]"
      />
    </>
  );
}

export default App;
