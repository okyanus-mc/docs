module.exports = {
  locales: {
    "/": {
      lang: "en-US",
      title: "Okyanus Server",
      description: "Reimagined Minecraft server framework"
    },
    "/tr/": {
      lang: "tr-TR",
      title: "Okyanus Sunucu",
      description: "Yeniden düşünülmüş Minecraft sunucu altyapısı"
    }
  },
  themeConfig: {
    locales: {
      "/": {
        selectText: "Languages",
        label: "English",
        editLinkText: "Edit this page",
        sidebar: [
          "getting-started",

          {
            title: "Development",
            sidebarDepth: 2,
            children: ["dev/getting-started"]
          }
        ]
      },
      "/tr/": {
        selectText: "Diller",
        label: "Türkçe",
        editLinkText: "Bu sayfayı düzenle",

        sidebar: [
          "tr/getting-started",

          {
            title: "Geliştirme",
            sidebarDepth: 2,
            children: ["tr/dev/getting-started"]
          }
        ]
      }
    },
    sidebarDepth: 2,
    displayAllHeaders: true
  }
};
