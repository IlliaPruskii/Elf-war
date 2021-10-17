import { Scene } from '../scene';

export class Play extends Scene {
	constructor(game) {
		super(game)
	}

	init() {
		super.init();
	}

	render(time) {
		this.game.screen.fill('#d01515')
		super.render(time);
	}
}
