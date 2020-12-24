import React from "react";
import { House } from "./types";

let mapHouseToColor: { [key in House]: string } = {
  Gryffindor: "red",
  Ravenclaw: "blue",
  Hufflepuff: "yellow",
  Slytherin: "green",
};

interface GettingApiDataState {
  error: string | null;
  isLoaded: boolean;
  items?: House;
}

export default class GettingApiData extends React.Component<
  {},
  GettingApiDataState
> {
  constructor(props: {}) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
    };
  }

  componentDidMount() {
    fetch("http://localhost:8080/sortinghat")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.house,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  getHouseBackgroundColor(house: House | undefined) {
    if (house) {
      return mapHouseToColor[house];
    }

    return "";
  }

  render() {
    return (
      <div
        style={{
          backgroundColor: this.getHouseBackgroundColor(this.state.items),
        }}
      >
        {this.state.items}
      </div>
    );
  }
}
