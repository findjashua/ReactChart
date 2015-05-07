var React = require('React'),
    BS = require('react-bootstrap'),
    MetricDropdown = require('./MetricDropdown.js'),
    DatePicker = require('./DatePicker.js')

module.exports = React.createClass({
    render: function() {
        return (
            <div>
                <MetricDropdown metric={this.props.metric} />
                <DatePicker dateRange={this.props.dateRange} />
            </div>
        )
    }
})
