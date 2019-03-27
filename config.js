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

  pages: [
    {
      id: 'home',
      title:
        'The 2019 Adult Redeploy Illinois & Criminal Justice Coordinating Councils Summit',
      file: 'home.md',
      theme: 'light',
      alignment: 'center',
      layout: 'full'
    },
    {
      id: 'about',
      title: 'About the Summit',
      file: 'about-the-summit.md',
      theme: 'dark',
      alignment: 'left',
      layout: 'full'
    },
    {
      id: 'about-adult-redeploy-illinois',
      title: 'About Adult Redeploy Illinois',
      file: 'about-adult-redeploy-illinois.md',
      theme: 'light',
      alignment: 'left',
      layout: 'map'
    },
    {
      id: 'about-criminal-justice-coordinating-councils',
      title: 'About Criminal Justice Coordinating Councils',
      file: 'about-criminal-justice-coordinating-councils.md',
      theme: 'dark',
      alignment: 'left',
      layout: 'full'
    }
  ],
  theme: {
    dark: {
      color: '#fff',
      background: '#00695C'
    },
    light: {
      color: '#333',
      background: '#fff'
    }
  }
}

export default config
