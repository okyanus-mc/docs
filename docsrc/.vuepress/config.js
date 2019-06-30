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
          "compatibility",

          {
            title: "Development",
            sidebarDepth: 2,
            children: ["dev/getting-started", "dev/guide"]
          }
        ]
      },
      "/tr/": {
        selectText: "Diller",
        label: "Türkçe",
        editLinkText: "Bu sayfayı düzenle",

        sidebar: [
          "tr/getting-started",
          "tr/compatibility",

          {
            title: "Geliştirme",
            sidebarDepth: 2,
            children: ["tr/dev/getting-started", "tr/dev/guide"]
          }
        ]
      }
    },
    sidebarDepth: 2,
    displayAllHeaders: true
  }
};
