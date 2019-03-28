const config = {
  markdownItOptions: {
    html: true,
    xhtmlOut: false,
    breaks: true,
    langPrefix: 'language-',
    linkify: true,
    typographer: false,
    quotes: '“”‘’'
  },
  debug: false,

  theme: {
    dark: {
      color: '#fff',
      background: '#00695C'
    },
    light: {
      color: '#333',
      background: '#efefef'
    }
  }
}

export default config
