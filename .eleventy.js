module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('*source/**/*.css')
  eleventyConfig.addPassthroughCopy('*source/**/*.jpg')
  eleventyConfig.addPassthroughCopy('*source/**/*.js')
  eleventyConfig.addPassthroughCopy('*source/**/*.webp')

  return {
    dir: {
      input: "source",
      output: "build"
    }
  }
}
