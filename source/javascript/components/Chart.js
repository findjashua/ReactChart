var React = require('react'),
    moment = require('moment'),
    Toolbar = require('./Toolbar.js'),
    BarChart = require('./BarChart.js'),
    dispatcher = require('../dispatcher.js')

module.exports = React.createClass({
    getInitialState: function() {
        return {
            dateRange: {
                start: moment({ year: 2010, month: 0, day: 1, hour: 0, minute: 0, second: 0 }),
                end: moment().endOf('day').add(1, 'years')
            },
            metric: {
                label: 'Clicks',
                value: 'clicks'
            }
        }
    },

    componentDidMount: function() {
        var listeners = this.getListeners()
        dispatcher.on(listeners)
    },

    componentWillUnmount: function() {
        var listeners = this.getListeners()
        dispatcher.off(listeners)
    },

    render: function() {
        console.log(this.state)
        return(
            <div>
                <Toolbar metric={this.state.metric} dateRange={this.state.dateRange} />
                <BarChart metric={this.state.metric} dateRange={this.state.dateRange} />
            </div>
        )
    },

    getListeners: function() {
        var self = this
        return {
            'metric': self.updateMetric,
            'dateRange': self.updateDateRange
        }
    },

    updateMetric: function(metric) {
        this.setState({
            metric: metric
        })
    },

    updateDateRange: function(dateRange) {
        this.setState({
            dateRange: dateRange
        })
    }
})
