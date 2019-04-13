var apexChartOptions = (function() {
  
  // Main chart options
  var chart = {
    type: undefined, // line : area : bar : radar : histogram : pie : donut : radialBar : scatter : bubble : heatmap : candlestick
    background: "#fff", // Background color for the chart area. If you want to set background with css, use .apexcharts-canvas to set it.
    fontFamily: "Helvetica, Arial, sans-serif", // Sets the font family for all the text elements of the chart. Defaults to 'Helvetica, Arial, sans-serif'
    foreColor: "#373d3f", // Sets the text color for the chart. Defaults to #373d3f
    height: 400, // Accepts Number (400) OR String ('400px')
    width: '100%', // Accepts Number (400) OR String ('400px', '100%')
    stacked: false, // Enables stacked option for axis charts.
    stackType: "normal" //When stacked, should the stacking be percentage based or normal stacking. Available Options: normal, 100%
  };

  // Display the toolbar / menu in the top right corner.
  var chartToolbar = {
    show: true,
    // If you want to display a custom icon, you can provide HTML string in this property. download: '<img src="/static/icons/download.png" class="ico-download" width="20">'
    tools: {
      download: true,
      selection: true,
      zoom: true,
      zoomin: true,
      zoomout: true,
      pan: true,
      reset: true
    },
    autoSelected: 'zoom' 
  },

  // Sparkline hides all the elements of the charts other than the primary paths. Helps to visualize data in small areas
  var chartSparkline = {
    enabled: false
  };

  // Enable or disable all the animations that happen initially or during data update
  var chartAnimations = {
    enabled: true,
    easing: "easeinout", // linear : easein : easeout : easeinout
    speed: 800,
    // Gradually animate one by one every data in the series instead of animating all at once
    animateGradually: {
      enabled: true,
      delay: 150
    },
    // Animate the chart when data is changed and chart is re-rendered.
    dynamicAnimation: {
      enabled: true,
      speed: 350
    }
  };

  // Enable a dropshadow for paths of the SVG
  var chartDropShadow = {
    enabled: false,
    top: 0,
    left: 0,
    blur: 3,
    opacity: 0.5
  };

  // To allow selection in axis charts. Selection will not be enabled for category x-axis charts, but only for charts having numeric x-axis. For eg., timeline charts
  var chartSelection = {
    enabled: true,
    type: "x", // x : y : xy
    fill: {
      color: "#24292e",
      opacity: 0.1
    },
    stroke: {
      width: 1,
      dashArray: 3,
      color: "#24292e",
      opacity: 0.4
    },
    xaxis: {
      min: undefined,
      max: undefined
    },
    yaxis: {
      min: undefined,
      max: undefined
    }
  };

  // To allow zooming in axis charts. Note: Zooming will not be enabled for category x-axis charts, but only for charts having numeric x-axis. For eg., timeline charts
  var chartZoom = {
    enabled: true,
    type: 'x',  // x : y : xy
    zoomedArea: {
      fill: {
        color: '#90CAF9',
        opacity: 0.4
      },
      stroke: {
        color: '#0D47A1',
        opacity: 0.4,
        width: 1
      }
    }
  };

  // Text to display as a title of chart
  var title = {
    text: undefined,
    align: 'center', // left : center : right
    margin: 10,
    offsetX: 0,
    offsetY: 0,
    floating: false,
    style: {
      fontSize:  '16px',
      color:  '#263238'
    },
  };

  // Text to display as a subtitle of chart
  var subTitle = {
    text: undefined,
    align: 'center', // left : center : right
    margin: 10,
    offsetX: 0,
    offsetY: 0,
    floating: false,
    style: {
      fontSize:  '14px',
      color:  '#9699a2'
    },
  };

  // Theme options
  var theme = {
    mode: 'light', // light : dark
    palette: 'palette1', // Available palettes – palette1 to palette10
    // Single color is used as a base and shades are generated from that color.
    monochrome: {
        enabled: false,
        color: '#255aee',
        shadeTo: 'light', // light : dark
        shadeIntensity: 0.65 // 0 to 1
    },
  };

  // Colors for the chart’s series. When all colors are used, it starts from the beginning Predefined colors are available in theme palettes
  var colors = [
    '#2E93fA', '#66DA26', '#546E7A', '#E91E63', '#FF9800'
  ];

  // Show tooltip when user hovers over chart area
  var tooltip = {
    enabled: true,
    shared: true, // When having multiple series, show a shared tooltip. If you have a datetime xaxis and multiple series chart ‐ make sure all your series has the same “x” values for shared tooltip to work smoothly. 
    followCursor: false, // Follow user’s cursor position instead of putting tooltip on actual data points.
    intersect: false, // Show tooltip only when user hovers exactly over datapoint.
    inverseOrder: false, // In multiple series, when having shared tooltip, inverse the order of series (for better comparison in stacked charts).
    custom: undefined, // custom: function({series, seriesIndex, dataPointIndex, w})
    fillSeriesColor: false, // When enabled, fill the tooltip background with the corresponding series color
    theme: false, // light : dark
    style: {
      fontSize: '12px',
      fontFamily: undefined
    },
    // When user hovers over a datapoint of a particular series, other series will be grayed out making the current series highlight
    onDatasetHover: {
        highlightDataSeries: false,
    },
    // Whether to show the tooltip title (x axis values) on tooltip or not
    x: {
        show: true,
        format: 'dd MMM', // The format of the x axis value to show on tooltip
        formatter: undefined, // A custom formatter function which you can override and display according to your needs (a use case can be a date formatted using complex moment.js functions)
    },
    // In a multiple series, the tooltip.y property can accept array to target formatters of different series scales
    y: {
        formatter: undefined, // To format the Y-axis values of tooltip, you can define a custom formatter function
        title: {
            formatter: (seriesName) => seriesName, // The series name which appears besides values can be formatted using this function. Default behaviour is (seriesName) => returns seriesName
        },
    },
    // To format the z values of a Bubble series, you can use this function.
    z: {
        formatter: undefined,
        title: 'Size: ' // A custom text for the z values of Bubble Series.
    },
    // Whether to show the color coded marker shape in front of Series Name which helps to identify series in multiple datasets.
    marker: {
        show: true,
    },
    // // The css property of each tooltip item container.
    items: {
        display: flex,
    },
    // Set the tooltip to a fixed position
    fixed: {
        enabled: false,
        position: 'topRight',
        offsetX: 0,
        offsetY: 0,
    },
  };

  // To show or hide path-stroke / line
  var stroke = {
    show: true,
    curve: 'smooth', // In line / area charts, whether to draw smooth lines or straight lines. curve: 'smooth' OR provide an array curve: ['smooth', 'straight']
    lineCap: 'butt', // For setting the starting and ending points of stroke butt : square : round
    colors: undefined, // Colors to fill the border for paths. [array]
    width: 2, // Sets the width of border for svg path. int or [array]
    dashArray: 0, // Creates dashes in borders of svg path. Higher number creates more space between dashes in the border. int or [array]
  };

  // Interaction states
  var states = {
    // The filter function to apply on normal state
    normal: {
      filter: {
        type: 'none', // none : lighten : darken
        value: 0, // 0 to 1
      }
    },
    // The filter function to apply on hover state
    hover: {
      filter: {
        type: 'lighten', // none : lighten : darken
        value: 0.15, // 0 to 1
      }
    },
    // The filter function to apply on active state
    active: {
      allowMultipleDataPointsSelection: false, // Whether to allow selection of multiple datapoints and give them active state or allow one dataPoint selection at a time
      filter: {
        type: 'darken', // none : lighten : darken
        value: 0.35, // 0 to 1
      }
    }
  };

  var responsive = [
    {
      breakpoint: undefined, // The breakpoint is the max screen width at which the original config object will be overrided by the responsive config object
      options: {} // The new configuration object that you would like to override on the existing default configuration object. All the options which you set normally can be set here 
    }
  ];

  // The text to display when no-data is available. Defaults to undefined which displays nothing.
  var noData = {
    text: undefined,
    align: 'center', // left : center : right
    verticalAlign: 'middle',
    offsetX: 0,
    offsetY: 0,
    style: {
      color: undefined,
      fontSize: '14px',
      fontFamily: undefined
    }
  };

  // Size of the marker point
  var markers = {
    size: 0, // In a multi-series chart, you can provide an array of numbers to display different size of markers on different series. int or [array]
    colors: undefined, // Sets the fill color(s) of the marker point. string or [array]
    strokeColor: '#fff', // Stroke Color of the marker. If you want to pass multiple colors in an array. string or [array]
    strokeWidth: 2, // Stroke Size of the marker
    strokeOpacity: 0.9, // Opacity of the border around marker
    fillOpacity: 1, // Opacity of the marker fill color
    // Allows you to target individual data-points and style particular marker differently 
    discrete: [
      {
        seriesIndex: undefined,
        dataPointIndex: 7,
        fillColor: '#e3e3e3',
        strokeColor: '#fff',
        size: 5
      }
    ],
    shape: "circle", // circle : square
    radius: 2, // Radius of the marker (applies to square shape)
    offsetX: 0,
    offsetY: 0,
    hover: {
      size: undefined, // Fixed size of the marker when it is active
      sizeOffset: 3 // Unlike the fixed size, this option takes the original markers.size and increases/decreases the value based on it
    }
  };

  // Chart data labels
  var dataLabels = {
    enabled: true, // To determine whether to show dataLabels or not
    enabledOnSeries: undefined, // Allows showing series only on specific series in a multi-series chart. [array]
    formatter: function (val, opts) { return val }, // The formatter function allows you to modify the value before displaying
    textAnchor: 'middle', // The alignment of text relative to dataLabel’s drawing position. start : middle : end
    offsetX: 0,
    offsetY: 0,
    // Datalabel style
    style: {
      fontSize: '14px',
      fontFamily: 'Helvetica, Arial, sans-serif',
      colors: undefined
    },
    // Add drop shadow
    dropShadow: {
      enabled: false,
      top: 1,
      left: 1,
      blur: 1,
      opacity: 0.45
    }
  };

  // Fill svg paths
  var fill = {
    colors: undefined, // Colors to fill the svg paths
    opacity: 0.9, // Opacity of the fill attribute
    type: 'solid', // solid : gradient : pattern : image. string or [array]
    // Gradient fill
    gradient: {
      shade: 'dark', // dark : light
      type: "horizontal", // horizontal : vertical : diagonal1 : diagonal2
      shadeIntensity: 0.5, // Intensity of the gradient shade from 0 to 1
      gradientToColors: undefined, // Optional colors that ends the gradient to. The main colors array becomes the gradientFromColors and this array becomes the end colors of the gradient. Each index in the array corresponds to the series-index.
      inverseColors: true, // Inverse the start and end colors of the gradient.
      opacityFrom: 1, // Start color’s opacity. If you want different opacity for different series, you can pass an array of numbers. int or [array]
      opacityTo: 1, // End color’s opacity. int or [array]
      stops: [0, 50, 100], // Stops defines the ramp of colors to use on a gradient
      colorStops: [] // Override everything and define your own stops with unlimited color stops.
    },
    // Image fill
    image: {
      src: [], // src accepts an array of image paths which will correspond to each series.
      width: undefined, // Width of each image for all the series
      height: undefined // Height of each image for all the series
    },
    // Pattern fill
    pattern: {
      style: 'verticalLines', // verticalLines : horizontalLines : slantedLines : squares : circles
      width: 6, // Pattern width which will be repeated at this interval
      height: 6, // Pattern height which will be repeated at this interval
      strokeWidth: 2, // Pattern lines width indicates the thickness of the stroke of pattern.
    }
  };

  // Options for chart grid
  var grid = {
    show: true, // To show or hide grid area (including xaxis / yaxis)
    borderColor: '#90A4AE', // Colors of grid borders / lines
    strokeDashArray: 0, // Creates dashes in borders of svg path. Higher number creates more space between dashes in the border.
    position: 'back', // Whether to place grid behind chart paths of in front. Available options for position. front : back
    // X axis options
    xaxis: {
      lines: {
        show: false, // Whether to show / hide x-axis lines
        offsetX: 0,
        offsetY: 0
      }
    },   
    // Y axis options
    yaxis: {
      lines: {
        show: false, // Whether to show / hide y-axis lines
        offsetX: 0,
        offsetY: 0
      }
    },  
    // Row fill
    row: {
      colors: ["#f3f3f3", "transparent"], // Grid background colors filling in row pattern. Each row will be filled with colors based on the index in this array. If less colors are specified, colors are repeated
      opacity: 0.5 // 0 to 1
    },  
    // Column fill
    column: {
      colors: undefined, // As row
      opacity: 0.5
    },  
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }
  };

  // Chart legend
  var legend = {
    show: true, // Whether to show or hide the legend container.
    showForSingleSeries: false, // Show legend even if there is just 1 series.
    showForNullSeries: true, // Allows you to hide a particular legend if it’s series contains all null values.
    showForZeroSeries: true, // Allows you to hide a particular legend if it’s series contains all 0 values.
    position: 'bottom', // Available position options for legend. top : right : middle : bottom
    horizontalAlign: 'center', // Available options for horizontal alignment. left : center : right
    floating: false, // The floating option will take out the legend from the chart area and make it float above the chart.
    fontSize: '14px',
    fontFamily: 'Helvetica, Arial',
    width: undefined, // Sets the width for legend container
    height: undefined, // Sets the height for legend container
    formatter: undefined, // A custom formatter function to append additional text to the legend series names
    offsetX: 0,
    offsetY: 0,
    // Label colors
    labels: {
      colors: undefined, // Custom text colors for legend labels. Accepts an array of colors where each index corresponds to the series index
      useSeriesColors: false // Whether to use primary colors or not
    },
    // Markers
    markers: {
      width: 12, // Width of the marker that appears before series name
      height: 12, // Height of the marker
      strokeWidth: 0, // Stroke Size of the marker point
      strokeColor: '#fff',
      radius: 12, // Border Radius of the marker
      customHTML: undefined, // Custom HTML element to put in place of marker. customHTML: function() {  return '<span class="custom-marker"><i class="fas fa-chart-pie"></i></span>' }
      onClick: undefined, // Fire an event when legend’s marker is clicked. onClick: function(chart, seriesIndex, opts) { console.log("series- " seriesIndex + "'s marker was clicked") }
      offsetX: 0,
      offsetY: 0
    },
    // Legend margins
    itemMargin: {
      horizontal: 20,
      vertical: 5
    },
    // Toggle data series view on click
    onItemClick: {
      toggleDataSeries: true
    },
    // Highlight data series on hover
    onItemHover: {
      highlightDataSeries: true
    }
  };

 var plotOptionsBar = {
    horizontal: false,  // This option will turn a column chart into a horiontal bar chart
    endingShape: 'flat', // flat : rounded
    columnWidth: '70%', // In column charts, columnWidth is the percentage of the available width in the grid-rect. 0% to 100%
    barHeight: '70%', // In horizontal bar charts, barHeight is the percentage of the available height in the grid-rect. 0% to 100%
    distributed: false, // Turn this option to make the bars discrete. Each value indicates one bar per series
    colors: {
      ranges: [{
        from: 0, // Value indicating range’s upper limit
        to: 0, // Value indicating range’s lower limit
        color: undefined // Color to fill the range with
      }],
      backgroundBarColors: [], // Custom colors for background rects. The number of colors in the array is repeated if less colors than datapoints are specified
      backgroundBarOpacity: 1, // Opacity for background colors of the bar. 0 to 1
    },
    dataLabels: {
      position: 'top', // top : center : bottom
    }
  };

  var plotOptionsCandleStick = {
    colors: {
      upward: '#00B746', // Color for the upward candle when the value/price closed above where it opened. Usually, a green color is used for this upward candle
      downward: '#EF403C' // Color for the downward candle when the value/price closed below where it opened. Usually, a red color is used for this downward candle
    },
    wick: {
      useFillColor: true // Use the same fill color for the wick. If this is false, the color of the wick falls back to the stroke
    }
  };

  var plotOptionsHeatMap = {
    radius: 2, // Radius of the rectangle inside heatmap
    enableShades: true, // Enable different shades of color depending on the value
    shadeIntensity: 0.5, // The intensity of the shades generated for each value. 0 to 1
    colorScale: {
      ranges: [{
        from: 0, // Value indicating range’s upper limit
        to: 0, // Value indicating range’s lower limit
        color: undefined, // Color to fill the range with
        name: undefined, // If a name is provided, it will be used in the legend. If it is not provided, the text falls back to {from} - {to}
      }],
      inverse: false, // In a multiple series heatmap, flip the color-scale to fill the heatmaps vertically instead of horizontally
      min: undefined, // Specify the lower range for heatmap color calculation
      max: undefined // Specify the higher range for heatmap color calculation
    } 
  };

 var plotOptionsPie = {
  size: undefined, // Custom size of the pie which will override the default size calculations.
  customScale: 1, // Transform the scale of whole pie/donut overriding the default calculations. Try variations like 0.5 and 1.5 to see how it scales based on the default width/height of the pie
  offsetX: 0, // Sets the left offset of the whole pie area
  offsetY: 0, // Sets the top offset of the whole pie area
  expandOnClick: true, // When clicked on the pie/donut slice, expand the slice to make it distinguished visually.
  dataLabels: { // Offset by which labels will move outside / inside of the donut area
      offset: 0,
  }, 
  donut: {
    size: '65%', // Donut / ring size in percentage relative to the total pie area.
    background: 'transparent', // The background color of the pie
      labels: {
        show: false, // Whether to display inner labels or not.
        name: {
          show: true, // Show the name of the respective bar associated with it’s value
          fontSize: '22px',
          fontFamily: 'Helvetica, Arial, sans-serif',
          color: undefined,
          offsetY: -10 // Sets the top offset for name
        },
        value: {
          show: true, // Show the value label associated with the name label
          fontSize: '16px',
          fontFamily: 'Helvetica, Arial, sans-serif',
          color: undefined,
          offsetY: 16, // Sets the top offset for value label
          // A custom formatter function to apply on the value label in dataLabel
          formatter: function (val) {
            return val
          }
        },
        total: {
          show: false, // Show the total of all the series in the inner area of radialBar
          label: 'Total', // Label for “total”. Defaults to “Total”
          color: '#373d3f', // Color of the total label
          // A custom formatter function to apply on the total value. It accepts one parameter w which contains the chart’s config and global objects. 
          // Defaults to a total of all series percentage divided by the length of series.
          formatter: function (w) {
            return w.globals.seriesTotals.reduce((a, b) => {
              return a + b
            }, 0)
          }
        }
      }
    }     
  };

  var plotOptionsRadar = {
    size: undefined, // A custom size for the inner radar. The default size calculation will be overrided with this
    offsetX: 0, // Sets the left offset of the radar
    offsetY: 0, // Sets the top offset of the radar
    polygons: {
      strokeColors: '#e8e8e8', // The line color of the polygons of the chart excluding the connector lines. If you want to pass more than 1 color, you can pass an array instead of a String. strokeColors: '#e8e8e8' and strokeColors: ['#e8e8e8', '#f1f1f1'] both are valid 
      connectorColors: '#e8e8e8', // The line color of the connector lines of the polygons. If you want to pass more than 1 color, you can pass an array instead of a String. connectorColors: '#e8e8e8' and connectorColors: ['#e8e8e8', '#f1f1f1'] both are valid
      fill: {
        colors: undefined // The polygons can be filled with a custom color. If you provide 2 colors, the colors will be repeated for the rest of the polygons
      }
    }
  };

  var plotOptionsRadialBar = {
    size: undefined, // Manual size of the radialBars instead of calculating automatically from default height / width.
    inverseOrder: false, // Whether to make the first value of series innermost or outermost
    startAngle: 0, // Angle from which the radialBars should start
    endAngle: 360, // Angle to which the radialBars should end. The sum of the startAngle and endAngle should not exceed 360
    offsetX: 0, // Sets the left offset for radialBars
    offsetY: 0, // Sets the top offset for radialBars
    hollow: {
      margin: 5, // Spacing which will be subtracted from the available hollow size
      size: '50%', //Size in percentage relative to the total available size of chart
      background: 'transparent', // Background color for the hollow part of the radialBars
      image: undefined, // Optional image URL which can be displayed in the hollow area.
      imageWidth: 150, // Width of the hollow image
      imageHeight: 150, // Height of the hollow image
      imageOffsetX: 0, // Sets the left offset of hollow image
      imageOffsetY: 0, // Sets the top offset of hollow image
      imageClipped: true, // If true, the image doesn’t exceeds the hollow area and is contained within.
      position: 'front', // front : back
      // Enable a dropshadow for paths of the SVG 
      dropShadow: {
        enabled: false, 
        top: 0,
        left: 0,
        blur: 3,
        opacity: 0.5
      }
    },
    // Show track under the bar lines
    track: {
      show: true,
      startAngle: undefined, // Angle from which the track should start
      endAngle: undefined, // Angle to which the track should end
      background: '#f2f2f2', // Color of the track. If you want different color for each track, you can pass an array of colors. strint or [array]
      strokeWidth: '97%', // Width of the track
      opacity: 1, // Opacity of the track
      margin: 5, // Spacing between each track
      dropShadow: {
        enabled: false,
        top: 0,
        left: 0,
        blur: 3,
        opacity: 0.5
      }
    },
    // Datalabels inside radialBars
    dataLabels: {
      show: true, // Whether to display labels inside radialBars or not
      name: {
        show: true, // Show the name of the respective bar associated with it’s value
        fontSize: '22px',
        fontFamily: undefined,
        color: undefined,
        offsetY: -10
      },
      value: {
        show: true, // Show the value label associated with the name label
        fontSize: '16px',
        fontFamily: undefined,
        color: undefined,
        offsetY: 16,
        // A custom formatter function to apply on the value label in dataLabel
        formatter: function (val) {
          return val + '%'
        }
      },
      total: {
        show: false, // Show the total of all the series in the inner area of radialBar
        label: 'Total', // Label for “total”. Defaults to “Total”
        color: '#373d3f', // Color of the total label
        // A custom formatter function to apply on the total value. It accepts one parameter w which contains the chart’s config and global objects. Defaults to a total of all series percentage divided by the length of series.
        formatter: function (w) {
          return w.globals.seriesTotals.reduce((a, b) => {
            return a + b
          }, 0) / w.globals.series.length + '%'
        }
      }
    }
  };

  // Make public
  return {
    chart: chart,
    chartToolbar: chartToolbar,
    chartSparkline: chartSparkline,
    chartAnimations: chartAnimations,
    chartDropShadow: chartDropShadow,
    chartSelection: chartSelection,
    chartZoom: chartZoom,
    title: title,
    subTitle: subTitle,
    theme: theme,
    colors: colors,
    tooltip: tooltip,
    stroke: stroke,
    states: states,
    responsive: responsive,
    noData: noData,
    markers: markers,
    dataLabels: dataLabels,
    fill: fill,
    grid: grid,
    legend: legend,
    plotOptionsBar: plotOptionsBar,
    plotOptionsCandleStick: plotOptionsCandleStick,
    plotOptionsHeatMap: plotOptionsHeatMap,
    plotOptionsPie: plotOptionsHeatMap,
    plotOptionsRadar: plotOptionsRadar,
    plotOptionsRadialBar: plotOptionsRadialBar
  };

})();


