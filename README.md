# el-spinner

[![Build Status](https://travis-ci.org/fralonra/el-spinner.svg?branch=master)](https://travis-ci.org/fralonra/el-spinner)
[![npm version](https://img.shields.io/npm/v/el-spinner.svg)](https://www.npmjs.com/package/el-spinner) [![Greenkeeper badge](https://badges.greenkeeper.io/fralonra/el-spinner.svg)](https://greenkeeper.io/)

Quickly make a text spinner for your HTML. Using [cli-spinners](https://github.com/sindresorhus/cli-spinners).

[demo](https://fralonra.github.io/el-spinner/demo/)

## Install

```bash
npm install --save el-spinner
```

## Usage

Include the `javascript` file in your **HTML** and make a new `ElSpinner`:
```html
<script src="/path/to/el-spinner.min.js"></script>
<span id="el"></span>
<script>
  const spinner = new ElSpinner({
    /* options */
    el: document.getElementById('el')
  })
  spinner.start() // You should manually start the spinner
</script>
```

You can also use it like this:
```javascript
import ElSpinner from 'el-spinner'

let spinner = new ElSpinner({
  el: document.getElementById('el')
})
spinner.start()
```

## API

### methods

#### constructor(options)

#### start()

Start the spinner from the first frame.

#### stop()

Stop the spinner.

#### resume()

Resume the spinner.

#### toggle()

Toggle the spinner state between `stop` and `resume`.

#### remove()

Stop the spinner and then remove the text from the element.

#### set(options)

Pass a new option to the spinner.

### options
| Option | Description | Type | Default |
| --- | --- | --- | --- |
| el | The element where to display the spinner. | Element | - |
| type | The type of the spinner. Please check [the list](https://github.com/sindresorhus/cli-spinners/blob/master/spinners.json) | String | 'dots' |
| interval | Interval between each frame. If not set, the value from the original spinner will be used | Number | - |
