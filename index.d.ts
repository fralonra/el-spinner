export as namespace ElSpinner

interface ElSpinnerOptions {
  el?: Element
  type?: string
  interval?: number
}

declare class ElSpinner {
  constructor(options: ElSpinnerOptions)

  /**
   * Generate the maze
   * */
  generate(): void

  /**
   * Get maze data
   * */
  get(): Maz
}

export = ElSpinner