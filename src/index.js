import spinners from './spinners'

export default class Spinner {
  constructor (opt) {
    this.option = {
      type: 'dots',
    }
    this.index = 0
    this.timer = null
    this.el = null
    this.spinner = null
    this.isRunning = false
    this.set(opt)
  }

  start () {
    this.index = 0
    this.resume()
  }
  
  stop () {
    this.isRunning = false
    this.timer = null
  }
  
  resume () {
    this.isRunning = true
    const setFrame = () => {
      if (this.isRunning === true) {
        this.index = (this.index + 1) % this.spinner.frames.length
        this.el.innerText = this.spinner.frames[this.index]
        this.timer = setTimeout(setFrame, this.spinner.interval)
      }
    }
    setFrame()
    this.timer = setTimeout(setFrame, this.spinner.interval)
  }
  
  toggle () {
    if (this.timer) {
      this.stop()
    } else {
      this.resume()
    }
  }
  
  remove () {
    this.index = 0
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
    if (this.option.interval && typeof this.option.interval === 'number') {
      this.spinner.interval = this.option.interval
      if (this.timer) {
        this.resume()
      }
    }
  }
}