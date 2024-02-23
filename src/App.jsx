import Main from "./components/Main";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import SideNav from "./components/SideNav";
import Work from "./components/Work";

function App() {
  return (
    <>
      <SideNav />
      <Main />
      <Work />
      <Projects />
      <Resume />
    </>
  );
}

export default App;
