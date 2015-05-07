var React = require('React'),
    BS = require('react-bootstrap'),
    MetricDropdown = require('./MetricDropdown.js'),
    DatePicker = require('./DatePicker.js')

module.exports = React.createClass({displayName: "exports",
    render: function() {
        return (
            React.createElement("div", null, 
                React.createElement(MetricDropdown, {metric: this.props.metric}), 
                React.createElement(DatePicker, {dateRange: this.props.dateRange})
            )
        )
    }
})
