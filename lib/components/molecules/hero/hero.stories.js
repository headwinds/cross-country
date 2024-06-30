import Hero from "./hero";

export default {
  title: "components/molecules/hero",
};

export const Hero = {
  render: () => (
    <Hero
      config={{
        url: "https://images.unsplash.com/photo-1512411233342-92208dfe81af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
        text: "An Aframe Cabin",
        a11y: "An Aframe Cabin",
      }}
    />
  ),

  name: "hero",
};
