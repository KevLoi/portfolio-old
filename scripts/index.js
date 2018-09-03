$(window).on("load",function() {
  $(window).scroll(function() {
    var windowBottom = $(this).scrollTop() + $(this).innerHeight();
    $(".fade").each(function() {
      /* Check the location of each desired element */
      var objectBottom = $(this).offset().top + $(this).outerHeight() - 50;

      /* If the element is completely within bounds of the window, fade it in */
      if (objectBottom < windowBottom) { //object comes into view (scrolling down)
        if ($(this).css("opacity")==0) {
            $(this).fadeTo(600,1);
        }
      } 
      // else { //object goes out of view (scrolling up)
      //   if ($(this).css("opacity")==1) {$(this).fadeTo(750,0);}
      // }
    });
  }).scroll(); //invoke scroll-handler on page-load
});



$("#webSite").click(function() {
  alert("You are already on this website!");
});

$("#start").click(function() {
  $('html, body').animate({
    scrollTop: $("#education").offset().top + 10
  }, 1000);
})

$("#backToTop").click(function() {
  $('html, body').animate({
    scrollTop: $("#home").offset().top
  }, 1750);
})


// d3.js 
 var createGradient=function(svg,id,color1,color2){

        var defs = svg.append("svg:defs")

        var red_gradient = defs.append("svg:linearGradient")
                .attr("id", id)
                .attr("x1", "0%")
                .attr("y1", "0%")
                .attr("x2", "50%")
                .attr("y2", "100%")
                .attr("spreadMethod", "pad");

        red_gradient.append("svg:stop")
                .attr("offset", "50%")
                .attr("stop-color", color1)
                .attr("stop-opacity", 1);

        red_gradient.append("svg:stop")
                .attr("offset", "100%")
                .attr("stop-color", color2)
                .attr("stop-opacity", 1);
    };

    function createChart(id,percent,value){


      var ratio=percent/100;

      var pie=d3.layout.pie()
              .value(function(d){return d})
              .sort(null);

      var w=120,h=120;

      var outerRadius=(w/2)-10;
      var innerRadius=60;

      var color = ['#f2503f','#ea0859','#404F70'];

      var svg=d3.select(id)
              .append("svg")
              .attr({
                  width:w,
                  height:h,
                  class:'shadow'
              }).append('g')
              .attr({
                  transform:'translate('+w/2+','+h/2+')'
              });

      createGradient(svg,'gradient',color[0],color[1]);

      var arc=d3.svg.arc()
              .innerRadius(innerRadius)
              .outerRadius(outerRadius)
              .startAngle(0)
              .endAngle(2*Math.PI);

      var arcLine=d3.svg.arc()
              .innerRadius(innerRadius)
              .outerRadius(outerRadius)
              .startAngle(0);


      var pathBackground=svg.append('path')

              .attr({
                  d:arc
              })
              .style({
                  fill:color[2]
              });


      var pathChart=svg.append('path')
              .datum({endAngle:0})
              .attr({
                  d:arcLine
              })
              .style({
                  fill:'url(#gradient)'
              });

      var middleCount=svg.append('text')
              .text(function(d){
                  return d;
              })

              .attr({
                  class:'middleText',
                  'text-anchor':'middle',
                  dy:5
                  // dx:-5
              })
              .style({
                  fill:color[0],
                  'font-size':'14px'

              });
          // svg.append('text')
          //     .attr({
          //         class:'value',
          //         'text-anchor':'middle',
          //         dx:50,
          //         dy:-5

          //     })
          //     .style({
          //         fill:color[1],
          //         'font-size':'10px'

          //     });

      var arcTween=function(transition, newAngle) {
          transition.attrTween("d", function (d) {
              var interpolate = d3.interpolate(d.endAngle, newAngle);
              var interpolateCount = d3.interpolate(0, percent);
              return function (t) {
                  d.endAngle = interpolate(t);
                  middleCount.text(value);
                  return arcLine(d);
              };
          });
      };


      var animate=function(){
          if($("#skills").css("opacity")==1) {
            pathChart.transition()
                  .duration(2500)
                  .ease('cubic')
                  .call(arcTween,((2*Math.PI))*ratio);
          }
      };
      setTimeout(animate, 150);
    }

createChart('#chart0',80,'JavaScript');
createChart('#chart1',60,'Python');
createChart('#chart2',99,'HTML');
createChart('#chart3',99,'Node.JS');
createChart('#chart4',99,'Bootstrap');
createChart('#chart5',75,'jQuery');
createChart('#chart6',85,'MongoDB');
createChart('#chart7',85,'Express.JS');
createChart('#chart8',75,'MySQL');
createChart('#chart9',70,'NoSQL');
createChart('#chart10',80,'PostgreSQL');
createChart('#chart11',90,'Git');
createChart('#chart12',80,'D3.JS');
createChart('#chart13',75,'Swift4');
createChart('#chart14',75,'React.JS');

