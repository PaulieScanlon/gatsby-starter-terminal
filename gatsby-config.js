module.exports = {
  siteMetadata: {
    name: "gatsby-starter-terminal",
    description: "A Gatsby starter for @pauliescanlon/gatsby-theme-terminal",
    keywords: ["tech", "blog", "boop"],
    siteUrl: "https://gatsby-starter-terminal.netlify.com",
    siteImage: "terminal-open-graph-image.jpg",
    profileImage: ``,
    lang: `en`,
    config: {
      sidebarWidth: 280
    }
  },
  plugins: [
    {
      resolve: "@pauliescanlon/gatsby-theme-terminal",
      options: {
        source: ["posts"]
      }
    }
  ]
};
