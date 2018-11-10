import spinners from './spinners'

export default class Spinner {
  constructor (opt) {
    this.option = {
      color: '#333',
      type: 'dots',
    }
    this.index = 0
    this.timer = null
    this.el = null
    this.spinner - null
    this.set(opt)
    if (this.option.interval && typeof this.option.interval === 'number') {
      this.spinner.interval = this.option.interval
    }
  }

  start () {
    this.index = 0
    this.resume()
  }

  resume () {
    this.timer = setInterval(() => {
      this.index = (this.index + 1) % this.spinner.frames.length
      this.el.innerText = this.spinner.frames[this.index]
    }, this.spinner.interval)
  }

  stop () {
    clearInterval(this.timer)
    this.timer = null
  }

  toggle () {
    if (this.timer) {
      this.stop()
    } else {
      this.resume()
    }
  }

  remove () {
    this.stop()
    this.el.innerText = ''
  }

  set (opt) {
    this.option = {
      ...this.option,
      ...opt
    }
    this.el = this.option.el
    if (!this.el) {
      throw new Error('No element available!')
    }
    this.spinner = spinners[this.option.type]
    if (!this.spinner) {
      throw new Error('Invalid spinner type!')
    }
  }
}