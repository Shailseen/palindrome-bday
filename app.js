var userDateInput = document.querySelector("#inputDate");
var checkBtn = document.querySelector("#check-Btn");
var message = document.querySelector("#outputBox");

function datesExtract(){
    var bdaystr = userDateInput.value;
    var againDate = userDateInput.valueAsDate;
    console.log(typeof(againDate));

    if(bdaystr === '')
    {
      message.innerText = "Please select the date!"
    }
    else{
      var date = bdaystr.split("-");
        var yyyy = date[0];
        var mm = date[1];
        var dd = date[2];

       var date = {
        day: Number(dd),
        month: Number(mm),
        year: Number(yyyy),
       };
    var dateToString = dateToStr(date);
    var checkAllDates = checkPalindromeForAllDateFormats(dateToString);
    var supposePalindrome = false;
    for (var i = 0; i < checkAllDates.length; i++) {
      if (checkAllDates[i]) {
        supposePalindrome = true;
        break;
      }
    }

    
    if(supposePalindrome === true){

      message.innerText = "Yay! your birthday Date is Palindromic.";
    }
    else{
      //find next/previous date of bday;
      // var presentDate = bdaystr.replaceAll("-","");
      // console.log(date);
      var nextPalindrome = findNextPalindromeDate(againDate);
      console.log(nextPalindrome[0],nextPalindrome[1],nextPalindrome[2]);
      console.log(typeof(nextPalindrome[1]));
      if(nextPalindrome[2]==="+")
      {
        message.innerText = "Your birthdate is not Plaindromic! After " + nextPalindrome[0] + " days on " + nextPalindrome[1][0] + nextPalindrome[1][1] + "/" + nextPalindrome[1][2] + nextPalindrome[1][3] + "/" + nextPalindrome[1][4] + nextPalindrome[1][5] + nextPalindrome[1][6] + nextPalindrome[1][7]; 
      }
      else
      {
        message.innerText = "Your birthdate is not Plaindromic! Before " + nextPalindrome[0] + " days on " + nextPalindrome[1][0] + nextPalindrome[1][1] + "/" + nextPalindrome[1][2] + nextPalindrome[1][3] + "/" + nextPalindrome[1][4] + nextPalindrome[1][5] + nextPalindrome[1][6] + nextPalindrome[1][7]; 
      }
    }
}
}
function findNextPalindromeDate(date){
  var nextDate = findNextDate(date);
  return nextDate;
}


function findNextDate(date){
  var count = 0;
  var p = true;
  var today = date;
  // console.log(typeof(date));
  while(p === true)
  {
    // console.log(count);
    count = count + 1;
    // console.log(date);
    today = date.addDays(count);
    var day = today.getDate();
    var month = today.getMonth() + 1;
    var year = today.getFullYear();
    // console.log(today);
    
    var dateToString = dateToStr1(day,month,year);
    // console.log(dateToString);
    // console.log(typeof(dateToString));
    var checkAllDates = checkPalindromeForAllDateFormats1(dateToString);
    // var supposePalindrome = false;
    for (var i = 0; i < checkAllDates.length; i++) {
      if (checkAllDates[i]) {
        p = false;
        return [count,dateToString,"+"];
        // console.log(dateToString);
        break;
      }
    }

/////////////////////////////for Previous Date///////////////////
if(p === true){
    today = date.minusDays(count);
    var day = today.getDate();
    var month = today.getMonth() + 1;
    var year = today.getFullYear();
    // console.log(today);
    
    var dateToString = dateToStr1(day,month,year);
    // console.log(dateToString);
    // console.log(typeof(dateToString));
    var checkAllDates = checkPalindromeForAllDateFormats1(dateToString);
    // var supposePalindrome = false;
    for (var i = 0; i < checkAllDates.length; i++) {
      if (checkAllDates[i]) {
        p = false;
        return [count,dateToString,"-"];
        // console.log(dateToString);
        break;
      }
    }
  }

    

  }
  // console.log(count,dateToString);
}


function dateToStr1(day,month,year){
  var temp = "";
    if (day <= 9) {
        temp = temp + "0" + day;
    } else {
        temp = temp + day;
    }
    if (month <= 9) {
        temp = temp + "0" + month;
    } else {
        temp = temp + month;
    }
    temp = temp + year;
    return temp;
}


Date.prototype.addDays = function(count){
  var date = new Date(this.valueOf());
    date.setDate(date.getDate() + count);
    return date;
}

Date.prototype.minusDays = function(count){
  var date = new Date(this.valueOf());
    date.setDate(date.getDate() - count);
    return date;
}

function checkPalindromeForAllDateFormats(date) {
  var dateFormatList = dateFormatToAll(date);
  var palindromeList = [];

  for (var i = 0; i < dateFormatList.length; i++) {
    // console.log(dateFormatList[i]);
    var result = checkPalindromeOrNot(dateFormatList[i]);
    palindromeList.push(result);
  }
  return palindromeList;
}


function checkPalindromeForAllDateFormats1(date) {
  var dateFormatList = dateFormatToAll1(date);
  var palindromeList = [];

  for (var i = 0; i < dateFormatList.length; i++) {
    // console.log(dateFormatList[i]);
    var result = checkPalindromeOrNot1(dateFormatList[i]);
    palindromeList.push(result);
  }
  return palindromeList;
}



function dateToStr(date){
    var dateStr = { day: "",month: "",year: ""};

    if(date.day < 10){
        dateStr.day = "0" + date.day;
    }
    else {
        dateStr.day = date.day.toString();
    }
    if(date.month < 10){
        dateStr.month = "0" + date.month;
    }
    else {
        dateStr.month = date.month.toString();
    }
    dateStr.year = date.year.toString(); 
    return dateStr;
    // dateFormatToAll(date);
    //  console.log(dateStr);
}

function dateFormatToAll1(date){
  // console.log(date);
  // console.log(typeof(date));
  var ddmmyyyy = date[0] + date[1] + date[2] + date[3] + date[4] + date[5] + date[6] + date[7];
  var mmddyyyy = date[2] + date[3] + date[0] + date[1] + date[4] + date[5] + date[6] + date[7];
  var yyyymmdd = date[4] + date[5] + date[6] + date[7] + date[2] + date[3] + date[0] + date[1];
  var ddmmyy =  date[0] + date[1] + date[2] + date[3] + date[6] + date[7];
  var mmddyy = date[2] + date[3] + date[0] + date[1] + date[6] + date[7];
  var yymmdd = date[6] + date[7] + date[2] + date[3] + date[0] + date[1];
  //  console.log(yymmdd);
  //  console.log(mmddyy);
  return [ddmmyyyy,mmddyyyy,yyyymmdd,ddmmyy,mmddyy,yymmdd];
}

function dateFormatToAll(date){
  // console.log(typeof(date) + "old");
    var ddmmyyyy = date.day + date.month + date.year;
    var mmddyyyy = date.month + date.day + date.year;
    var yyyymmdd = date.year + date.month + date.day;
    var ddmmyy =  date.day + date.month + date.year.slice(-2);
    var mmddyy = date.month + date.day + date.year.slice(-2);
    var yymmdd = date.year.slice(-2) + date.month + date.day;
    // console.log(ddmmyyyy);
    return [ddmmyyyy,mmddyyyy,yyyymmdd,ddmmyy,mmddyy,yymmdd];
}


function reverseDate(dates){
    return dates.split("").reverse().join("");
}


function checkPalindromeOrNot(revstr){
    // console.log(userDateInput);
    // console.log(revstr);

    // console.log(revstr + "okkkk");
    var answer = reverseDate(revstr);
    return revstr === answer;
}




function checkPalindromeOrNot1(revstr){
  // console.log(userDateInput);
  // console.log(revstr);

  // console.log(revstr + "okkkk");
  revstr = revstr.toString();
  // console.log(revstr);
  var answer = reverseDate(revstr);
  return revstr === answer;
}
// checkBtn.addEventListener('click',datesExtract);
checkBtn.addEventListener("click",datesExtract);