import React, { Component } from 'react';
import './Spot.scss';

type Coord = { x: number, y: number };
type Props = {
  coord: Coord,
  callbacky: (
    c: Coord,
    p: (p: boolean) => void,
    r: () => void) => void,
};
type State = { taken: boolean, ownership: string, coord: Coord };

class Spot extends Component<Props, State> {

  constructor(props: any) {
    super(props);

    this.clicky = this.clicky.bind(this);
    this.colorify = this.colorify.bind(this);

    this.state = {
      coord: props.coord,
      taken: false,
      ownership: "empty"
    }
  }

  colorify(player: boolean) {
    const ownership = player ? "owned" : "enemy";

    this.setState({
      taken: true,
      ownership: ownership
    });
  }

  regret() {
    this.setState({
      taken: false,
      ownership: "empty"
    });
  }

  clicky() {
    if (this.state.taken)
      return;

    this.props.callbacky(this.state.coord, this.colorify, this.regret);
  };

  render() {

    return (
      <td
        onClick={this.clicky}
        className={"spot " + this.state.ownership}>
      </td>
    );
  }

}

export default Spot;