import React, { Component } from 'react';
import { Ownership } from './Ownership';
import './Spot.scss';

type Props = {
  // todo Ask why this isn't eliminating the whine in console.
  key: string,
  callbacky: (
    p: (p: boolean) => void,
    r: () => void) => void,
};
type State = { ownership: Ownership };

class Spot extends Component<Props, State> {

  constructor(props: any) {
    super(props);

    // todo Explain what this does fundamentally.
    this.pick = this.pick.bind(this);
    this.assign = this.assign.bind(this);
    this.retract = this.retract.bind(this);

    this.state = { ownership: Ownership.Empty }
  }

  assign(player: boolean) {
    const ownership = player
      ? Ownership.Owned
      : Ownership.Enemy;

    this.setState({ ownership: ownership });
  }

  retract() {
    this.setState({ ownership: Ownership.Empty });
  }

  pick() {
    if (this.state.ownership === Ownership.Empty)
      this.props.callbacky(this.assign, this.retract);
  };

  render() {

    return (
      <td
        onClick={this.pick}
        className={"spot " + this.state.ownership}>
      </td>
    );
  }

}

export default Spot;

