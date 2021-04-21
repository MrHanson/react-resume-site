module.exports = {
  blue:
    '* {\n  font-family: \'pingfang-sc\' !important;\n}\n.rs-view img {\n  max-width: 400px;\n}\n.rs-view code {\n  word-wrap: break-word;\n  padding: 3px 6px;\n  color: #333;\n  border-radius: 4px;\n  margin: 0 2px;\n  background-color: rgba(27, 31, 35, 0.05);\n  word-break: break-all;\n  font-size: 13px;\n}\n.rs-view h1 {\n  font-weight: 900;\n}\n.rs-view h2 {\n  font-weight: 700;\n}\n.rs-view h3 {\n  font-weight: 600;\n}\n.rs-view {\n  width: 100%;\n  background: #fff;\n  overflow-y: scroll;\n  padding: 20px 40px;\n}\n.rs-view .header {\n  width: 100%;\n  overflow: hidden;\n  background: #fff;\n  color: var(--bg);\n  padding: 0;\n  margin-bottom: 40px;\n}\n.rs-view .block {\n  margin-top: 7px\n}\n.rs-view .block::before {\n  display: block;\n  content: "";\n  height: 0;\n  clear: both;\n}\n.rs-view .block::after {\n  display: block;\n  content: "";\n  height: 0;\n  clear: both;\n}\n.rs-view .title {\n  display: flex;\n  margin-top: 10px;\n  margin-left: 50px;\n  margin-right: 50px;\n  padding-bottom: 10px;\n  border-bottom: 1px solid #ddd;\n}\n.rs-view .left {\n  float: left;\n  width: 50%;\n  text-align: left;\n}\n.rs-view .right {\n  float: right;\n  width: 50%;\n  text-align: right;\n}\n.rs-view p {\n  margin-right: 8px;\n  display: block;\n  line-height: 18px;\n  font-size: 14px;\n  color: #747474;\n  margin-top: 4px;\n  margin-bottom: 0px;\n}\n.rs-view h1 {\n  font-size: 30px;\n  margin-bottom: 12px;\n}\n.rs-view h2 {\n  position: relative;\n  font-size: 20px;\n  color: var(--bg);\n  border-bottom: 1px solid var(--bg);\n  margin-top: 40px;\n}\n.rs-view h3 {\n  margin: 7px 0;\n  font-size: 14px;\n}\n.rs-view ul {\n  margin: 0 10px;\n}\n.rs-view li {\n  font-size: 13px;\n  margin-top: 4px;\n  color: #747474;\n  list-style: square inside;\n}\n.rs-view li ul {\n  margin: 0 50px;\n}\n.rs-view li ul li {\n  list-style: decimal;\n}\n.rs-view .icon {\n  fill: #747474;\n}\n.rs-view a {\n  color: #747474;\n  text-decoration: none;\n  background-color: transparent;\n  outline: none;\n  cursor: pointer;\n  -webkit-transition: color 0.3s;\n  transition: color 0.3s;\n  -webkit-text-decoration-skip: objects;\n}\n.rs-view a:hover {\n  color: #616161;\n}\n.rs-view a:active {\n  color: #616161;\n}\n.rs-view a:active,\n.rs-view a:hover {\n  text-decoration: none;\n  outline: 0;\n}\n.rs-view a:focus {\n  text-decoration: none;\n  outline: 0;\n}\n.rs-view a[disabled] {\n  color: rgba(255, 255, 255, 0.25);\n  cursor: not-allowed;\n  pointer-events: none;\n}\n',
  default:
    '* {\n  font-family: \'pingfang-sc\' !important;\n}\n.rs-view img {\n  max-width: 400px;\n}\n.rs-view code {\n  word-wrap: break-word;\n  padding: 3px 6px;\n  color: #333;\n  border-radius: 4px;\n  margin: 0 2px;\n  background-color: rgba(27, 31, 35, 0.05);\n  word-break: break-all;\n  font-size: 13px;\n}\n.rs-view h1 {\n  font-weight: 900;\n}\n.rs-view h2 {\n  font-weight: 700;\n}\n.rs-view h3 {\n  font-weight: 600;\n}\n.rs-view {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  background: #fff;\n  overflow-y: scroll;\n  -webkit-text-size-adjust: none;\n}\n.rs-view h1 {\n  border-bottom: 1px solid #ddd;\n  color: #fff;\n}\n.rs-view .h1_block {\n  margin-top: 0;\n  color: #fff;\n  display: flex;\n  flex-direction: column;\n  font-size: 0;\n  -webkit-text-size-adjust: none;\n  background: var(--bg);\n}\n.rs-view .h1_block a {\n  color: #fff;\n}\n.rs-view .h1_block .h2_block:nth-of-type(1) {\n  margin-top: 10px;\n}\n.rs-view .lr-container {\n  padding: 10px 0 20px;\n  display: flex;\n}\n.rs-view .h2_block,\n.rs-view .h3_block,\n.rs-view .h4_block,\n.rs-view .h5_block {\n  color: #000;\n  background: #fff;\n}\n.rs-view .h2_block a,\n.rs-view .h3_block a,\n.rs-view .h4_block a,\n.rs-view .h5_block a {\n  color: #000;\n}\n.rs-view .block::before {\n  display: block;\n  content: "";\n  height: 0;\n  clear: both;\n}\n.rs-view .title {\n  margin-top: 10px;\n  margin-left: 50px;\n  margin-right: 50px;\n  padding-bottom: 10px;\n  border-bottom: 1px solid #ddd;\n}\n.rs-view .left {\n  flex: 1;\n  text-align: left;\n}\n.rs-view .right {\n  flex: 1;\n  text-align: right;\n}\n.rs-view .right::after {\n  display: block;\n  content: "";\n  height: 0;\n  clear: both;\n}\n.rs-view p {\n  margin-top: 4px;\n  margin-bottom: 0px;\n  margin-left: 50px;\n  margin-right: 50px;\n  font-size: 14px;\n}\n.rs-view h1 {\n  font-size: 28px;\n  margin: 0;\n  padding: 20px 0;\n  margin: 0 50px;\n}\n.rs-view .h2_block {\n  position: relative;\n  border: 0px;\n  margin-top: -1px;\n  padding: 20px 0 10px;\n}\n.rs-view .h3_block {\n  padding: 10px 0;\n}\n.rs-view h2 {\n  position: relative;\n  z-index: 1;\n  width: calc(100% - 120px - 30% * 2);\n  min-width: 100px;\n  margin: 0px auto;\n  padding: 4px 10px;\n  border-radius: 32px;\n  font-size: 16px;\n  text-align: center;\n  background-color: #eee;\n}\n.rs-view h2::after {\n  content: "";\n  width: calc(100% + 10px);\n  position: absolute;\n  top: 50%;\n  height: 0;\n  left: 120%;\n  border-top: 1px solid #ededed;\n}\n.rs-view h2::before {\n  content: "";\n  width: calc(100% + 10px);\n  position: absolute;\n  top: 50%;\n  height: 0;\n  left: -120%;\n  border-top: 1px solid #ededed;\n}\n.rs-view h3 {\n  position: relative;\n  padding: 10px 0 5px;\n  line-height: 20px;\n  overflow: hidden;\n  min-height: 30px;\n  margin-left: 50px;\n  margin-right: 50px;\n  font-size: 14px;\n}\n.rs-view ul {\n  margin: 0 50px;\n}\n.rs-view li {\n  font-size: 13px;\n  margin-top: 4px;\n  list-style: square inside;\n}\n.rs-view li ul li {\n  list-style: decimal;\n}\n.rs-view a {\n  color: #000;\n  text-decoration: none;\n  background-color: transparent;\n  outline: none;\n  cursor: pointer;\n  -webkit-transition: color 0.3s;\n  transition: color 0.3s;\n  -webkit-text-decoration-skip: objects;\n}\n.rs-view a:hover {\n  color: #d1d0d0;\n}\n.rs-view a:active {\n  color: #d1d0d0;\n}\n.rs-view a:active,\n.rs-view a:hover {\n  text-decoration: none;\n  outline: 0;\n}\n.rs-view a:focus {\n  text-decoration: none;\n  outline: 0;\n}\n.rs-view a[disabled] {\n  color: rgba(255, 255, 255, 0.25);\n  cursor: not-allowed;\n  pointer-events: none;\n}\n.rs-view .icon {\n  fill: #fff;\n}\n',
  orange:
    '* {\n  font-family: \'pingfang-sc\' !important;\n}\n.rs-view img {\n  max-width: 400px;\n}\n.rs-view code {\n  word-wrap: break-word;\n  padding: 3px 6px;\n  color: #333;\n  border-radius: 4px;\n  margin: 0 2px;\n  background-color: rgba(27, 31, 35, 0.05);\n  word-break: break-all;\n  font-size: 13px;\n}\n.rs-view h1 {\n  font-weight: 900;\n}\n.rs-view h2 {\n  font-weight: 700;\n}\n.rs-view h3 {\n  font-weight: 600;\n}\n.rs-view {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  background: #fff;\n  overflow-y: scroll;\n}\n.rs-view .lr-container {\n  padding: 20px 0;\n  display: flex;\n}\n.rs-view .h2_block,\n.rs-view .h3_block,\n.rs-view .h4_block,\n.rs-view .h5_block {\n  color: #000;\n  background-color: #fff;\n}\n.rs-view .block::before {\n  display: block;\n  content: "";\n  height: 0;\n  clear: both;\n}\n.rs-view .title {\n  margin-top: 10px;\n  margin-left: 50px;\n  margin-right: 50px;\n  padding-bottom: 10px;\n  border-bottom: 1px solid #ddd;\n}\n.rs-view h1 {\n  border-bottom: 1px solid #ddd;\n  color: #fff;\n}\n.rs-view .h1_block {\n  margin-top: 0;\n  color: #fff;\n  position: relative;\n  background: linear-gradient(#f9855d 5%, #fdd288 20%, white);\n}\n.rs-view .h1_block .h2_block:nth-of-type(1) {\n  margin-top: 10px;\n}\n.rs-view .left {\n  flex: 1;\n  text-align: left;\n}\n.rs-view .right {\n  flex: 1;\n  text-align: right;\n}\n.rs-view .right::after {\n  display: block;\n  content: "";\n  height: 0;\n  clear: both;\n}\n.rs-view p {\n  margin-top: 4px;\n  margin-bottom: 0px;\n  margin-left: 50px;\n  margin-right: 50px;\n  font-size: 14px;\n}\n.rs-view h1 {\n  font-size: 28px;\n  margin: 0;\n  padding: 20px 0;\n  margin: 0 50px;\n}\n.rs-view .h2_block {\n  position: relative;\n  padding: 20px 0;\n}\n.rs-view h2 {\n  position: relative;\n  z-index: 1;\n  width: 10%;\n  min-width: 100px;\n  margin: 0px 50px;\n  padding: 4px 10px;\n  border-radius: 5px;\n  font-size: 16px;\n  text-align: center;\n  color: #fff;\n  background-color: #fdd288;\n}\n.rs-view .h2_block::before {\n  content: "";\n  width: calc(100% - 100px);\n  position: absolute;\n  top: 20px;\n  left: 50px;\n  height: 2px;\n  background-color: #fdd288;\n}\n.rs-view h3 {\n  position: relative;\n  padding: 10px 0 5px;\n  line-height: 20px;\n  overflow: hidden;\n  min-height: 30px;\n  margin-left: 50px;\n  margin-right: 50px;\n  font-size: 14px;\n}\n.rs-view ul {\n  margin: 0 50px;\n}\n.rs-view li {\n  font-size: 13px;\n  margin-top: 4px;\n  list-style: square inside;\n}\n.rs-view li ul li {\n  list-style: decimal;\n}\n.rs-view a {\n  color: #fff;\n  text-decoration: none;\n  background-color: transparent;\n  outline: none;\n  cursor: pointer;\n  -webkit-transition: color 0.3s;\n  transition: color 0.3s;\n  -webkit-text-decoration-skip: objects;\n}\n.rs-view a:hover {\n  color: #d1d0d0;\n}\n.rs-view a:active {\n  color: #d1d0d0;\n}\n.rs-view a:active,\n.rs-view a:hover {\n  text-decoration: none;\n  outline: 0;\n}\n.rs-view a:focus {\n  text-decoration: none;\n  outline: 0;\n}\n.rs-view a[disabled] {\n  color: rgba(255, 255, 255, 0.25);\n  cursor: not-allowed;\n  pointer-events: none;\n}\n',
  pupple:
    '* {\n  font-family: \'pingfang-sc\' !important;\n}\n.rs-view img {\n  max-width: 400px;\n}\n.rs-view code {\n  word-wrap: break-word;\n  padding: 3px 6px;\n  color: #333;\n  border-radius: 4px;\n  margin: 0 2px;\n  background-color: rgba(27, 31, 35, 0.05);\n  word-break: break-all;\n  font-size: 13px;\n}\n.rs-view h1 {\n  font-weight: 900;\n}\n.rs-view h2 {\n  font-weight: 700;\n}\n.rs-view h3 {\n  font-weight: 600;\n}\n.rs-view {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  background: #fff;\n  overflow-y: scroll;\n  position: relative;\n  z-index: 2;\n  -webkit-text-size-adjust: none;\n}\n.rs-view::before {\n  width: 300px;\n  height: 300px;\n  content: url(https://s3.qiufengh.com/muji/pen-style.svg);\n  position: absolute;\n  right: 0;\n  z-index: 1;\n  opacity: 0.1;\n}\n.rs-view::after {\n  width: 200px;\n  height: 200px;\n  content: url(https://s3.qiufengh.com/muji/pen-style.svg);\n  position: absolute;\n  left: -47px;\n  bottom: 43px;\n  transform: rotate(30deg);\n  z-index: 1;\n  opacity: 0.1;\n}\n.rs-view .lr-container {\n  padding: 20px 0;\n  display: flex;\n}\n.rs-view .h2_block,\n.rs-view .h3_block,\n.rs-view .h4_block,\n.rs-view .h5_block {\n  color: #fff;\n}\n.rs-view .block::before {\n  display: block;\n  content: "";\n  height: 0;\n  clear: both;\n}\n.rs-view .title {\n  margin-top: 10px;\n  margin-left: 50px;\n  margin-right: 50px;\n  padding-bottom: 10px;\n  border-bottom: 1px solid #ddd;\n}\n.rs-view .h1_block {\n  margin-top: 0;\n  color: #fff;\n  position: relative;\n  background: var(--bg);\n}\n.rs-view .left {\n  flex: 1;\n  text-align: left;\n}\n.rs-view .right {\n  flex: 1;\n  text-align: right;\n}\n.rs-view .right::after {\n  display: block;\n  content: "";\n  height: 0;\n  clear: both;\n}\n.rs-view p {\n  margin-top: 4px;\n  margin-bottom: 0px;\n  margin-left: 50px;\n  margin-right: 50px;\n  font-size: 14px;\n  color: #fff;\n}\n.rs-view h1 {\n  font-size: 28px;\n  margin: 0;\n  padding: 30px 0;\n  margin: 0 50px;\n  color: #fff;\n}\n.rs-view .h2_block {\n  position: relative;\n  padding: 20px 0;\n}\n.rs-view h2 {\n  position: relative;\n  z-index: 1;\n  display: inline-block;\n  margin: 0px 50px;\n  padding: 4px 10px;\n  font-size: 16px;\n  text-align: left;\n  color: #fff;\n  border-bottom: 3px solid #ffcab0;\n}\n.rs-view h3 {\n  position: relative;\n  padding: 10px 0 5px;\n  line-height: 20px;\n  overflow: hidden;\n  min-height: 30px;\n  margin-left: 50px;\n  margin-right: 50px;\n  color: #fff;\n  font-size: 14px;\n}\n.rs-view ul {\n  margin: 0 50px;\n}\n.rs-view li {\n  font-size: 13px;\n  margin-top: 4px;\n  list-style: square inside;\n}\n.rs-view li ul li {\n  list-style: decimal;\n}\n.rs-view a {\n  color: #fff;\n  text-decoration: none;\n  background-color: transparent;\n  outline: none;\n  cursor: pointer;\n  -webkit-transition: color 0.3s;\n  transition: color 0.3s;\n  -webkit-text-decoration-skip: objects;\n}\n.rs-view a:hover {\n  color: #d1d0d0;\n}\n.rs-view a:active {\n  color: #d1d0d0;\n}\n.rs-view a:active,\n.rs-view a:hover {\n  text-decoration: none;\n  outline: 0;\n}\n.rs-view a:focus {\n  text-decoration: none;\n  outline: 0;\n}\n.rs-view a[disabled] {\n  color: rgba(255, 255, 255, 0.25);\n  cursor: not-allowed;\n  pointer-events: none;\n}\n',
  reset:
    "*{\n  /* font-family: core_sans_n45_regular,\"Avenir Next\",\"Helvetica Neue\",Helvetica,Arial,\"PingFang SC\",\"Source Han Sans SC\",\"Hiragino Sans GB\",\"Microsoft YaHei\",\"WenQuanYi MicroHei\",sans-serif; */\n  font-size: 100%;\n  box-sizing:border-box;\n}\nhtml, body {\n  width: 100%;\n  height: 100%;\n}\na{\n  color: #7c7b7b;\n  text-decoration: none;\n}\na {\n  transition-property: background,color;\n  transition-duration: .2s;\n  transition-timing-function: ease-out;\n  -moz-transition-timing-function: ease-out;\n  -webkit-transition-timing-function: ease-out;\n  -o-transition-timing-function: ease-out;\n}\nhtml, body, div, span, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\nabbr, address, cite, code,\ndel, dfn, em, img, ins, kbd, q, samp,\nsmall, strong, sub, sup, var,\nb, i,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section, summary,\ntime, mark, audio, video {\n  margin:0;\n  padding:0;\n  border:0;\n  outline:0;\n  font-size:100%;\n  vertical-align:baseline;\n  background:transparent;\n}\n\nbody {\n  line-height:1;\n}\n\n:focus {\noutline: 1;\n}\n\narticle,aside,canvas,details,figcaption,figure,\nfooter,header,hgroup,menu,nav,section,summary { \n  display:block;\n}\n\nnav ul {\n  list-style:none;\n}\n\nblockquote, q {\n  quotes:none;\n}\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content:'';\n  content:none;\n}\n\na {\n  margin:0;\n  padding:0;\n  border:0;\n  font-size:100%;\n  vertical-align:baseline;\n  background:transparent;\n}\n\nins {\n  background-color:#ff9;\n  color:#000;\n  text-decoration:none;\n}\n\nmark {\n  background-color:#ff9;\n  color:#000; \n  font-style:italic;\n  font-weight:bold;\n}\n\ndel {\n  text-decoration: line-through;\n}\n\nabbr[title], dfn[title] {\n  border-bottom:1px dotted #000;\n  cursor:help;\n}\n\ntable {\n  border-collapse:collapse;\n  border-spacing:0;\n}\n\nhr {\n  display:block;\n  height:1px;\n  border:0;   \n  border-top:1px solid #cccccc;\n  margin:1em 0;\n  padding:0;\n}\n\ninput, select {\n  vertical-align:middle;\n}\nul,li{\n  list-style: none;\n}\nem{\n  font-style: normal;\n}\nhtml,body {\n  width: 100%;\n  height: 100%;\n}\ninput::-ms-clear,\ninput::-ms-reveal {\n  display: none;\n}\n*,\n*::before,\n*::after {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\nhtml {\n  -webkit-print-color-adjust: exact;\n  font-family: sans-serif;\n  line-height: 1.15;\n  -webkit-text-size-adjust: 100%;\n  -ms-text-size-adjust: 100%;\n  -ms-overflow-style: scrollbar;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n@-ms-viewport {\n  width: device-width;\n}\nbody {\n  margin: 0;\n  color: rgba(0, 0, 0, 0.85);\n  font-size: 14px;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';\n  font-variant: tabular-nums;\n  line-height: 1.5715;\n  background-color: #fff;\n  -webkit-font-feature-settings: 'tnum';\n          font-feature-settings: 'tnum', \"tnum\";\n}\n[tabindex='-1']:focus {\n  outline: none !important;\n}\nhr {\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box;\n  height: 0;\n  overflow: visible;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin-top: 0;\n  margin-bottom: 0.5em;\n  color: rgba(0, 0, 0, 0.85);\n  font-weight: 500;\n}\np {\n  margin-top: 0;\n  margin-bottom: 1em;\n}\nabbr[title],\nabbr[data-original-title] {\n  text-decoration: underline;\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n  border-bottom: 0;\n  cursor: help;\n}\naddress {\n  margin-bottom: 1em;\n  font-style: normal;\n  line-height: inherit;\n}\ninput[type='text'],\ninput[type='password'],\ninput[type='number'],\ntextarea {\n  -webkit-appearance: none;\n}\nol,\nul,\ndl {\n  margin-top: 0;\n  margin-bottom: 1em;\n}\nol ol,\nul ul,\nol ul,\nul ol {\n  margin-bottom: 0;\n}\ndt {\n  font-weight: 500;\n}\ndd {\n  margin-bottom: 0.5em;\n  margin-left: 0;\n}\nblockquote {\n  margin: 0 0 1em;\n}\ndfn {\n  font-style: italic;\n}\nb,\nstrong {\n  font-weight: bolder;\n}\nsmall {\n  font-size: 80%;\n}\nsub,\nsup {\n  position: relative;\n  font-size: 75%;\n  line-height: 0;\n  vertical-align: baseline;\n}\nsub {\n  bottom: -0.25em;\n}\nsup {\n  top: -0.5em;\n}\na {\n  color: #000;\n  text-decoration: none;\n  background-color: transparent;\n  outline: none;\n  cursor: pointer;\n  -webkit-transition: color 0.3s;\n  transition: color 0.3s;\n  -webkit-text-decoration-skip: objects;\n}\na:hover {\n  color: #333;\n}\na:active {\n  color: #333;\n}\na:active,\na:hover {\n  text-decoration: none;\n  outline: 0;\n}\na:focus {\n  text-decoration: none;\n  outline: 0;\n}\na[disabled] {\n  color: rgba(0, 0, 0, 0.25);\n  cursor: not-allowed;\n  pointer-events: none;\n}\npre,\ncode,\nkbd,\nsamp {\n  font-size: 1em;\n  font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace;\n}\npre {\n  margin-top: 0;\n  margin-bottom: 1em;\n  overflow: auto;\n}\nfigure {\n  margin: 0 0 1em;\n}\nimg {\n  vertical-align: middle;\n  border-style: none;\n}\nsvg:not(:root) {\n  overflow: hidden;\n}\na,\narea,\nbutton,\n[role='button'],\ninput:not([type='range']),\nlabel,\nselect,\nsummary,\ntextarea {\n  -ms-touch-action: manipulation;\n      touch-action: manipulation;\n}\ntable {\n  border-collapse: collapse;\n}\ncaption {\n  padding-top: 0.75em;\n  padding-bottom: 0.3em;\n  color: rgba(0, 0, 0, 0.45);\n  text-align: left;\n  caption-side: bottom;\n}\nth {\n  text-align: inherit;\n}\ninput,\nbutton,\nselect,\noptgroup,\ntextarea {\n  margin: 0;\n  color: inherit;\n  font-size: inherit;\n  font-family: inherit;\n  line-height: inherit;\n}\nbutton,\ninput {\n  overflow: visible;\n}\nbutton,\nselect {\n  text-transform: none;\n}\nbutton,\nhtml [type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\nbutton::-moz-focus-inner,\n[type='button']::-moz-focus-inner,\n[type='reset']::-moz-focus-inner,\n[type='submit']::-moz-focus-inner {\n  padding: 0;\n  border-style: none;\n}\ninput[type='radio'],\ninput[type='checkbox'] {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding: 0;\n}\ninput[type='date'],\ninput[type='time'],\ninput[type='datetime-local'],\ninput[type='month'] {\n  -webkit-appearance: listbox;\n}\ntextarea {\n  overflow: auto;\n  resize: vertical;\n}\nfieldset {\n  min-width: 0;\n  margin: 0;\n  padding: 0;\n  border: 0;\n}\nlegend {\n  display: block;\n  width: 100%;\n  max-width: 100%;\n  margin-bottom: 0.5em;\n  padding: 0;\n  color: inherit;\n  font-size: 1.5em;\n  line-height: inherit;\n  white-space: normal;\n}\nprogress {\n  vertical-align: baseline;\n}\n[type='number']::-webkit-inner-spin-button,\n[type='number']::-webkit-outer-spin-button {\n  height: auto;\n}\n[type='search'] {\n  outline-offset: -2px;\n  -webkit-appearance: none;\n}\n[type='search']::-webkit-search-cancel-button,\n[type='search']::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n::-webkit-file-upload-button {\n  font: inherit;\n  -webkit-appearance: button;\n}\noutput {\n  display: inline-block;\n}\nsummary {\n  display: list-item;\n}\ntemplate {\n  display: none;\n}\n[hidden] {\n  display: none !important;\n}\nmark {\n  padding: 0.2em;\n  background-color: #feffe6;\n}\n::-moz-selection {\n  color: #fff;\n  background: #1890ff;\n}\n::selection {\n  color: #fff;\n  background: #1890ff;\n}\n.icon {\n  fill: #fff;\n  vertical-align: middle;\n}\n",
};
