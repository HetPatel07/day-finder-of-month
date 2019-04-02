    //    var getDaysInMonth = function (month, year) {
    //        return new Date(year, month, 0).getDate();
    //    };
    //
    //    var result = getDaysInMonth(main, 2012);
    function submit() {
        var exam = document.getElementById('exam').innerHTML;

        var result = document.getElementById('result');
        var main = parseInt(exam);

        switch (main) {
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                result.innerHTML = '31';
                break;

            case 4:
            case 6:
            case 9:
            case 11:
                result.innerHTML = '30';
                break;
            case 2:
                result.innerHTML = '28';
                break;
            default:
                result.innerHTML = 'taro tango';
        }

        console.log(main);
    }
