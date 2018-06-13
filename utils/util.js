
function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()


  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function transTimeIntoDaysAgo ( create_at) {
  let current_time = new Date();
  // transform to timestamps
  let create_timestamps = new Date(create_at) 
  let apart_millisecond = current_time.getTime() - create_timestamps.getTime();
  //calculation apart days
  let apart_days = Math.floor(apart_millisecond/(24*3600*1000))
  // millisecond after apart days
  let left_millisecond_afterdays = apart_millisecond%(24*3600*1000),
     // calculation apart hours
    apart_hours = Math.floor(left_millisecond_afterdays/(3600*1000)),
    // millisecond after apart hours
    left_millisecond_afterhours = left_millisecond_afterdays%(3600*1000),
    // calculation apart minutes
    apart_minutes = Math.floor(left_millisecond_afterhours/(60*1000)),
    // millisecond after apart minutes
    left_millisecond_aftermins = left_millisecond_afterhours%(60*1000),
    // calculation apart seconds
    apart_seconds = Math.round(left_millisecond_aftermins/1000);

    return {
      day: apart_days,
      hour: apart_hours,
      minute: apart_minutes,
      second: apart_seconds,
    }
}

module.exports = {
  formatTime: formatTime,
  transTime: transTimeIntoDaysAgo
}