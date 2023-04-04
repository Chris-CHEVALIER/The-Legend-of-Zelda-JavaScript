const canvas = document.getElementById('gameScreen')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

const c = canvas.getContext('2d')

c.beginPath()
c.fillStyle = 'red'
c.fillRect(0, 0, 60, 10)
c.stroke()

class Game {
  constructor () {
    this.player = undefined
  }

  initialize = () => {
    this.player = {
      x: 0,
      y: 0,
      height: 50,
      width: 60
    }
    document.addEventListener('keydown', this.handleUserInput)
    document.addEventListener('keyup', this.handleUserInput)
  }

  update = () => {
    requestAnimationFrame(this.update)
  }

  render = () => {
    const { x, y, width, height } = this.player
    c.clearRect(0, 0, canvas.width, canvas.height)
    c.beginPath()
    c.fillStyle = 'red'
    c.fillRect(x, y, width, height)
    c.stroke()
    requestAnimationFrame(this.render)
  }

  handleUserInput = e => {
    const { key, type } = e
    if (this.player) {
      if (type === 'keydown') {
        switch (key) {
          case 'z':
            this.player.y--
            break
          case 'q':
            this.player.x--
            break
          case 's':
            this.player.y++
            break
          case 'd':
            this.player.x++
            break
          default:
            break
        }
      }
    }
  }
}

const game = new Game()
game.initialize()
game.update()
game.render()
