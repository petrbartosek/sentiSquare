import TextRazorResponse from '../assets/TextRazorResponse';

const useEntities = () => {
    // Fake TextRazor response data
    const data = TextRazorResponse;
    console.log("Response data:", data.response.entities);

    // Filter objects with entity type
    const filteredData = data.response.entities.filter( entity => entity.type );
    console.log('Filtered data:', filteredData);

    // Transforming and cleaning data
    const transformedData = filteredData.map(entity => {
      return {
        id: entity.id,
        text: entity.matchedText,
        type: entity.type[0]
      }
    });
    console.log("TransformedData:", transformedData)

    // Types array // prbl better for in loop
    const typesArray = [];
    transformedData.map(entity => {
      typesArray.push(entity.type)
    });
    console.log("Types array:", typesArray)

    //Unique types array
    const unique = [...new Set(typesArray)];
    console.log('Unique data: ', unique )

    // Entities counts
    const entitiesCounts = typesArray.reduce((acc, value) => ({
      ...acc,
      [value]: (acc[value] || 0) + 1
   }), {});
   console.log('Entities counts array: ', entitiesCounts);

   //Recharts data object
   const keys = Object.keys(entitiesCounts);
   const values = Object.values(entitiesCounts);

   const rechartsData = keys.map( (key, index) => {
    return { entity : key,
             count : values[index]
    }
   })

   console.log('rechartsData', rechartsData);

   return rechartsData;
}

export default useEntities;    