var React = require('react'),
  moment = require('moment'),
  _ = require('lodash'),
  BS = require('react-bootstrap'),
  Button = BS.Button,
  DateRangePicker = require('react-bootstrap-daterangepicker'),
  dispatcher = require('../dispatcher.js')

module.exports = React.createClass ({displayName: "exports",
  render: function() {
    var
      dateRange = this.props.dateRange,
      options = this.getDateDefaults();
    return (
      React.createElement(DateRangePicker, {
        applyClass: "btn-sm btn-primary", 
        buttonClasses: ['btn btn-default'], 
        cancelClass: "btn-sm", 
        opens: "left", 
        showDropdowns: true, 
        timePicker: false, 
        startDate: dateRange.start, 
        endDate: dateRange.end, 
        format: options.dateFormat, 
        maxDate: options.maxDate, 
        ranges: options.dateRanges, 
        onApply: this.dateChanged
       }, 
        React.createElement(Button, {className: "selected-date-range-btn"}, 
          this.getLabel(dateRange)
        )
       )
    );
  },

  dateChanged: function(event, picker) {
    dispatcher.trigger('dateRange', {
      start: picker.startDate,
      end: picker.endDate
    })
  },

  getLabel: function(dateRange) {
    return this.getDateString(dateRange.start) + ' - ' + this.getDateString(dateRange.end)
  },

  getDateString: function(date) {
    return String(date._d).split(' ').slice(1, 4).join(' ')
  },

  getDateDefaults: function() {
    return {
      maxDate: moment().endOf('month').add(1, 'years'),
      dateFormat: 'MMM D, YYYY',
      dateRanges: {
        'All time': [
            moment({ year: 2010, month: 0, day: 1, hour: 0, minute: 0, second:0 }),
            moment().endOf('day').add(1, 'years')
        ],
        'Yesterday': [
            moment().startOf('day').subtract(1, 'days'),
            moment().endOf('day').subtract(1, 'days')
        ],
        'Today': [
            moment().startOf('day'),
            moment().endOf('day')
        ],
        'Last 7 days': [
            moment().startOf('day').subtract(7, 'days'),
            moment().endOf('day')
        ],
        'Ending today': [
            moment().startOf('day'),
            moment().endOf('day')
        ],
        'Ending next 7 days': [
            moment().startOf('day'),
            moment().endOf('day').add(7, 'days')
        ],
        'Month to date': [
            moment().startOf('month'),
            moment().endOf('day')
        ]
      }
    }
  }
})
