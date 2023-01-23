import { forwardRef } from "react";

const HomeSection = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="container mx-auto h-screen bg-red-200">
      HomeSection
    </div>
  );
});

export default HomeSection;
