import Header from "./features/header/Header";
import "./Homepage.css";

function App() {
  return (
    <div className="Homepage">
      <Header />
      <main className="Story-cards">
        <h1>Choose a story to play:</h1>
        <ul className="StoryList">
          <li>
            <div className="StoryCard">
              <img className="StoryImage" src={require("./image.png")} alt="" />
              <a className="StoryTitle" href="/">
                Title
              </a>
            </div>
          </li>
          <li>
            <div className="StoryCard">
              <img className="StoryImage" src={require("./image.png")} alt="" />
              <a className="StoryTitle" href="/">
                Title
              </a>
            </div>
          </li>
          <li>
            <div className="StoryCard">
              <img className="StoryImage" src={require("./image.png")} alt="" />
              <a className="StoryTitle" href="/">
                Title
              </a>
            </div>
          </li>
          <li>
            <div className="StoryCard">
              <img className="StoryImage" src={require("./image.png")} alt="" />
              <a className="StoryTitle" href="/">
                Title
              </a>
            </div>
          </li>
          <li>
            <div className="StoryCard">
              <img className="StoryImage" src={require("./image.png")} alt="" />
              <a className="StoryTitle" href="/">
                Title
              </a>
            </div>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default Homepage;
