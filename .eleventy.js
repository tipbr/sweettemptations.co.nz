module.exports = function(eleventyConfig) {
  // Copy static assets
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy({ "public": "/" });
  eleventyConfig.addPassthroughCopy({ "src/styles/output.css": "styles/output.css" });
  
  // Watch for CSS changes
  eleventyConfig.addWatchTarget("src/styles/**/*.css");
  
  // Set custom directories
  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    templateFormats: ["njk", "html", "md"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    // Set path prefix for GitHub Pages project sites
    // This will be empty string once custom domain is configured
    pathPrefix: "/sweettemptations.co.nz/"
  };
};
