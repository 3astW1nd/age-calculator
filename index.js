function calcAge() {
    var dayInput = document.getElementById('date-input').value;
    var monthInput = document.getElementById('month-input').value;
    var yearInput = document.getElementById('year-input').value;
    
    const today = new Date();
    const birthDate = new Date(`${yearInput}-${monthInput}-${dayInput}`);

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();
    
    (dayInput > 0 && dayInput < 32)? dayInput = true: dayInput = false;
    (monthInput > 0 && monthInput < 13)? monthInput = true: monthInput = false;
    (yearInput > 0 && yearInput < today.getFullYear())? yearInput = true: yearInput = false;
    
    
    // invalid day
    if (!dayInput || !monthInput || !yearInput) {
      if(!dayInput) {
        const dayError = document.getElementById('day-error');
        dayError.innerHTML = 'Invalid';

        const dateInput = document.getElementById('date-input');
        dateInput.style.setProperty('border-color', 'hsl(0, 100%, 67%)');
      
        const dayLabel = document.getElementById('day-label');
        dayLabel.style.setProperty('color', 'hsl(0, 100%, 67%)');
      }

      if(!monthInput) {
        const monthError = document.getElementById('month-error');
        monthError.innerHTML = 'Invalid';

        const monthInput = document.getElementById('month-input');
        monthInput.style.setProperty('border-color', 'hsl(0, 100%, 67%)');
      
        const monthLabel = document.getElementById('month-label');
        monthLabel.style.setProperty('color', 'hsl(0, 100%, 67%)');
      }

      
      if(!yearInput) {
        const yearError = document.getElementById('year-error');
        yearError.innerHTML = 'Invalid';

        const yearInput = document.getElementById('year-input');
        yearInput.style.setProperty('border-color', 'hsl(0, 100%, 67%)');
      
        const yearLabel = document.getElementById('year-label');
        yearLabel.style.setProperty('color', 'hsl(0, 100%, 67%)');
      }

      return;
    } 
    else {
      // valid date
      const dayError = document.getElementById('day-error');
      dayError.innerHTML = '';
      const dateInput = document.getElementById('date-input');
      dateInput.style.setProperty('border-color', 'hsl(0, 0%, 86%)');
      const dayLabel = document.getElementById('day-label');
      dayLabel.style.setProperty('color', 'hsl(0, 1%, 44%)');

      // valid month
      const monthError = document.getElementById('month-error');
      monthError.innerHTML = '';
      const monthInput = document.getElementById('month-input');
      monthInput.style.setProperty('border-color', 'hsl(0, 0%, 86%)');
      const monthLabel = document.getElementById('month-label');
      monthLabel.style.setProperty('color', 'hsl(0, 1%, 44%)');

      // valid year
      const yearError = document.getElementById('year-error');
      yearError.innerHTML = '';
      const yearInput = document.getElementById('year-input');
      yearInput.style.setProperty('border-color', 'hsl(0, 0%, 86%)');
      const yearLabel = document.getElementById('year-label');
      yearLabel.style.setProperty('color', 'hsl(0, 1%, 44%)');
    }
    
  
  
    if (days < 0) {
      months--;
      const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      days += prevMonth.getDate();
    }
  
    if (months < 0) {
      years--;
      months += 12;
    }
  
    document.getElementById('years').textContent = years;
    document.getElementById('months').textContent = months;
    document.getElementById('days').textContent = days;
  }
  