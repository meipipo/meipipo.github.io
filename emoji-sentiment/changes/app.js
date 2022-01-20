const markerColor = '#570000';
const defaultRadius = 3;
const largeRadius = 6;
const datasets = [
    { label: '北海道', 'data': [{ x: 0.11862515260686228, y: 0.1840305392078893 }], 'backgroundColor': markerColor, pointRadius: defaultRadius, pointHoverRadius: largeRadius },
    { label: '青森', 'data': [{ x: -0.009626752237797605, y: 0.08979713603818616 }], 'backgroundColor': markerColor, pointRadius: defaultRadius, pointHoverRadius: largeRadius },
    { label: '岩手', 'data': [{ x: 0.016586984096009394, y: 0.022031427182893325 }], 'backgroundColor': markerColor, pointRadius: defaultRadius, pointHoverRadius: largeRadius },
    { label: '宮城', 'data': [{ x: 0.0809138852898776, y: 0.07911781313315826 }], 'backgroundColor': markerColor, pointRadius: defaultRadius, pointHoverRadius: largeRadius },
    { label: '秋田', 'data': [{ x: 0.07841610588955016, y: 0.005688282138794137 }], 'backgroundColor': markerColor, pointRadius: defaultRadius, pointHoverRadius: largeRadius },
    { label: '山形', 'data': [{ x: 0.08494853009366594, y: 0.10607252075141986 }], 'backgroundColor': markerColor, pointRadius: defaultRadius, pointHoverRadius: largeRadius },
    { label: '福島', 'data': [{ x: -0.026870762447485652, y: 0.0 }], 'backgroundColor': markerColor, pointRadius: defaultRadius, pointHoverRadius: largeRadius },
    { label: '茨城', 'data': [{ x: 0.0769898195279964, y: 0.05508188676930631 }], 'backgroundColor': markerColor, pointRadius: defaultRadius, pointHoverRadius: largeRadius },
    { label: '栃木', 'data': [{ x: 0.16722274389147515, y: 0.11347671025613322 }], 'backgroundColor': markerColor, pointRadius: defaultRadius, pointHoverRadius: largeRadius },
    { label: '群馬', 'data': [{ x: 0.023909735807299323, y: -0.004654889541760596 }], 'backgroundColor': markerColor, pointRadius: defaultRadius, pointHoverRadius: largeRadius },
    { label: '埼玉', 'data': [{ x: 0.10486858641604296, y: 0.14334588119215394 }], 'backgroundColor': markerColor, pointRadius: defaultRadius, pointHoverRadius: largeRadius },
    { label: '千葉', 'data': [{ x: 0.018256224582159433, y: 0.04811263712533463 }], 'backgroundColor': markerColor, pointRadius: defaultRadius, pointHoverRadius: largeRadius },
    { label: '東京', 'data': [{ x: -0.1289259589707561, y: -0.001799615213852207 }], 'backgroundColor': markerColor, pointRadius: defaultRadius, pointHoverRadius: largeRadius },
    { label: '神奈川', 'data': [{ x: 0.17373549883990722, y: 0.1419390127170792 }], 'backgroundColor': markerColor, pointRadius: defaultRadius, pointHoverRadius: largeRadius },
    { label: '新潟', 'data': [{ x: 0.06837370242214535, y: 0.031627186471309666 }], 'backgroundColor': markerColor, pointRadius: defaultRadius, pointHoverRadius: largeRadius },
    { label: '富山', 'data': [{ x: 0.15008068854222695, y: 0.2655810510732791 }], 'backgroundColor': markerColor, pointRadius: defaultRadius, pointHoverRadius: largeRadius },
    { label: '石川', 'data': [{ x: 0.03011115801322642, y: 0.06943005181347153 }], 'backgroundColor': markerColor, pointRadius: defaultRadius, pointHoverRadius: largeRadius },
    { label: '福井', 'data': [{ x: 0.12940252522201423, y: 0.18712738776006815 }], 'backgroundColor': markerColor, pointRadius: defaultRadius, pointHoverRadius: largeRadius },
    { label: '山梨', 'data': [{ x: 0.13881373569198752, y: 0.17358034635521544 }], 'backgroundColor': markerColor, pointRadius: defaultRadius, pointHoverRadius: largeRadius },
    { label: '長野', 'data': [{ x: 0.12299667690236826, y: 0.16797860145204432 }], 'backgroundColor': markerColor, pointRadius: defaultRadius, pointHoverRadius: largeRadius },
    { label: '岐阜', 'data': [{ x: 0.09657228017883762, y: 0.13326503606949236 }], 'backgroundColor': markerColor, pointRadius: defaultRadius, pointHoverRadius: largeRadius },
    { label: '静岡', 'data': [{ x: -0.02173822094667518, y: -0.026615498885862843 }], 'backgroundColor': markerColor, pointRadius: defaultRadius, pointHoverRadius: largeRadius },
    { label: '愛知', 'data': [{ x: -0.03705674616612647, y: 0.09420655929840162 }], 'backgroundColor': markerColor, pointRadius: defaultRadius, pointHoverRadius: largeRadius },
    { label: '三重', 'data': [{ x: -0.14885668541401542, y: -0.18385214007782086 }], 'backgroundColor': markerColor, pointRadius: defaultRadius, pointHoverRadius: largeRadius },
    { label: '滋賀', 'data': [{ x: -0.025130092651351632, y: -0.01227869788692176 }], 'backgroundColor': markerColor, pointRadius: defaultRadius, pointHoverRadius: largeRadius },
    { label: '京都', 'data': [{ x: -0.010830077455617256, y: 0.05490196078431366 }], 'backgroundColor': markerColor, pointRadius: defaultRadius, pointHoverRadius: largeRadius },
    { label: '大阪', 'data': [{ x: -0.14181258634438929, y: 0.02586449254990163 }], 'backgroundColor': markerColor, pointRadius: defaultRadius, pointHoverRadius: largeRadius },
    { label: '兵庫', 'data': [{ x: 0.03161027008569235, y: 0.0647733873373209 }], 'backgroundColor': markerColor, pointRadius: defaultRadius, pointHoverRadius: largeRadius },
    { label: '奈良', 'data': [{ x: 0.021922919946358893, y: 0.09918962722852508 }], 'backgroundColor': markerColor, pointRadius: defaultRadius, pointHoverRadius: largeRadius },
    { label: '和歌山', 'data': [{ x: 0.24226006191950458, y: 0.4067289719626168 }], 'backgroundColor': markerColor, pointRadius: defaultRadius, pointHoverRadius: largeRadius },
    { label: '鳥取', 'data': [{ x: -0.14664684247593707, y: 0.07438687672567798 }], 'backgroundColor': markerColor, pointRadius: defaultRadius, pointHoverRadius: largeRadius },
    { label: '島根', 'data': [{ x: -0.16145131902083504, y: 0.02690582959641259 }], 'backgroundColor': markerColor, pointRadius: defaultRadius, pointHoverRadius: largeRadius },
    { label: '岡山', 'data': [{ x: 0.11734638625977353, y: 0.18428500831124484 }], 'backgroundColor': markerColor, pointRadius: defaultRadius, pointHoverRadius: largeRadius },
    { label: '広島', 'data': [{ x: -0.030700530281886778, y: 0.09442060085836917 }], 'backgroundColor': markerColor, pointRadius: defaultRadius, pointHoverRadius: largeRadius },
    { label: '山口', 'data': [{ x: -0.008999782763864443, y: 0.18056022678133865 }], 'backgroundColor': markerColor, pointRadius: defaultRadius, pointHoverRadius: largeRadius },
    { label: '徳島', 'data': [{ x: -0.20884488448844885, y: 0.1463556851311953 }], 'backgroundColor': markerColor, pointRadius: defaultRadius, pointHoverRadius: largeRadius },
    { label: '香川', 'data': [{ x: 0.2379030818126629, y: 0.20684255852188213 }], 'backgroundColor': markerColor, pointRadius: defaultRadius, pointHoverRadius: largeRadius },
    { label: '愛媛', 'data': [{ x: 0.0982468085106382, y: 0.10755370755370754 }], 'backgroundColor': markerColor, pointRadius: defaultRadius, pointHoverRadius: largeRadius },
    { label: '高知', 'data': [{ x: 0.007216799763383666, y: 0.0570983649104594 }], 'backgroundColor': markerColor, pointRadius: defaultRadius, pointHoverRadius: largeRadius },
    { label: '福岡', 'data': [{ x: -0.01462629564463275, y: 0.14555744199207699 }], 'backgroundColor': markerColor, pointRadius: defaultRadius, pointHoverRadius: largeRadius },
    { label: '佐賀', 'data': [{ x: 0.0068502173626663445, y: -0.0907287395847109 }], 'backgroundColor': markerColor, pointRadius: defaultRadius, pointHoverRadius: largeRadius },
    { label: '長崎', 'data': [{ x: -0.03571849118813034, y: 0.14913516976297242 }], 'backgroundColor': markerColor, pointRadius: defaultRadius, pointHoverRadius: largeRadius },
    { label: '熊本', 'data': [{ x: -0.2444803446418955, y: -0.14362833306069042 }], 'backgroundColor': markerColor, pointRadius: defaultRadius, pointHoverRadius: largeRadius },
    { label: '大分', 'data': [{ x: -0.13965127542783343, y: 0.06571087216248489 }], 'backgroundColor': markerColor, pointRadius: defaultRadius, pointHoverRadius: largeRadius },
    { label: '宮崎', 'data': [{ x: -0.037242296608290815, y: 0.01962291450015823 }], 'backgroundColor': markerColor, pointRadius: defaultRadius, pointHoverRadius: largeRadius },
    { label: '鹿児島', 'data': [{ x: -0.13807060939959523, y: 0.23031649083842312 }], 'backgroundColor': markerColor, pointRadius: defaultRadius, pointHoverRadius: largeRadius },
    { label: '沖縄', 'data': [{ x: -0.014179678566230704, y: 0.16035472850185353 }], 'backgroundColor': markerColor, pointRadius: defaultRadius, pointHoverRadius: largeRadius }];

const labels = ['Hokkaidō', 'Aomori', 'Iwate', 'Miyagi', 'Akita', 'Yamagata', 'Fukushima', 'Ibaraki', 'Tochigi', 'Gunma', 'Saitama', 'Chiba', 'Tokyo', 'Kanagawa', 'Niigata', 'Toyama', 'Ishikawa', 'Fukui', 'Yamanashi', 'Nagano', 'Gifu', 'Shizuoka', 'Aichi', 'Mie', 'Shiga', 'Kyoto', 'Osaka', 'Hyogo', 'Nara', 'Wakayama', 'Tottori', 'Shimane', 'Okayama', 'Hiroshima', 'Yamaguchi', 'Tokushima', 'Kagawa', 'Ehime', 'Kochi', 'Fukuoka', 'Saga', 'Nagasaki', 'Kumamoto', 'Oita', 'Miyazaki', 'Kagoshima', 'Okinawa'];

var ctx = document.getElementById('scatter-chart').getContext('2d');
var config = {
    type: 'scatter',
    data: {
        datasets: datasets,
        labels: labels
    },
    options: {
        legend: {
            display: false
        },
        scales: {
            xAxes: [{
                ticks: { min: -0.5, max: 0.5 },
                scaleLabel: {
                    display: true,
                    labelString: 'ー　Positive　＋',
                    fontSize: 15
                },
            }],
            yAxes: [{
                ticks: { min: -0.5, max: 0.5 },
                scaleLabel: {
                    display: true,
                    labelString: 'ー　Negative　＋',
                    fontSize: 15
                },
            }],
        },
        tooltips: {
            callbacks: {
                label: function (tooltipItem, data) {
                    var label = data.labels[tooltipItem.datasetIndex];
                    var digit = 3;
                    return label + ' (' + Math.round(tooltipItem.xLabel * (10 ** digit)) / (10 ** digit) + ', ' + Math.round(tooltipItem.yLabel * (10 ** digit)) / (10 ** digit) + ')';
                }
            },
            bodyFontSize: 20,
            backgroundColor: 'rgb(79, 32, 0, 0.4)'
        },
        responsive: true,
        maintainAspectRatio: false
    },
};

Chart.pluginService.register({
    beforeDraw: function (c) {
        var ctx = c.chart.ctx;
        var chartArea = c.chartArea;
        var xscale = c.scales["x-axis-1"];
        var yscale = c.scales["y-axis-1"];
        ctx.save();
        // 左上
        ctx.fillStyle = "rgba(0, 100, 255, 0.2)";
        ctx.fillRect(chartArea.left,
            chartArea.top,
            xscale.getPixelForValue(0) - chartArea.left,
            yscale.getPixelForValue(0) - chartArea.top);
        // 右下
        ctx.fillStyle = "rgba(255, 0, 100, 0.2)";
        ctx.fillRect(xscale.getPixelForValue(0),
            yscale.getPixelForValue(0),
            chartArea.right - xscale.getPixelForValue(0),
            chartArea.bottom - yscale.getPixelForValue(0));
        // 左下
        ctx.fillStyle = "rgba(157, 100, 243, 0.2)";
        ctx.fillRect(chartArea.left,
            yscale.getPixelForValue(0),
            xscale.getPixelForValue(0) - chartArea.left,
            chartArea.bottom - yscale.getPixelForValue(0));
        // 右上
        ctx.fillStyle = "rgba(142, 0, 243, 0.4)"
        ctx.fillRect(xscale.getPixelForValue(0),
            chartArea.top,
            chartArea.right - xscale.getPixelForValue(0),
            yscale.getPixelForValue(0) - chartArea.top);
        ctx.restore();
    }
});

var myChart = new Chart(ctx, config);