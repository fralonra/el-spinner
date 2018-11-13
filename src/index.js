import spinners from './spinners'

export default class Spinner {
  constructor (opt) {
    this.option = {
      type: 'dots',
    }
    this.el = null
    this.index = 0
    this.spinner = null
    this.timer = null
    this.set(opt)
  }

  start () {
    this.index = 0
    this.resume()
  }
  
  stop () {
    clearInterval(this.timer)
    this.timer = null
  }
  
  resume () {
    const setFrame = () => {
      this.index = (this.index + 1) % this.spinner.frames.length
      this.el.innerText = this.spinner.frames[this.index]
    }
    setFrame()
    this.timer = setInterval(setFrame, this.spinner.interval)
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
    if (opt.interval
      && typeof opt.interval === 'number'
      && opt.interval !== this.spinner.interval) {
      this.spinner.interval = this.option.interval
      if (this.timer) {
        this.stop()
        this.resume()
      }
    }
  }
}