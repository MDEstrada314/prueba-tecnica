const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      return await response.json();
    } catch (error) {
      console.error("Error cargando datos:", error);
    }
  };
  
  export default fetchData;
  