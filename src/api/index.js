export const fetchdata = async () => {
    const response = await fetch('https://api.adviceslip.com/advice');
    const data = await response.json();
    const advice = data.slip.advice;
    return advice;
  };
  