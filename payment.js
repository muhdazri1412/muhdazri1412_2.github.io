function required()
{
  var empt = document.form1.name.value;
  var empt1 = document.form1.org.value;
  var empt2 = document.form1.phoneNo.value;
  var empt3 = document.form1.email.value;
  var empt4 = document.form1.radio.value;
  if(empt === "")
  {
    alert("Please input your value in the required field.");
    return false;
  }
  else if(empt1 === "")
  {
    alert("Please input your value in the required field.");
    return false;
  }
  else if(empt2 === "")
  {
    alert("Please input your value in the required field.");
    return false;
  }
  else if(empt3 === "")
  {
    alert("Please input your value in the required field.");
    return false;
  }
  else if(empt4 === "")
  {
    alert("Please input your value in the required field.");
    return false;
  }
  else
  {
      alert('You have succesfully submitted your payment.')
      return true;
  }
}

function Check1() {
    if (document.getElementById('chkCredit').checked) {
        document.getElementById('ifCredit').style.visibility = 'visible';
        document.getElementById('ifFpx').style.visibility = 'hidden';
    }
    else
    {
      document.getElementById('ifCredit').style.visibility = 'hidden';
      document.getElementById('ifFpx').style.visibility = 'visible';
    }
  }
