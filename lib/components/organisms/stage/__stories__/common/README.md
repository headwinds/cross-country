# Cast

This cast of characters were originally commissioned by artist [Laura Mensinga](https://www.laura-mensinga.com/) many moons ago after discovering her sister, [Sarah](https://www.sarahmensinga.com/) and learning that we both in live Toronto. 

At the time, I thought it would be longer collaboration but unfortunately I ran out of funds and was no position to run a kick-starter as I had to focus on career as a salary man. I had been burned on free lance and made sure I didn't repeat any of that bad business. I believe that I wrote a clear contract; paid her on time with 1 round of feedback. I also was upfront that it wouldn't last!  

As part of cross-country, these character are now free to use but ask that you credit her with the work if you happen to use them in your projects. 


## PNG

She originally provide flash files and export svg as I asked for vectored graphics.

I create .png files using svgexport after trying it, inkscape, and imagemagick 

Best result 1:1

```
svgexport chick.svg chick.png
```

Also excellent 1:1 but a more clunky syntax for the command line

```
inkscape chick.svg --export-type=png -o chick-ink.png
```

Worst result as it create a flat image and drops details and most important transparent background making it white instead!

```
magick chick.svg chick-magick.png
```
