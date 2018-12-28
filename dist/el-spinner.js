(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global = global || self, global.ElSpinner = factory());
}(this, function () { 'use strict';

	var spinners = {
		dots: {
			interval: 80,
			frames: [
				'⠋',
				'⠙',
				'⠹',
				'⠸',
				'⠼',
				'⠴',
				'⠦',
				'⠧',
				'⠇',
				'⠏'
			]
		},
		dots2: {
			interval: 80,
			frames: [
				'⣾',
				'⣽',
				'⣻',
				'⢿',
				'⡿',
				'⣟',
				'⣯',
				'⣷'
			]
		},
		dots3: {
			interval: 80,
			frames: [
				'⠋',
				'⠙',
				'⠚',
				'⠞',
				'⠖',
				'⠦',
				'⠴',
				'⠲',
				'⠳',
				'⠓'
			]
		},
		dots4: {
			interval: 80,
			frames: [
				'⠄',
				'⠆',
				'⠇',
				'⠋',
				'⠙',
				'⠸',
				'⠰',
				'⠠',
				'⠰',
				'⠸',
				'⠙',
				'⠋',
				'⠇',
				'⠆'
			]
		},
		dots5: {
			interval: 80,
			frames: [
				'⠋',
				'⠙',
				'⠚',
				'⠒',
				'⠂',
				'⠂',
				'⠒',
				'⠲',
				'⠴',
				'⠦',
				'⠖',
				'⠒',
				'⠐',
				'⠐',
				'⠒',
				'⠓',
				'⠋'
			]
		},
		dots6: {
			interval: 80,
			frames: [
				'⠁',
				'⠉',
				'⠙',
				'⠚',
				'⠒',
				'⠂',
				'⠂',
				'⠒',
				'⠲',
				'⠴',
				'⠤',
				'⠄',
				'⠄',
				'⠤',
				'⠴',
				'⠲',
				'⠒',
				'⠂',
				'⠂',
				'⠒',
				'⠚',
				'⠙',
				'⠉',
				'⠁'
			]
		},
		dots7: {
			interval: 80,
			frames: [
				'⠈',
				'⠉',
				'⠋',
				'⠓',
				'⠒',
				'⠐',
				'⠐',
				'⠒',
				'⠖',
				'⠦',
				'⠤',
				'⠠',
				'⠠',
				'⠤',
				'⠦',
				'⠖',
				'⠒',
				'⠐',
				'⠐',
				'⠒',
				'⠓',
				'⠋',
				'⠉',
				'⠈'
			]
		},
		dots8: {
			interval: 80,
			frames: [
				'⠁',
				'⠁',
				'⠉',
				'⠙',
				'⠚',
				'⠒',
				'⠂',
				'⠂',
				'⠒',
				'⠲',
				'⠴',
				'⠤',
				'⠄',
				'⠄',
				'⠤',
				'⠠',
				'⠠',
				'⠤',
				'⠦',
				'⠖',
				'⠒',
				'⠐',
				'⠐',
				'⠒',
				'⠓',
				'⠋',
				'⠉',
				'⠈',
				'⠈'
			]
		},
		dots9: {
			interval: 80,
			frames: [
				'⢹',
				'⢺',
				'⢼',
				'⣸',
				'⣇',
				'⡧',
				'⡗',
				'⡏'
			]
		},
		dots10: {
			interval: 80,
			frames: [
				'⢄',
				'⢂',
				'⢁',
				'⡁',
				'⡈',
				'⡐',
				'⡠'
			]
		},
		dots11: {
			interval: 100,
			frames: [
				'⠁',
				'⠂',
				'⠄',
				'⡀',
				'⢀',
				'⠠',
				'⠐',
				'⠈'
			]
		},
		dots12: {
			interval: 80,
			frames: [
				'⢀⠀',
				'⡀⠀',
				'⠄⠀',
				'⢂⠀',
				'⡂⠀',
				'⠅⠀',
				'⢃⠀',
				'⡃⠀',
				'⠍⠀',
				'⢋⠀',
				'⡋⠀',
				'⠍⠁',
				'⢋⠁',
				'⡋⠁',
				'⠍⠉',
				'⠋⠉',
				'⠋⠉',
				'⠉⠙',
				'⠉⠙',
				'⠉⠩',
				'⠈⢙',
				'⠈⡙',
				'⢈⠩',
				'⡀⢙',
				'⠄⡙',
				'⢂⠩',
				'⡂⢘',
				'⠅⡘',
				'⢃⠨',
				'⡃⢐',
				'⠍⡐',
				'⢋⠠',
				'⡋⢀',
				'⠍⡁',
				'⢋⠁',
				'⡋⠁',
				'⠍⠉',
				'⠋⠉',
				'⠋⠉',
				'⠉⠙',
				'⠉⠙',
				'⠉⠩',
				'⠈⢙',
				'⠈⡙',
				'⠈⠩',
				'⠀⢙',
				'⠀⡙',
				'⠀⠩',
				'⠀⢘',
				'⠀⡘',
				'⠀⠨',
				'⠀⢐',
				'⠀⡐',
				'⠀⠠',
				'⠀⢀',
				'⠀⡀'
			]
		},
		line: {
			interval: 130,
			frames: [
				'-',
				'\\',
				'|',
				'/'
			]
		},
		line2: {
			interval: 100,
			frames: [
				'⠂',
				'-',
				'–',
				'—',
				'–',
				'-'
			]
		},
		pipe: {
			interval: 100,
			frames: [
				'┤',
				'┘',
				'┴',
				'└',
				'├',
				'┌',
				'┬',
				'┐'
			]
		},
		simpleDots: {
			interval: 400,
			frames: [
				'.  ',
				'.. ',
				'...',
				'   '
			]
		},
		simpleDotsScrolling: {
			interval: 200,
			frames: [
				'.  ',
				'.. ',
				'...',
				' ..',
				'  .',
				'   '
			]
		},
		star: {
			interval: 70,
			frames: [
				'✶',
				'✸',
				'✹',
				'✺',
				'✹',
				'✷'
			]
		},
		star2: {
			interval: 80,
			frames: [
				'+',
				'x',
				'*'
			]
		},
		flip: {
			interval: 70,
			frames: [
				'_',
				'_',
				'_',
				'-',
				'`',
				'`',
				`'`,
				'´',
				'-',
				'_',
				'_',
				'_'
			]
		},
		hamburger: {
			interval: 100,
			frames: [
				'☱',
				'☲',
				'☴'
			]
		},
		growVertical: {
			interval: 120,
			frames: [
				'▁',
				'▃',
				'▄',
				'▅',
				'▆',
				'▇',
				'▆',
				'▅',
				'▄',
				'▃'
			]
		},
		growHorizontal: {
			interval: 120,
			frames: [
				'▏',
				'▎',
				'▍',
				'▌',
				'▋',
				'▊',
				'▉',
				'▊',
				'▋',
				'▌',
				'▍',
				'▎'
			]
		},
		balloon: {
			interval: 140,
			frames: [
				' ',
				'.',
				'o',
				'O',
				'@',
				'*',
				' '
			]
		},
		balloon2: {
			interval: 120,
			frames: [
				'.',
				'o',
				'O',
				'°',
				'O',
				'o',
				'.'
			]
		},
		noise: {
			interval: 100,
			frames: [
				'▓',
				'▒',
				'░'
			]
		},
		bounce: {
			interval: 120,
			frames: [
				'⠁',
				'⠂',
				'⠄',
				'⠂'
			]
		},
		boxBounce: {
			interval: 120,
			frames: [
				'▖',
				'▘',
				'▝',
				'▗'
			]
		},
		boxBounce2: {
			interval: 100,
			frames: [
				'▌',
				'▀',
				'▐',
				'▄'
			]
		},
		triangle: {
			interval: 50,
			frames: [
				'◢',
				'◣',
				'◤',
				'◥'
			]
		},
		arc: {
			interval: 100,
			frames: [
				'◜',
				'◠',
				'◝',
				'◞',
				'◡',
				'◟'
			]
		},
		circle: {
			interval: 120,
			frames: [
				'◡',
				'⊙',
				'◠'
			]
		},
		squareCorners: {
			interval: 180,
			frames: [
				'◰',
				'◳',
				'◲',
				'◱'
			]
		},
		circleQuarters: {
			interval: 120,
			frames: [
				'◴',
				'◷',
				'◶',
				'◵'
			]
		},
		circleHalves: {
			interval: 50,
			frames: [
				'◐',
				'◓',
				'◑',
				'◒'
			]
		},
		squish: {
			interval: 100,
			frames: [
				'╫',
				'╪'
			]
		},
		toggle: {
			interval: 250,
			frames: [
				'⊶',
				'⊷'
			]
		},
		toggle2: {
			interval: 80,
			frames: [
				'▫',
				'▪'
			]
		},
		toggle3: {
			interval: 120,
			frames: [
				'□',
				'■'
			]
		},
		toggle4: {
			interval: 100,
			frames: [
				'■',
				'□',
				'▪',
				'▫'
			]
		},
		toggle5: {
			interval: 100,
			frames: [
				'▮',
				'▯'
			]
		},
		toggle6: {
			interval: 300,
			frames: [
				'ဝ',
				'၀'
			]
		},
		toggle7: {
			interval: 80,
			frames: [
				'⦾',
				'⦿'
			]
		},
		toggle8: {
			interval: 100,
			frames: [
				'◍',
				'◌'
			]
		},
		toggle9: {
			interval: 100,
			frames: [
				'◉',
				'◎'
			]
		},
		toggle10: {
			interval: 100,
			frames: [
				'㊂',
				'㊀',
				'㊁'
			]
		},
		toggle11: {
			interval: 50,
			frames: [
				'⧇',
				'⧆'
			]
		},
		toggle12: {
			interval: 120,
			frames: [
				'☗',
				'☖'
			]
		},
		toggle13: {
			interval: 80,
			frames: [
				'=',
				'*',
				'-'
			]
		},
		arrow: {
			interval: 100,
			frames: [
				'←',
				'↖',
				'↑',
				'↗',
				'→',
				'↘',
				'↓',
				'↙'
			]
		},
		arrow2: {
			interval: 80,
			frames: [
				'⬆️ ',
				'↗️ ',
				'➡️ ',
				'↘️ ',
				'⬇️ ',
				'↙️ ',
				'⬅️ ',
				'↖️ '
			]
		},
		arrow3: {
			interval: 120,
			frames: [
				'▹▹▹▹▹',
				'▸▹▹▹▹',
				'▹▸▹▹▹',
				'▹▹▸▹▹',
				'▹▹▹▸▹',
				'▹▹▹▹▸'
			]
		},
		bouncingBar: {
			interval: 80,
			frames: [
				'[    ]',
				'[=   ]',
				'[==  ]',
				'[=== ]',
				'[ ===]',
				'[  ==]',
				'[   =]',
				'[    ]',
				'[   =]',
				'[  ==]',
				'[ ===]',
				'[====]',
				'[=== ]',
				'[==  ]',
				'[=   ]'
			]
		},
		bouncingBall: {
			interval: 80,
			frames: [
				'( ●    )',
				'(  ●   )',
				'(   ●  )',
				'(    ● )',
				'(     ●)',
				'(    ● )',
				'(   ●  )',
				'(  ●   )',
				'( ●    )',
				'(●     )'
			]
		},
		smiley: {
			interval: 200,
			frames: [
				'😄 ',
				'😝 '
			]
		},
		monkey: {
			interval: 300,
			frames: [
				'🙈 ',
				'🙈 ',
				'🙉 ',
				'🙊 '
			]
		},
		hearts: {
			interval: 100,
			frames: [
				'💛 ',
				'💙 ',
				'💜 ',
				'💚 ',
				'❤️ '
			]
		},
		clock: {
			interval: 100,
			frames: [
				'🕛 ',
				'🕐 ',
				'🕑 ',
				'🕒 ',
				'🕓 ',
				'🕔 ',
				'🕕 ',
				'🕖 ',
				'🕗 ',
				'🕘 ',
				'🕙 ',
				'🕚 '
			]
		},
		earth: {
			interval: 180,
			frames: [
				'🌍 ',
				'🌎 ',
				'🌏 '
			]
		},
		moon: {
			interval: 80,
			frames: [
				'🌑 ',
				'🌒 ',
				'🌓 ',
				'🌔 ',
				'🌕 ',
				'🌖 ',
				'🌗 ',
				'🌘 '
			]
		},
		runner: {
			interval: 140,
			frames: [
				'🚶 ',
				'🏃 '
			]
		},
		pong: {
			interval: 80,
			frames: [
				'▐⠂       ▌',
				'▐⠈       ▌',
				'▐ ⠂      ▌',
				'▐ ⠠      ▌',
				'▐  ⡀     ▌',
				'▐  ⠠     ▌',
				'▐   ⠂    ▌',
				'▐   ⠈    ▌',
				'▐    ⠂   ▌',
				'▐    ⠠   ▌',
				'▐     ⡀  ▌',
				'▐     ⠠  ▌',
				'▐      ⠂ ▌',
				'▐      ⠈ ▌',
				'▐       ⠂▌',
				'▐       ⠠▌',
				'▐       ⡀▌',
				'▐      ⠠ ▌',
				'▐      ⠂ ▌',
				'▐     ⠈  ▌',
				'▐     ⠂  ▌',
				'▐    ⠠   ▌',
				'▐    ⡀   ▌',
				'▐   ⠠    ▌',
				'▐   ⠂    ▌',
				'▐  ⠈     ▌',
				'▐  ⠂     ▌',
				'▐ ⠠      ▌',
				'▐ ⡀      ▌',
				'▐⠠       ▌'
			]
		},
		shark: {
			interval: 120,
			frames: [
				'▐|\\____________▌',
				'▐_|\\___________▌',
				'▐__|\\__________▌',
				'▐___|\\_________▌',
				'▐____|\\________▌',
				'▐_____|\\_______▌',
				'▐______|\\______▌',
				'▐_______|\\_____▌',
				'▐________|\\____▌',
				'▐_________|\\___▌',
				'▐__________|\\__▌',
				'▐___________|\\_▌',
				'▐____________|\\▌',
				'▐____________/|▌',
				'▐___________/|_▌',
				'▐__________/|__▌',
				'▐_________/|___▌',
				'▐________/|____▌',
				'▐_______/|_____▌',
				'▐______/|______▌',
				'▐_____/|_______▌',
				'▐____/|________▌',
				'▐___/|_________▌',
				'▐__/|__________▌',
				'▐_/|___________▌',
				'▐/|____________▌'
			]
		},
		dqpb: {
			interval: 100,
			frames: [
				'd',
				'q',
				'p',
				'b'
			]
		},
		weather: {
			interval: 100,
			frames: [
				'☀️ ',
				'☀️ ',
				'☀️ ',
				'🌤 ',
				'⛅️ ',
				'🌥 ',
				'☁️ ',
				'🌧 ',
				'🌨 ',
				'🌧 ',
				'🌨 ',
				'🌧 ',
				'🌨 ',
				'⛈ ',
				'🌨 ',
				'🌧 ',
				'🌨 ',
				'☁️ ',
				'🌥 ',
				'⛅️ ',
				'🌤 ',
				'☀️ ',
				'☀️ '
			]
		},
		christmas: {
			interval: 400,
			frames: [
				'🌲',
				'🎄'
			]
		},
		grenade: {
			interval: 80,
			frames: [
				'،   ',
				'′   ',
				' ´ ',
	 			' ‾ ',
				'  ⸌',
				'  ⸊',
				'  |',
				'  ⁎',
				'  ⁕',
				' ෴ ',
				'  ⁓',
				'   ',
				'   ',
				'   '
			]
		},
		point: {
			interval: 125,
			frames: [
				'∙∙∙',
				'●∙∙',
				'∙●∙',
				'∙∙●',
				'∙∙∙'
			]
		},
		layer: {
			interval: 150,
			frames: [
				'-',
				'=',
				'≡'
			]
		}
	};

	let elTmpText;

	class Spinner {
	  constructor (opt) {
	    this.option = {
	      type: 'dots',
	    };
	    this.el = null;
	    this.index = 0;
	    this.spinner = null;
	    this.timer = null;
	    this.set(opt);
	  }

	  start () {
	    this.index = 0;
	    this.resume();
	  }
	  
	  stop () {
	    clearInterval(this.timer);
	    this.timer = null;
	  }
	  
	  resume () {
	    const setFrame = () => {
	      this.index = (this.index + 1) % this.spinner.frames.length;
	      if (!this.timer) {
	        elTmpText = this.el.innerText;
	      }
	      this.el.innerText = this.spinner.frames[this.index];
	    };
	    setFrame();
	    this.timer = setInterval(setFrame, this.spinner.interval);
	  }
	  
	  toggle () {
	    if (this.timer) {
	      this.stop();
	    } else {
	      this.resume();
	    }
	  }
	  
	  remove () {
	    this.index = 0;
	    this.stop();
	    this.el.innerText = elTmpText || '';
	  }

	  set (opt) {
	    this.option = {
	      ...this.option,
	      ...opt
	    };
	    this.el = this.option.el;
	    if (!this.el) {
	      throw new Error('No element available!')
	    }
	    this.spinner = spinners[this.option.type];
	    if (!this.spinner) {
	      throw new Error('Invalid spinner type!')
	    }
	    if (opt.interval
	      && typeof opt.interval === 'number'
	      && opt.interval !== this.spinner.interval) {
	      this.spinner.interval = this.option.interval;
	      if (this.timer) {
	        this.stop();
	        this.resume();
	      }
	    }
	  }
	}

	return Spinner;

}));
