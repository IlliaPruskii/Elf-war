import { Scene } from '../scene';

export class GameLevel extends Scene {
	constructor(game) {
		super(game);

	}

	init() {
		super.init();
	}

	render(time) {
		this.game.screen.fill('#35d035')
		super.render(time);
	}
}
