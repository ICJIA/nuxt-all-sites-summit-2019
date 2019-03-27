/* eslint-disable vue/max-attributes-per-line */
<template>
  <div>
    <v-container
      :style="setPageStyle(page.theme)"
      fluid
      
      class="full-width full-height"
    >
    
      <v-layout 
        row 
        pl-5 
        pr-5>
        <v-flex 
          class="text-xs-center" 
          xs10 
          offset-xs1>
          <div class="wrapper">
            <page-content :alignment="page.alignment">
              <template v-slot:header>
                <div v-if="page.id === 'home'">
                  <h1 
                    :id="page.id" 
                    class="mb-5">{{ page.title }}</h1>
                </div>
                <div v-else>
                  <h2 :id="page.id">{{ page.title }}</h2>
                </div>
              </template>
              <template v-slot:content>
                <v-layout v-if="page.layout === 'full'">
                  <v-flex xs12>
                    <div v-html="renderedMarkdown"/>
                  </v-flex>
                </v-layout>
                <v-layout 
                  v-if="page.layout === 'map'" 
                  row 
                  wrap>
                  <v-flex 
                    xs12 
                    sm12 
                    md6>
                    <div v-html="renderedMarkdown"/>
                  </v-flex>
                  <v-flex 
                    xs12 
                    sm12 
                    md6>
                    <h1 
                      style="margin-top: -25px;" 
                      class="text-xs-center">
                      map here
                    </h1>
                  </v-flex>
                </v-layout>
              </template>

              <!-- <template v-slot:debug>
                <div>{{ page }}</div>
              </template> -->
            </page-content>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import config from '@/config'
const md = require('markdown-it')(config.markdownItOptions)

  .use(require('markdown-it-named-headers'))

  .use(require('markdown-it-attrs'))

import PageContent from '@/components/PageContent'
export default {
  components: {
    PageContent
  },
  props: {
    page: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      config
    }
  },
  computed: {
    isAlignedLeft() {
      return this.page.alignment === 'left'
    },
    renderedMarkdown() {
      const markdown = require(`@/markdown/${this.page.file}`)
      return md.render(markdown.default)
    }
  },
  methods: {
    setPageStyle(theme) {
      return this.config.theme[theme]
    },
    showSlot(layout) {
      const test = this.page.layout && layout
      console.log(test)
      return test
    }
  }
}
</script>

<style>
.wrapper {
  /* padding-left: 50px;
  padding-right: 50px; */
}

.full-height {
  padding-top: 85px !important;
  min-height: 110vh;
  padding-bottom: 120px !important;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: neue-haas-grotesk-display, sans-serif;
  font-weight: 700;
  font-style: normal;
}

div.sidebar {
  font-family: neue-haas-grotesk-display, sans-serif;
  font-weight: 700;
  font-style: normal;
}

h1 {
  font-size: 48px;
  margin-bottom: 30px;
  line-height: 60px;
}

h2 {
  font-size: 36px;
  margin-bottom: 35px;
  border-bottom: 1px solid #ddd;
  padding-bottom: 8px;
}

h3 {
  font-size: 30px;
}

ul {
  margin-bottom: 30px;
  margin-top: 30px;
}

ul li {
  font-size: 18px;
}

ul li {
  margin-bottom: 10px;
}

p {
  font-size: 18px;
  font-family: 'Open Sans', sans-serif;
}
</style>
