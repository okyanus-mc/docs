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
          },

          {
            title: "Contributing",
            sidebarDepth: 2,
            path: "/dev/okyanus/contributing",
            children: ["dev/okyanus/workspace"]
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
            title: "Mod Geliştirme",
            sidebarDepth: 2,
            children: ["tr/dev/getting-started", "tr/dev/guide"]
          },

          {
            title: "Okyanus Geliştirme",
            sidebarDepth: 2,
            path: "/tr/dev/okyanus/contributing",
            children: ["tr/dev/okyanus/workspace"]
          }
        ]
      }
    },
    sidebarDepth: 2,
    displayAllHeaders: true
  }
};
