import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

import ThunderstormIcon from '@mui/icons-material/Thunderstorm';


import "./InfoBox.css";

export default function InfoBox({ info }) {
  const HOT_URL =
    "https://media.istockphoto.com/id/1007768414/photo/blue-sky-with-bright-sun-and-clouds.jpg?s=612x612&w=0&k=20&c=MGd2-v42lNF7Ie6TtsYoKnohdCfOPFSPQt5XOz4uOy4=";
  const COLD_URL =
    "https://www.livemint.com/lm-img/img/2023/12/14/600x338/ANI-20231209007-0_1702432555116_1702534692056.jpg";
  const RAINY_URL =
    "https://t4.ftcdn.net/jpg/01/63/96/63/360_F_163966311_qh3qSk57mw9oLPOklZigzX9zlB5DgdaM.jpg";
  return (
    <div className="card">
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
              info.humidity > 80
                ? RAINY_URL
                : info.temp > 15
                ? HOT_URL
                : COLD_URL
            }
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}{info.humidity > 80
                ? <span><ThunderstormIcon/></span>
                : info.temp > 15
                ? <span><WbSunnyIcon /></span>
                : <span><AcUnitIcon/></span>}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              component={"span"}
            >
              <p>Temperature = {info.temp}&deg;C</p>
              <p>humidity = {info.humidity}</p>
              <p>humidity = {info.humidity}</p>
              <p>temp = {info.temp}&deg;C</p>
              <p>tempMax = {info.tempMax}&deg;C</p>
              <p>tempMin = {info.tempMin}&deg;C</p>
              <p>
                <i>
                  The weather can described as {info.weather} and feels like{" "}
                  {info.feelsLike}&deg;C
                </i>
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
