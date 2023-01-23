import { forwardRef } from "react";

const AboutSection = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="container mx-auto h-screen bg-green-200">
      <h1>About Section</h1>
    </div>
  );
});

export default AboutSection;
