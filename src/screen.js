import { ImageLoader } from './image-loader';

export class Screen {
	constructor(width, height) {
		this.widht = width
		this.height = height
		this.canvas = this.createCanvas()
		this.canvas.width = width
		this.canvas.height = height
		this.context = this.canvas.getContext('2d')
		this.images = {}
		this.imagesLoaded = false
	}

	loadImages(imageFiles) {
		const loader = new ImageLoader(imageFiles)

		loader.load().then((images) => {
			this.images = Object.assign(this.images, loader.images)
			this.imagesLoaded = true
			console.log(images)
		})
	}

	createCanvas() {
		const elements = document.getElementsByTagName('canvas')

		if (elements.length) {
			return elements[0]
		}

		const canvas = document.createElement('canvas')
		document.body.appendChild(canvas)

		return canvas
	}

	fill(color) {
		this.context.fillStyle = color
		this.context.fillRect(0,0,this.widht, this.height)
	}

	print(x, y, text) {
		this.context.fillStyle = '#fff'
		this.context.font = '22px Georgia'
		this.context.fillText(text, x, y)
	}

	drawImage(x, y, imageName) {
		this.context.drawImage(this.images[imageName], x, y)
	}
}
