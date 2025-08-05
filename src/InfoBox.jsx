import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';


export default function InfoBox({info}) {
    const INIT_URL = "https://images.unsplash.com/photo-1540458398062-9bbc39e99010?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZHVydHklMjB3ZWF0aGVyfGVufDB8fDB8fHww";
    let COLD_URL = "https://media.istockphoto.com/id/171581826/photo/business-commuters-walking-home-after-work-sunset-backlit-blurred-motion.webp?a=1&b=1&s=612x612&w=0&k=20&c=8-WZiqLxLRKRa1A5zBxloBNSD-XOrwEvWUdNB8_Qrbs="
    let HOT_URL = "https://plus.unsplash.com/premium_photo-1668792545129-72d876248c1b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29sZCUyMGltYWdlfGVufDB8fDB8fHww"
    let RAIN_URL = "https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=sw_CRZcGopaGHDWqtT1M8y64k5uCcq-nro55Bw3YzyQ="
    

    return (
        <div className='InfoBox'>
             <div className='card-container'>
              <Card sx={{ maxWidth: 345, borderRadius: '1.5rem', boxShadow: '10px 10px 20px rgba(3, 1, 1, 0.2)', backgroundColor: 'rgba(255,255,255,0.3)', backdropFilter: 'blur(4px)' }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity > 80 ? RAIN_URL : info.temp < 15 ? HOT_URL : COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} {info.humidity > 80 ? < ThunderstormIcon/> : info.temp < 15 ?<WbSunnyIcon/> : < AcUnitIcon/>}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
            <p><b>Temperature:</b> {info.temp}°C</p>
                <p><b>Humidity:</b> {info.humidity}%</p>
            <p><b>Min Temperature:</b> {info.temp_min}°C</p>
            <p><b>Max Temperature: </b>{info.temp_max}°C</p>
            <p>The Weather can be described as <i> {info.weather}</i> and feels like { info.feelsLike}&deg;C</p>
        </Typography>
      </CardContent>
    </Card>
    </div>
        </div>
           
          
    );
}