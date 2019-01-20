/**
 * @fileoverview Animation lab
 * @author Sebastian Kruzel
 */

/**
 * Reviewed by Rafael Plugge
 * Seems good, 10/10.
 */
//time taken 3h 00 min

// Defines a global object to be used as a namespace 
var gameNs = {};

/**
 * Entry point of the program
 */
function main()
{
    const game = new Game();
    gameNs.game = game;
    game.initWorld();
}
