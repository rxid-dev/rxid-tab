import "./App.scss";
import { Components } from "./shared/components";

const icons = ["fa-star", "fa-plus", "fa-minus", "fa-pen"];

function App() {
  return (
    <div className="container mt-4">
      <h1 className="mb-0">React Tab Tutorial</h1>
      <p>Create reusable tab component (rxid-tab) on React App</p>
      <Components.Tabs>
        {Array(4)
          .fill(0)
          .map((val, index) => (
            <Components.Tab
              header={
                <>
                  <em className={"fa-solid " + icons[index]}></em>
                  <span className="text ms-1">
                    {"Tab " + (val + index + 1)}
                  </span>
                </>
              }
              key={index + 1}
            >
              <p>Tab {val + index + 1}</p>
            </Components.Tab>
          ))}
      </Components.Tabs>

      <Components.Tabs isVertical={true}>
        {Array(4)
          .fill(0)
          .map((val, index) => (
            <Components.Tab
              header={
                <>
                  <em className={"fa-solid " + icons[index]}></em>
                  <span className="text ms-1">
                    {"Tab " + (val + index + 1)}
                  </span>
                </>
              }
            >
              <p>Tab {val + index + 1}</p>
            </Components.Tab>
          ))}
      </Components.Tabs>
    </div>
  );
}

export default App;
