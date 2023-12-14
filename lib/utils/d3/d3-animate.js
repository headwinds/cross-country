// Sequences

const outArond = (el, x, y, deg) => {
  el.transition()
    .duration(duration)
    .style('top', `${x + 250}px`)
    .style('left', `${y + 250}px`)
    .transition()
    .duration(duration)
    .style('width', `${x + 250}px`)
    .transition()
    .style('transform', 'rotate(' + deg + 'deg)')
    .style('width', `${x + 250}px`)
    .style('height', `${y + 250}px`)
    .style('top', `${x + 250}px`)
    .style('left', `${x + 250}px`);
};

const sequences = {
  outaround: outAround,
};

export const animate = (id, x, y, deg, sequence) => {
  const el = d3.select(`#${id}`);
  return sequences[sequence](el, x, y, deg);
};

// animate('Archer', 25, 75, 25);
