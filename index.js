function Page() {
  return (
    <div>
      <img src="react.png" alt="" width="50" />
      <h1>Reasons I like React</h1>
      <ol>
        <li>I can find a gool job</li>
        <li>I can be cool kids again!</li>
        <li>I can have fun</li>
      </ol>
    </div>
  );
}

function Page2() {
  return (
    <div>
      <header>
        <nav>
          <img src="react.png" alt="" width="50" />
        </nav>
      </header>
      <main>
        <h1>Why I like React?</h1>
        <ol>
          <li>I can find a gool job</li>
          <li>I can be cool kids again!</li>
          <li>I can have fun</li>
        </ol>
      </main>
      <footer>
        <small>@ 2022 Liu development. All rights reserved.</small>
      </footer>
    </div>
  );
}

ReactDOM.render(<Page2 />, document.getElementById("root"));
