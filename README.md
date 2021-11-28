# Tic Tac Toe with time travel and variable board size

## Starting instructions

1. Clone the project: `git clone URL`
2. Enter directory: `cd react-tictactoe`
3. Install junk: `npm install`
4. Execute app: `npm start`
5. Enjoy if you can: `http://localhost:3000`

## Structure

There are three relevant concepts.

 1. Board
 2. Spot
 3. Ownership

## Further work

There's no victory condition set. It's trivial to add and not required. Also, because of the variable dimensions of the board, that may vary. Besides - I proudly created time travel. Counting consequitive equi-chromatic pieces of the board is a junior assignment. :)

It would be interesting to get a deeper explanation why the binding is needed from a fundamental aspect. It's also unclear why the unique `key` set at the creation of each spot doesn't eliminate the warning in the console.