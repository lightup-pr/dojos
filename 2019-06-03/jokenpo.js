/**
 * Jogadas válidas
 */
const availableOptions = {
  paper: "paper",
  scissors: "scissors",
  stone: "stone"
};

/**
 * Verifica se a jogada é válida
 *
 * @param {*} option
 */
const isValidOption = (option) => !!availableOptions[option];

/**
 * Exibe qual o vencedor da rodada
 *
 * @param {*} player
 */
const winner = (player) => {
  if (!player || !Number.isInteger(parseInt(player))) {
    throw new TypeError("Invalid arguments");
  }

  return `Player ${player} wins`;
};

/**
 * Define as regras do jokenpo
 */
const rules = {
  [availableOptions.stone]: {
    win: [availableOptions.scissors]
  },
  [availableOptions.paper]: {
    win: [availableOptions.stone]
  },
  [availableOptions.scissors]: {
    win: [availableOptions.paper]
  }
};

/**
 * Verifica se o jogo pode acontecer de acordo com
 * a jogada de cada jogador
 *
 * @param {*} player1
 * @param {*} player2
 */
const canPlay = (player1, player2) => {
  if (!player1 || !player2) {
    throw new TypeError("Invalid arguments");
  }

  if (!isValidOption(player1) || !isValidOption(player2)) {
    throw new TypeError("Invalid option");
  }
};

/**
 * Realiza o jogo
 *
 * @param {*} player1
 * @param {*} player2
 */
const play = (player1, player2) => {
  canPlay(player1, player2);

  if (player1 === player2) return "Draw";

  return rules[player1].win.includes(player2) ? winner(1) : winner(2);
};

module.exports = { play, isValidOption, winner };
