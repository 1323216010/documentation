const ogprefix = 'og: http://ogp.me/ns#'
module.exports = {
  title: '我的幻想乡 v1.0',
  description: 'Open source Instant Search Engine',
  theme: 'default-prefers-color-scheme',
  themeConfig: {
    docsRepo: '我的幻想乡',
    docsBranch: 'main',
    editLinks: true,
    logo: '/logo.svg',
    sidebarDepth: 1,
    smoothScroll: true,

    nav: [
      { text: '学习', link: '/learn/getting_started/quick_start' },
      { text: '导航', link: '/reference/api/overview' },
      { text: '常用', link: '/faq' },
      {
        text: '项目预览',
        items: [
          {
            text: '代码生成器',
            items: [
              { text: 'Java', link: 'https://review.yan-ui.asia/tool/gen' },
              { text: 'Golang', link: 'https://review.yan-ui.asia/autoCode' },
            ],
          },
        ],
      },
      {
        text: '更多',
        items: [
          { text: 'GitHub', link: 'https://github.com/1323216010' },

        ],
      },
    ],
    sidebar: {
      '/learn/': [
        {
          title: '🔎 检索',
          path: '/learn/what_is_meilisearch/overview.html',
          collapsable: false,
          sidebarDepth: 0,
          children: [
            {
              title: 'Overview',
              path: '/learn/what_is_meilisearch/overview',
            },
            '/learn/what_is_meilisearch/features',
          ],
        },
      ],
      '/reference/': [
        {
          title: '📒 目录',
          path: '/reference/api/overview.html',
          collapsable: false,
          children: [
            {
              title: '网址导航',
              path: '/reference/api/overview',
            },
            '/reference/api/indexes',
          ],
        },
      ],
    },
  },
  plugins: [
    [
      'check-md',
      {
        pattern: '**/*.md',
        strictExt: true,
        ignoreFilePattern: ['document_structure'],
        ignoreHashPattern: ['actions-2', 'primary-key-2', 'query-parameters-2', 'query-parameters-3', 'body-2', 'body-3', 'phrase-search-2'],
        exitLevel: 'warn',
      },
    ],
    ['sitemap', { hostname: 'https://docs.meilisearch.com' }],
    ['seo', {}],
    'img-lazy',
    // Because colors can not be set through the settings of the plugin
    // Change are done in .vuepress/styles/palette.styl
    '@bidoubiwa/vuepress-plugin-element-tabs',
    ['vuepress-plugin-container', { type: 'note' }],
    [require('./config-path-checker')],
    [require('./custom-markdown-rules')],
    [require('./code-samples')],
    [
      'vuepress-plugin-code-copy',
      {
        color: '#FF5CAA',
        staticIcon: true,
      },
    ],
    [
      'meilisearch',
      {
        hostUrl: 'https://ms-5894428564fa-173.lon.meilisearch.io',
        apiKey:
          '06UKvqod16fff6018934c85a4d393534b1b96cd6c3a5ee492bcd4a4e720e26fb24ef1cbb',
        indexUid: 'docs',
        placeholder: 'Press \'s\' or \'/\' to search',
        enableDarkMode: 'auto', // Default: false
      },
    ],
    [
      'vuepress-plugin-zooming',
      {
        selector: '.theme-default-content img',
        delay: 1000,
        options: {
          bgColor: 'black',
          zIndex: 10000,
        },
      },
    ],
  ],
  head: [
    ['link', { rel: 'icon', href: '/favicon-32x32.png' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap' }],
    ['meta', { charset: 'utf-8' }],
    [
      'meta',
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    [
      'meta',
      {
        property: 'google-site-verification',
        content: 'u0OYrst4u5F16t0Vh4-EkO_sWE38Pp9aT7idfr0Ar9c',
      },
    ],
    [
      'meta',
      {
        prefix: ogprefix,
        property: 'og:title',
        content: 'Meilisearch Documentation',
      },
    ],
    ['meta', { prefix: ogprefix, property: 'og:type', content: 'website' }],
    [
      'meta',
      {
        prefix: ogprefix,
        property: 'og:url',
        content: 'http://docs.meilisearch.com',
      },
    ],
    [
      'meta',
      {
        prefix: ogprefix,
        property: 'og:image',
        content:
          'https://res.cloudinary.com/meilisearch/image/upload/v1582134509/og-image_dlbsnb_vmbpxo.png',
      },
    ],
    [
      'meta',
      {
        prefix: ogprefix,
        property: 'og:image-secure-url',
        content:
          'https://res.cloudinary.com/meilisearch/image/upload/v1582134509/og-image_dlbsnb_vmbpxo.png',
      },
    ],
    [
      'meta',
      {
        prefix: ogprefix,
        property: 'og:image-image-type',
        content: 'image/png',
      },
    ],
    ['meta', { prefix: ogprefix, property: 'og:image-height', content: '630' }],
    ['meta', { prefix: ogprefix, property: 'og:locale', content: 'en_GB' }],
    [
      'meta',
      {
        prefix: ogprefix,
        property: 'og:site-name',
        content: 'Meilisearch Documentation',
      },
    ],
    [
      'meta',
      { property: 'twitter:title', content: 'Meilisearch Documentation' },
    ],
    [
      'meta',
      {
        property: 'twitter:description',
        content: 'The official documentation of Meilisearch',
      },
    ],
    [
      'meta',
      {
        property: 'twitter:image',
        content:
          'https://res.cloudinary.com/meilisearch/image/upload/v1582134509/og-image_dlbsnb_vmbpxo.png',
      },
    ],
    [
      'meta',
      {
        property: 'twitter:card',
        content: 'summary_large_image',
      },
    ],
    [
      'meta',
      {
        property: 'twitter:image:alt',
        content: 'Next generation search API',
      },
    ],
    ['meta', { property: 'twitter:site', content: '@meilisearch' }],
    [
      'script',
      {},
      `
      window.$crisp=[];
      window.CRISP_WEBSITE_ID="bc17e0a2-ecf4-496c-8b69-3bd752a8ebe2";
      (function() {
          var d=document;
          var s=d.createElement("script");
          s.src="https://client.crisp.chat/l.js";
          s.async=1;
          d.getElementsByTagName("head")[0].appendChild(s);
      })();
    `,
    ],
    [
      'script',
      {},
      `
      (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:2013731,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
      })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
    `,
    ],
    [
      'script',
      {
        src: 'https://cdn.usefathom.com/script.js',
        spa: 'auto',
        site: 'WIMXMDAA',
        defer: true,
      },
    ],
    [
      'script',
      {
        src: 'https://thrilling-thirtyeight.meilisearch.com/script.js',
        spa: 'auto',
        site: 'QNBPJXIV',
        defer: true,
      },
    ],
    [
      'script',
      {},
      `
      (function(e,t){var n=e.amplitude||{_q:[],_iq:{}};var r=t.createElement("script")
      ;r.type="text/javascript"
      ;r.integrity="sha384-girahbTbYZ9tT03PWWj0mEVgyxtZoyDF9KVZdL+R53PP5wCY0PiVUKq0jeRlMx9M"
      ;r.crossOrigin="anonymous";r.async=true
      ;r.src="https://cdn.amplitude.com/libs/amplitude-7.2.1-min.gz.js"
      ;r.onload=function(){if(!e.amplitude.runQueuedFunctions){
      console.log("[Amplitude] Error: could not load SDK")}}
      ;var i=t.getElementsByTagName("script")[0];i.parentNode.insertBefore(r,i)
      ;function s(e,t){e.prototype[t]=function(){
      this._q.push([t].concat(Array.prototype.slice.call(arguments,0)));return this}}
      var o=function(){this._q=[];return this}
      ;var a=["add","append","clearAll","prepend","set","setOnce","unset"]
      ;for(var u=0;u<a.length;u++){s(o,a[u])}n.Identify=o;var c=function(){this._q=[]
      ;return this}
      ;var l=["setProductId","setQuantity","setPrice","setRevenueType","setEventProperties"]
      ;for(var p=0;p<l.length;p++){s(c,l[p])}n.Revenue=c
      ;var d=["init","logEvent","logRevenue","setUserId","setUserProperties","setOptOut","setVersionName","setDomain","setDeviceId", "enableTracking", "setGlobalUserProperties","identify","clearUserProperties","setGroup","logRevenueV2","regenerateDeviceId","groupIdentify","onInit","logEventWithTimestamp","logEventWithGroups","setSessionId","resetSessionId"]
      ;function v(e){function t(t){e[t]=function(){
      e._q.push([t].concat(Array.prototype.slice.call(arguments,0)))}}
      for(var n=0;n<d.length;n++){t(d[n])}}v(n);n.getInstance=function(e){
      e=(!e||e.length===0?"$default_instance":e).toLowerCase()
      ;if(!n._iq.hasOwnProperty(e)){n._iq[e]={_q:[]};v(n._iq[e])}return n._iq[e]}
      ;e.amplitude=n})(window,document);

      amplitude.getInstance().init("b1e93a7d40b5ea629cf0abee212cb54c");
      amplitude.getInstance().logEvent('NEW_DOC_VISIT');
    `,
    ],
    [
      'script',
      {},
      `
      !function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware"];analytics.factory=function(e){return function(){var t=Array.prototype.slice.call(arguments);t.unshift(e);analytics.push(t);return analytics}};for(var e=0;e<analytics.methods.length;e++){var key=analytics.methods[e];analytics[key]=analytics.factory(key)}analytics.load=function(key,e){var t=document.createElement("script");t.type="text/javascript";t.async=!0;t.src="https://cdn.segment.com/analytics.js/v1/" + key + "/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n);analytics._loadOptions=e};analytics._writeKey="jezyOXRIO1Azyxx0vCcH1afz4b4boYmp";analytics.SNIPPET_VERSION="4.13.2";
        analytics.load("jezyOXRIO1Azyxx0vCcH1afz4b4boYmp");
        analytics.page();
      }}();
    `,
    ],
  ],
}
