export const FullWeekNames = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
]
  
const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
];
  
const FullMonthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];
  
const WeekNames = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export const getDateYearNumFormat = (date, type) => {
    const newDate = new Date(date);
    let month = monthNames[newDate.getMonth()];
    var fulldate = '';
    if (type === 1) {
      month = monthNames[newDate.getMonth()];
      fulldate = newDate.getDate() + ' ' + month;
    } else if (type === 2) {
        month = monthNames[newDate.getMonth()];
        fulldate = newDate.getDate() + ' ' + month + ' '+ newDate.getFullYear();
    } else {
      month = newDate.getMonth() + 1;
      if (month < 10) {
        month = '0' + month;
      }
      fulldate = newDate.getFullYear() + '-' + month + '-' + newDate.getDate();
    }
    return fulldate;
};
  
export const formatDate = (date, type) => {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
  
    if(type === 1){
      return [year, month, day].join(',');
    }else{
      return [year, month, day].join('-');
    }
};
  
export const formatTime = (date) => {
    const newDate = new Date(`1970-01-01T${date}`);
    let hours = newDate.getUTCHours();
    let minutes = newDate.getUTCMinutes();
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    let strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
};
  
export const formatTimeHh = (date, type) => {
    const newDate = new Date(date);
    var hours = newDate.getHours();
    if (hours < 10) {
      hours = '0' + hours;
    }
    var minutes = newDate.getMinutes();
    if (minutes < 10) {
      minutes = '0' + minutes;
    }
    var seconds = newDate.getSeconds();
    if (seconds < 10) {
      seconds = '0' + seconds;
    }
    var strTime = '';
    if (type === 1) {
      strTime = hours + ':' + minutes;
    } else {
      strTime = hours + ':' + minutes + ':' + seconds;
    }
    return strTime;
};
  
export const compareDate = (date) => {
    const newDate = new Date(date);
    const month = newDate.getMonth();
    const newdate = newDate.getDate();
    const hours = newDate.getHours();
    const minutes = newDate.getMinutes();
  
    const nowDate = new Date();
    const nowMonth = nowDate.getMonth();
    const nowdate = nowDate.getDate();
    const nowHours = nowDate.getHours();
    const nowTime = nowDate.getMinutes();
    if (
      (month === nowMonth && newdate === nowdate) ||
      month > nowMonth ||
      (month === nowMonth && newdate > nowdate)
    ) {
      if (nowHours < hours || nowHours === hours || minutes > nowTime) {
        return true;
      } else {
        return false;
      }
    } else if (month > nowMonth || (nowMonth === month && nowDate < newDate)) {
      return true;
    } else {
      return false;
    }
};