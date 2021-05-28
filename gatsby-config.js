module.exports = {
  siteMetadata: {
    title: "Zak!",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
        name: `Zak!`,
        short_name: `Zak!`,
        description:
          "The personal website of Zak Warren; developer, scientist, explorer",
        start_url: "/",
        scope: "/",
        display: "standalone",
        orientation: "any",
        dir: "ltr",
        lang: "en-GB",
        theme_color: "#de3f53",
        background_color: "#ffffff",
      },
    },
  ],
};
