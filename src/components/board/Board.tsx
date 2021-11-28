import React, { Component } from 'react';
import './Board.scss';
import Spot from '../spot/Spot';

type Props = {};
type State = { moves: (() => void)[] }

class Board extends Component<Props, State> {

  constructor(props: Props) {
    super(props);

    this.retract = this.retract.bind(this);

    this.state = { moves: [] };
  }

  width: number = 7;
  height: number = 7;

  callbacky = (assign: (p: boolean) => void, retract: () => void) => {
    this.state.moves.push(retract);
    this.setState({ moves: this.state.moves });

    const player = this.state.moves.length % 2;
    assign(!!player);

    // todo I created time travel. You go and check victory yourself.
  }

  retract() {
    const regret = this.state.moves.pop();
    if (!regret)
      return;

    regret();
    this.setState({ moves: this.state.moves });
  }

  render() {
    return (
      <div className="board">
        <div>There's been {this.state.moves.length} moves made.</div>
        <div onClick={this.retract}>Oopsie! <span className="regret">Go back</span>, quick as duck!</div>
        <table>
          <tbody>
            {
              Array(this.height).fill("").map((a, y) =>

                <tr>
                  {
                    Array(this.width).fill("").map((a, x) =>
                      <Spot key={x + "/" + y} callbacky={this.callbacky} />
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