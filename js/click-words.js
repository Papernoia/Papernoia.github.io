(() => {
  if (window.__clickWordsInit) return
  window.__clickWordsInit = true

  const WORDS = [
    { text: '【异议】', color: '#e53935' },
    { text: '【反驳】', color: '#2e9d4f' },
    { text: '【赞同】', color: '#1e6fe0' },
    { text: '【伪证】', color: '#8e44ad' }
  ]

  // 小游戏 / 工具页会被连续点击,飘字会干扰操作,所以这些页面不启用
  const EXCLUDE_PATHS = /^\/posts\/(divine|60810|play|i83|love)(\/|$)/

  // 点到这些元素时不触发(链接、按钮、输入框、图片、Live2D 看板娘、右下角按钮等)
  const IGNORE_SELECTOR = [
    'a', 'button', 'input', 'textarea', 'select', 'option', 'label', 'summary',
    'video', 'audio', 'canvas', 'iframe', 'img', 'svg',
    '[role="button"]', '[contenteditable="true"]', '[data-no-click-fx]',
    '[id^="oml2d"]', '#rightside', '#sidebar', '#nav'
  ].join(',')

  const MAX_ACTIVE = 12
  let lastIndex = -1
  let active = 0

  if (EXCLUDE_PATHS.test(location.pathname)) return

  document.addEventListener('click', (e) => {
    if (e.defaultPrevented) return
    if (e.target.closest && e.target.closest(IGNORE_SELECTOR)) return
    const sel = window.getSelection && window.getSelection()
    if (sel && sel.toString().length > 0) return
    if (active >= MAX_ACTIVE) return

    let i
    do { i = Math.floor(Math.random() * WORDS.length) } while (i === lastIndex)
    lastIndex = i
    const word = WORDS[i]

    const el = document.createElement('span')
    el.className = 'click-word'
    el.textContent = word.text
    el.style.color = word.color
    el.style.left = Math.min(Math.max(e.clientX, 44), window.innerWidth - 44) + 'px'
    el.style.top = e.clientY + 'px'
    el.style.setProperty('--dx', (Math.random() * 40 - 20).toFixed(1) + 'px')
    el.style.setProperty('--rot', (Math.random() * 16 - 8).toFixed(1) + 'deg')

    active++
    el.addEventListener('animationend', () => {
      el.remove()
      active--
    })
    document.body.appendChild(el)
  })
})()
