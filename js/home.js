function getExpYearsNumber(){
    var startDate = (new Date('2019-03-01')).getTime();
    var now = (new Date()).getTime();
    var months = (now - startDate) / (1000 * 60 * 60 * 24 * 30);
    var expYears = Math.floor(months / 12);
    var expMonths = Math.floor(months - (expYears * 12));
    var text = '';
    if(expYears > 0){
        text = expYears + ' năm ' + expMonths + ' tháng';
    }else{
        text = expMonths + ' tháng';
    }
    return text;
};
function loadExpYearsNumber(){
    $('#exp-year-number').text(getExpYearsNumber());
}
