var React = require('react'),
    d3 = require('d3'),
    rd3 = require('react-d3'),
    BarChart = rd3.BarChart,
    _ = require('lodash')

module.exports = React.createClass({
    render: function() {
        return (
            <BarChart
                data={this.getChartData(this.props.dateRange)}
                width={600}
                height={200}
                fill={'2FA580'}
                title={this.props.metric.label} />
        )
    },

    getChartData(dateRange) {
        var self = this,
            data = getData().objects
        return _.chain(data)
            .filter(function(item) {
                var date = new Date(item.start)
                return date >= new Date(dateRange.start) && date <= new Date(dateRange.end)
            })
            .map(function(item) {
                return {
                    label: self.formatDate(item.start),
                    value: item[self.props.metric.value]
                }
            })
            .value()
    },

    formatDate: function(date) {
        return date.split('T')[0].split('-').slice(1, 3).join('/')
    }
})

function getData() {
    return {"meta": {"limit": 1000, "next": null, "offset": 0, "previous": null, "total_count": 31}, "objects": [{"app_clicks": 0, "app_engagements": 0, "billed_charge_local_micro": 859270000, "clicks": 1234, "impressions": 133511, "kpi_primary_events": 1274, "kpi_primary_micro": 1344140, "start": "2015-04-06T07:00:00"}, {"app_clicks": 0, "app_engagements": 0, "billed_charge_local_micro": 860000000, "clicks": 1249, "impressions": 130385, "kpi_primary_events": 1291, "kpi_primary_micro": 1316309, "start": "2015-04-07T07:00:00"}, {"app_clicks": 0, "app_engagements": 0, "billed_charge_local_micro": 562360000, "clicks": 654, "impressions": 74665, "kpi_primary_events": 675, "kpi_primary_micro": 1648110, "start": "2015-04-08T07:00:00"}, {"app_clicks": 0, "app_engagements": 0, "billed_charge_local_micro": 0, "clicks": 0, "impressions": 0, "kpi_primary_events": 0, "kpi_primary_micro": null, "start": "2015-04-09T07:00:00"}, {"app_clicks": 0, "app_engagements": 0, "billed_charge_local_micro": 860000000, "clicks": 1344, "impressions": 137128, "kpi_primary_events": 1393, "kpi_primary_micro": 1227428, "start": "2015-04-10T07:00:00"}, {"app_clicks": 0, "app_engagements": 0, "billed_charge_local_micro": 860000000, "clicks": 1161, "impressions": 127703, "kpi_primary_events": 1186, "kpi_primary_micro": 1433372, "start": "2015-04-11T07:00:00"}, {"app_clicks": 0, "app_engagements": 0, "billed_charge_local_micro": 860000000, "clicks": 1126, "impressions": 135082, "kpi_primary_events": 1157, "kpi_primary_micro": 1460929, "start": "2015-04-12T07:00:00"}, {"app_clicks": 0, "app_engagements": 0, "billed_charge_local_micro": 860000000, "clicks": 1290, "impressions": 153047, "kpi_primary_events": 1315, "kpi_primary_micro": 1268787, "start": "2015-04-13T07:00:00"}, {"app_clicks": 0, "app_engagements": 0, "billed_charge_local_micro": 860000000, "clicks": 1335, "impressions": 148573, "kpi_primary_events": 1369, "kpi_primary_micro": 1229870, "start": "2015-04-14T07:00:00"}, {"app_clicks": 0, "app_engagements": 0, "billed_charge_local_micro": 844250000, "clicks": 1163, "impressions": 141647, "kpi_primary_events": 1198, "kpi_primary_micro": 1393046, "start": "2015-04-15T07:00:00"}, {"app_clicks": 0, "app_engagements": 0, "billed_charge_local_micro": 846570000, "clicks": 1149, "impressions": 137283, "kpi_primary_events": 1174, "kpi_primary_micro": 1419643, "start": "2015-04-16T07:00:00"}, {"app_clicks": 0, "app_engagements": 0, "billed_charge_local_micro": 849760000, "clicks": 1061, "impressions": 121375, "kpi_primary_events": 1088, "kpi_primary_micro": 1523724, "start": "2015-04-17T07:00:00"}, {"app_clicks": 0, "app_engagements": 0, "billed_charge_local_micro": 854940000, "clicks": 1126, "impressions": 125142, "kpi_primary_events": 1150, "kpi_primary_micro": 1459640, "start": "2015-04-18T07:00:00"}, {"app_clicks": 0, "app_engagements": 0, "billed_charge_local_micro": 860000000, "clicks": 1205, "impressions": 136498, "kpi_primary_events": 1240, "kpi_primary_micro": 1386751, "start": "2015-04-19T07:00:00"}, {"app_clicks": 0, "app_engagements": 0, "billed_charge_local_micro": 856770000, "clicks": 1166, "impressions": 134071, "kpi_primary_events": 1188, "kpi_primary_micro": 1435497, "start": "2015-04-20T07:00:00"}, {"app_clicks": 0, "app_engagements": 0, "billed_charge_local_micro": 845910000, "clicks": 1071, "impressions": 120231, "kpi_primary_events": 1092, "kpi_primary_micro": 1515827, "start": "2015-04-21T07:00:00"}, {"app_clicks": 0, "app_engagements": 0, "billed_charge_local_micro": 853740000, "clicks": 1043, "impressions": 124413, "kpi_primary_events": 1062, "kpi_primary_micro": 1593246, "start": "2015-04-22T07:00:00"}, {"app_clicks": 0, "app_engagements": 0, "billed_charge_local_micro": 860000000, "clicks": 1029, "impressions": 117213, "kpi_primary_events": 1045, "kpi_primary_micro": 1617673, "start": "2015-04-23T07:00:00"}, {"app_clicks": 0, "app_engagements": 0, "billed_charge_local_micro": 850860000, "clicks": 1126, "impressions": 135158, "kpi_primary_events": 1158, "kpi_primary_micro": 1421738, "start": "2015-04-24T07:00:00"}, {"app_clicks": 0, "app_engagements": 0, "billed_charge_local_micro": 860000000, "clicks": 1163, "impressions": 132774, "kpi_primary_events": 1183, "kpi_primary_micro": 1418430, "start": "2015-04-25T07:00:00"}, {"app_clicks": 0, "app_engagements": 0, "billed_charge_local_micro": 860000000, "clicks": 1217, "impressions": 138515, "kpi_primary_events": 1247, "kpi_primary_micro": 1337172, "start": "2015-04-26T07:00:00"}, {"app_clicks": 0, "app_engagements": 0, "billed_charge_local_micro": 846330000, "clicks": 1099, "impressions": 134553, "kpi_primary_events": 1123, "kpi_primary_micro": 1462562, "start": "2015-04-27T07:00:00"}, {"app_clicks": 0, "app_engagements": 0, "billed_charge_local_micro": 859240000, "clicks": 956, "impressions": 134632, "kpi_primary_events": 982, "kpi_primary_micro": 1784973, "start": "2015-04-28T07:00:00"}, {"app_clicks": 0, "app_engagements": 0, "billed_charge_local_micro": 860000000, "clicks": 1001, "impressions": 138423, "kpi_primary_events": 1028, "kpi_primary_micro": 1705897, "start": "2015-04-29T07:00:00"}, {"app_clicks": 0, "app_engagements": 0, "billed_charge_local_micro": 820920000, "clicks": 952, "impressions": 151107, "kpi_primary_events": 975, "kpi_primary_micro": 1622777, "start": "2015-04-30T07:00:00"}, {"app_clicks": 0, "app_engagements": 0, "billed_charge_local_micro": 844340000, "clicks": 942, "impressions": 130123, "kpi_primary_events": 958, "kpi_primary_micro": 1714212, "start": "2015-05-01T07:00:00"}, {"app_clicks": 0, "app_engagements": 0, "billed_charge_local_micro": 849320000, "clicks": 1041, "impressions": 139484, "kpi_primary_events": 1067, "kpi_primary_micro": 1555339, "start": "2015-05-02T07:00:00"}, {"app_clicks": 0, "app_engagements": 0, "billed_charge_local_micro": 840480000, "clicks": 1084, "impressions": 139318, "kpi_primary_events": 1113, "kpi_primary_micro": 1486468, "start": "2015-05-03T07:00:00"}, {"app_clicks": 0, "app_engagements": 0, "billed_charge_local_micro": 843960000, "clicks": 1046, "impressions": 147516, "kpi_primary_events": 1066, "kpi_primary_micro": 1545694, "start": "2015-05-04T07:00:00"}, {"app_clicks": 0, "app_engagements": 0, "billed_charge_local_micro": 778820000, "clicks": 899, "impressions": 123673, "kpi_primary_events": 920, "kpi_primary_micro": 1599084, "start": "2015-05-05T07:00:00"}, {"app_clicks": 0, "app_engagements": 0, "billed_charge_local_micro": 858300000, "clicks": 999, "impressions": 124254, "kpi_primary_events": 1023, "kpi_primary_micro": 1629004, "start": "2015-05-06T07:00:00"}]}
}
