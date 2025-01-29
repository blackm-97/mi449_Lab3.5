
// The export statement makes these settings available to other files in 11ty
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");

  eleventyConfig.addShortcode("blog-post", function(title, paragraph){
    return `<section class = "blog-post"> 
<h1>${title}</h1> 
<p>${paragraph}</p> 
</section>`;
  });
};