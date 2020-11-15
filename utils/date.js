
const getUTCString = (time, replace) => {
    return replace ? new Date(time.replace(/ /g,"T")+'Z') : new Date(time);
}

const fetchTime = date => {
    let suffix = 'AM';
    let time ='';
    let hours = date.getHours();
    
    if(hours>=12){
        suffix = 'PM';
    }
    
    if(hours>12){
        hours = hours-12;
    }
    let append = '';
    const min = date.getMinutes();
    if(min<10){
    append='0';
    }
    time = hours+':'+append+''+min + ' ' + suffix;

    return time;
}

const fetchDay = date => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[date.getDay()];
}

const fetchDate = date => {
    const months = ['01','02','03','04','05','06','07','08','09','10','11','12'];
    return date.getDate()+'/'+months[date.getMonth()]+'/'+date.getFullYear();
}

export const getLocalTime = time => {
    const now = new Date().getTime();
    const UTCString = getUTCString(time)
    const previous = UTCString.getTime();
    const difference = now -previous;
    const second_difference = ~~(difference / (10*10*10));
    const min_difference = ~~(difference / (60*10*10*10));
    const hour_difference = ~~(difference / (60*60*10*10*10));
    const day_difference = ~~(difference / (24*60*60*10*10*10));
    const week_difference = ~~(difference / (7*24*60*60*10*10*10));
    const month_difference = ~~(difference / (4*7*24*60*60*10*10*10));
    const year_difference = ~~(difference / (12*4*7*24*60*60*10*10*10));

    if(year_difference===1){
        return  `Updated ${year_difference} year ago`;
    }

    if(year_difference>1){
        return  `Updated ${year_difference} years ago`;
    }

    if(month_difference===1){
        return  `Updated ${month_difference} month ago`;
    }

    if(month_difference>1){
        return  `Updated ${month_difference} months ago`;
    }

    if(week_difference===1){
        return  `Updated ${week_difference} week ago`;
    }

    if(week_difference>1){
        return  `Updated ${week_difference} weeks ago`;
    }

    if(day_difference===1){
        return  `Updated ${day_difference} day ago`;
    }

    if(day_difference>1){
        return  `Updated ${day_difference} days ago`;
    }

    if(hour_difference===1){
        return  `Updated ${hour_difference} hour ago`;
    }

    if(hour_difference>1){
        return  `Updated ${hour_difference} hours ago`;
    }

    if(min_difference===1){
        return  `Updated ${min_difference} minute ago`;
    }

    if(min_difference>1){
        return  `Updated ${min_difference} minutes ago`;
    }

    if(second_difference<1){
        return 'Updated moments ago';
    }

    if(second_difference===1){
        return  `Updated ${second_difference} second ago`;
    }

    if(second_difference>1){
        return  `Updated ${second_difference} seconds ago`;
    }

    return fetchDate(UTCString);
}