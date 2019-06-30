module.exports = {
  title: "Okyanus",
  locales: {
    "/": {
      lang: "en-US",
      description: "Serverside API for Fabric"
    }
  },
  themeConfig: {
    locales: {
      "/": {
        selectText: "Languages",
        label: "English",
        editLinkText: "Edit this page",
        sidebar: [
          {
            title: "Development",
            sidebarDepth: 2,
            path: "/dev/getting-started",
            children: ["dev/getting-started", "dev/guide"]
          },

          {
            title: "Contributing",
            sidebarDepth: 2,
            path: "/dev/okyanus/contributing",
            children: ["dev/okyanus/workspace"]
          }
        ]
      }
    },
    sidebarDepth: 2,
    displayAllHeaders: true
  }
};
