export  const getIPAndCountry = async () => {
    try {
      // Get IP address from api64.ipify.org
      const ipResponse = await fetch('https://api64.ipify.org?format=json');
      if (!ipResponse.ok) {
        throw new Error(`IP API HTTP error! Status: ${ipResponse.status}`);
      }
      const ipData = await ipResponse.json();
      const ip = ipData.ip;
  
      // Get country information from ipapi using the obtained IP
      const countryResponse = await fetch(`https://ipapi.co/${ip}/json/`);
      if (!countryResponse.ok) {
        throw new Error(`Country API HTTP error! Status: ${countryResponse.status}`);
      }
      const countryData = await countryResponse.json();
        console.log(countryData);
      const country = countryData.continent_code;
  
      return { ip, country };
    } catch (error) {
      throw new Error(`Error fetching IP and country: ${error.message}`);
    }
  }
