document.getElementById('age-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var birthdate = new Date(document.getElementById('birthdate').value);
    var today = new Date();
    var age = today.getFullYear() - birthdate.getFullYear();
  
    if (today.getMonth() < birthdate.getMonth() || (today.getMonth() === birthdate.getMonth() && today.getDate() < birthdate.getDate())) {
      age--;
    }
  
    var months = Math.round((today.getMonth() - birthdate.getMonth()) );
  
    document.getElementById('result').textContent = 'Your age is ' + age + ' years and ' + months + ' months';
  });