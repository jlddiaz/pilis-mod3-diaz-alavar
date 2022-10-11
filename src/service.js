export const getUbicaciones = async(latitud=-24.2051671, longitud=-65.3755962) => {
    try {
        // const response = await fetch(`${SERVER_DOMAIN}/color-palettes`);
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?current_weather=true&latitude=${latitud}&longitude=${longitud}&timezone=America/Argentina/Jujuy`)
        return response.json();
      } catch {
        throw new Error('could not fetch');
      }
}