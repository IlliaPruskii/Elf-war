import { Scene } from '../scene';
import { SpriteSheet } from '../sprite-sheet';

export class GameLevel extends Scene {
	constructor(game) {
		super(game)
		this.tiles = new SpriteSheet({
			imageName: 'tiles',
			imageWidth: 640,
			imageHeight: 640
		})
		this.tree = this.tiles.getSprite(7)
		this.tree.setXY(10, 10)
	}

	init() {
		super.init()
	}

	render(time) {
		this.game.screen.fill('#000')
		this.game.screen.drawSprite(this.tree)
		super.render(time)
	}
}
