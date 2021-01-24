import React from "react";
import { Button } from "primereact/button";
class Home extends React.Component {
  render() {
    return (
      <div>
        <Button
          onClick={() => {
            this.props.history.push("/view1");
          }}
          label="View 1"
          className="p-button-link"
        />
        <div>Home</div>
      </div>
    );
  }
}
export default Home;
