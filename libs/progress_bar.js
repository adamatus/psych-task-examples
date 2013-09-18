

function add_progress(pos) {
    var t = pos == 'top' ? 10 : height-20;

    progressBar = d3.select('svg').append('g').attr('transform','translate(10,'+t+')')
    .attr('id','progress-bar');

    progressBar.append("clipPath")
        .attr("id", "progress-bar-clip")
      .append('svg:rect')
        .attr('height',15)
        .attr('width',width-20)
        .attr('rx',9).attr('ry',9);

    progressBar.append('svg:rect')
        .attr('class','bg')
        .attr('clip-path','url(#progress-bar-clip)')
        .attr('height',15)
        .attr('width',width-20);

    progressBar.append('svg:rect')
        .attr('class','progress')
        .attr('clip-path','url(#progress-bar-clip)')
        .attr('height',15)
        .attr('width',0);

    progressBar.append('svg:rect')
        .attr('class','frame')
        .attr('height',15)
        .attr('width',width-20)
        .attr('rx',8).attr('ry',8);
}

function move_progress(pos,max) {
    var progress = d3.scale.linear().range([0, width-20]).domain([0,max]);

    d3.select('#progress-bar rect.progress')
        .transition().duration(500).attr('width',progress(pos));
}

function remove_progress() {
    d3.select('#progress-bar').remove();
}
