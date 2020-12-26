module.exports = {
  siteMetadata: {
    title: "hello world",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "fq8oXBtcjfK9JnfpYgY9_lJrPl2I4SYoXwy1XRjlyY4",
        spaceId: "q65b0xbsojy8",
      },
    },
  ],
};
