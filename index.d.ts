export as namespace ElSpinner

interface ElSpinnerOptions {
  /**
   * The element where to display the spinner.
   */
  el: Element

  /**
   * Interval between each frame. If not set, the value from the original spinner will be used.
   */
  interval?: number

  /**
   * The type of the spinner.
   * @default 'dots'
   */
  type?: string
}

declare class ElSpinner {
  constructor(options: ElSpinnerOptions)

  /**
   * Stop the spinner and then remove the text from the element. 
   * */
  remove(): void

  /**
   * Resume the spinner.
   * */
  resume(): void

  /**
   * Pass a new option to the spinner.
   * */
  set(options: ElSpinnerOptions): void

  /**
   * Start the spinner from the first frame.
   * */
  start(): void

  /**
   * Stop the spinner.
   * */
  stop(): void

  /**
   * Toggle the spinner state between `stop` and `resume`.
   * */
  toggle(): void
}

export = ElSpinner