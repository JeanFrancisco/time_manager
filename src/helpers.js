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