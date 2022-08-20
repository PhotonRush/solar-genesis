Solar Genesis is a mix of automation game (like factorio) and idler (like Stone Story)

There are several gameplay systems:

1. Conversation Mode
1. Maze Runner Mode
1. Automater Mode
1. Factory Mode
1. Management Mode

Maze Runner Mode, Automater Mode and Factory Mode use the same underlying grid with different blocks and slightly differ rules.

## Conversation Mode
The game is text heavy with plot revealed through conversation with various NPCs

## Maze Runner Mode

The basic premise is that the player is trying to repair and reactivate the Straylight spacecraft. The spacecraft systems have become disconnected from each other (due to reasons explained in [plot.md](plot.md)).

Each system is protected by barrier mazes that the player must overcome by programming drones to navigate the mazes. Player Drones can be lost in the maze, but there is no penalty for this other than lost time (the player has a finite number of drones that can be active at once).

A maze is layed out on a square grid. There are no rooms just branching corridors which can end in a door to other destinations or dead ends. There can be multiple doors.

- Firewall Drones: A Firewall Drone is an NPC enemy, when the player drone encounters a Firewall Drone they must fight.
- Firewall Traps: A trap is a static entity that has some effect on the player. They can be disabled with Terminals
- Terminals: Send the player into Conversation mode. Can alter the state of the maze.
- Loot: The good stuff
- Door: Sends the player to another floor of the maze, a new maze, or the goal. Doors can be locked by a key or require a terminal to open.

## Automater Mode

Player Drones can be programmed to more successfully navigate Mazes. They come with basic algorithms, but players that want to maximize speed and loot will develop more sophisticated automation.

Automation is not done through traditional text programing, but by regarding blocks on a grid. The interface is very similar to the Factory Mode but has different blocks.

## Factory Mode

The player has a factory that can be used to craft items automatically from other items. Its layed out on grid with buildings connected to each other. The player can create and automated buildings recursively.