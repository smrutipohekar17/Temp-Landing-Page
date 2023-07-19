import styled from "styled-components";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Who from "./components/Who";
import Works from "./components/Works";
import Who1 from "./components/Who1";
import Who2 from "./components/Who2";
import Who3 from "./components/Who3";

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  background: url("./img/bg.jpeg");
  &::-webkit-scrollbar{
    display: none;
  }
`;

function App() {
  return (
    <Container>
      <Hero />
      <Who />
      <Who1 />
      <Who2 />
      <Who3 />
      <Works />
      <Contact />
    </Container>
  );
}

export default App;
