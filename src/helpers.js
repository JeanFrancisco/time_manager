export const calculateRemainingClass = (total, used) => {
    let remaining_class;

    if( total/4 > used ) {
        remaining_class = 'alert-danger';
    } else if ( total/2 > used ) {
        remaining_class = 'alert-warning';
    } else {
        remaining_class = 'alert-success';
    }

    return remaining_class;
}

export const convertTimeNotation = (time_notation, to_unit) => {
    const reg_exp = /(\d+[\.\d+]?)([d|h|m])/g;
    let days = 0, hours = 0, minutes = 0;
    let time_segment;

    while( (time_segment = reg_exp.exec(time_notation)) !== null ) {

        // time_segment should be similar to ['23d', '23', 'd']  or  ['48h', '48', 'h']
        // eval time units
        switch( time_segment[2] ) {
            case 'd': days += parseFloat( time_segment[1] ); break;
            case 'h': hours += parseFloat( time_segment[1] ); break;
            case 'm': minutes += parseFloat( time_segment[1] ); break;
        }
    }

    // eval the unit to convert
    switch(to_unit) {
        case 'days':
            days += (hours / 24);
            days += (minutes / (24 * 60));
            return days;
        case 'hours':
            hours += days * 24;
            hours += minutes / 60;
            return hours;
        case 'minutes':
            minutes += days * (24 * 60);
            minutes += hours * 60;
            return minutes;
        default:
            return undefined;
    }
}

export const transformToTimeNotation = (time_value, in_units) => {
    let days, hours, minutes, time_notation;
    switch(in_units) {
        case 'minutes':
            // 24 hours * 60 minutes = 1440 minutes
            days = parseInt(time_value / 1440);
            hours = parseInt( ( time_value - (days * 1440) ) / 60 );
            minutes = time_value - (days * 1440) - (hours * 60);
            break;
        case 'hours':
            days = parseInt(time_value / 24);
            hours = parseInt(time_value - days * 24);
            minutes = (time_value - (days * 24) - hours) * 60;
            break;
        case 'days':
            days = parseInt(time_value);
            hours = parseInt( (time_value - days) * 24 );
            minutes = ( time_value - days - (hours / 24) ) * 1440; // 1440 = 1d = 24h * 60m
            break;
    }

    time_notation = `${days}d ${hours}h ${minutes}m`;
    return time_notation;
}