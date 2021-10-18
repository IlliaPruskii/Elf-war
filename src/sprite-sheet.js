import { Sprite } from './sprite';

export class SpriteSheet {
	constructor({imageName, imageWidth, imageHeight, spriteWidth = 64, spriteHeight = 64}) {
		this.imageName = imageName
		this.imageWidth = imageWidth
		this.imageHeight = imageHeight
		this.spriteWidth = spriteWidth
		this.spriteHeight = spriteHeight
	}

	getSprite(index) {
		return new Sprite({
			imageName: this.imageName,
			sourceX: this.getSourceX(index),
			sourceY: this.getSourceY(index),
			width: this.spriteWidth,
			height: this.spriteHeight
		})
	}

	getSourceX(index) {
		return (--index * this.spriteWidth) % this.imageWidth
	}

	getSourceY(index) {
		return Math.trunc((--index * this.spriteWidth) / this.imageWidth) * this.spriteHeight
	}
}
