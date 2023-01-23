import "./App.scss";

function App() {
  return (
    <div className="container mt-4">
      <h1 className="mb-0">React Tab Tutorial</h1>
      <p>Create reusable tab component (rxid-tab) on React App</p>

      <div className="rxid-tab">
        <div className="tab-header">
          <nav className="tab-nav">
            <ul className="tabs">
              <li className="tab-item">
                <a href="#" className="tab-link active">
                  Tab One
                </a>
              </li>
              <li className="tab-item">
                <a href="#" className="tab-link">
                  Tab Two
                </a>
              </li>
              <li className="tab-item">
                <a href="#" className="tab-link">
                  Tab Three
                </a>
              </li>
              <li className="tab-item">
                <a href="#" className="tab-link">
                  Tab Four
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="tab-body">
          <div className="tab-content">
            <h4>Hello World</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
