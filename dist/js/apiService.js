let fetchData=async a=>{try{return await(await fetch(a)).json()}catch(a){console.error("Error cargando datos:",a)}};export default fetchData;