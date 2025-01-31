
// The export statement makes these settings available to other files in 11ty
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");

  eleventyConfig.addShortcode("blog-post", function(title, author, date){
    return `<header class = "blog-header"> 
<h1 class = "blog-title">${title}</h1> 
<h2 class = "blog-author">${author}</h2>
<time>${date}</time>
</header>`;
  });
};