import React, { Component } from 'react';
import './Board.scss';
import Spot from '../spot/Spot';

type Coord = { x: number, y: number };
type Props = {};
type State = { moves: Coord[] }

class Board extends Component<Props, State> {

  constructor(props: Props) {
    super(props);

    this.retract = this.retract.bind(this);

    this.state = { moves: [] };
  }

  width: number = 4;
  height: number = 10;

  callbacky = (coord: Coord, colorify: (p: boolean) => void) => {
    this.state.moves.push(coord);
    this.setState({ moves: this.state.moves });

    const parity = this.state.moves.length % 2;
    colorify(!!parity);
  }

  retract() {
    console.log("move back");
    if (this.state.moves.length === 0)
      return;

    const recent = this.state.moves.pop();
    console.log(recent);

    this.setState({ moves: this.state.moves });
    // todo Notify the regarded spot. But how?!
  }

  render() {
    return (
      <div className="board">
        <div>There's been {this.state.moves.length} moves.</div>
        <div onClick={this.retract}>Oopsie! Go back, quick as duck!</div>
        <table>
          <tbody>
            {
              Array(this.height).fill(".").map((a, y) =>

                <tr>
                  {
                    Array(this.width).fill(".").map((a, x) =>
                      <Spot
                        key={x + "/" + y}
                        callbacky={this.callbacky}
                        coord={{ x: x, y: y }} />
                    )
                  }
                </tr>

              )
            }
          </tbody>
        </table>

      </div>
    );
  }
}

export default Board;