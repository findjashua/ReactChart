var React = require('react'),
    Dropdown = require('react-dropdown'),
    _ = require('lodash'),
    dispatcher = require('../dispatcher.js')

module.exports = React.createClass({
    render: function() {
        return (
            <Dropdown
                options={this.getDropdownOptions()}
                value={this.props.metric}
                onChange={this.metricChanged} />
        )
    },

    getDropdownOptions: function() {
        var metrics = {
            clicks:             'Clicks',
            impressions:        'Impressions',
            kpi:                'KPI',
            kpi_primary_events: 'Results',
            kpi_primary_spend:  'KPI Spend',
            spend:              'Spend',
            engagements:        'Engagements',
            engagement_rate:    'Engagement Rate',
            app_clicks:         'App Clicks',
            app_engagements:    'App Engagements',
            kpi_primary_events: 'Events'
        }
        return _.map(metrics, function(label, value) {
            return {
                label: label,
                value: value
            }
        })
    },

    metricChanged: function(metric) {
        dispatcher.trigger('metric', metric)
    }
})
