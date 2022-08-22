import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <h1>New york</h1>
      <ul>
        <li>Last updated: Monday 16:27</li>
        <li>Overcast clouds</li>
      </ul>
      <div class="row">
        <div class="col-6">
          <span>☁️</span>
          <span>15℃</span>
        </div>
        <div class="col-6">
          <ul>
            <li>Humidity: 78%</li>
            <li>Wind: 5 km/h</li>
          </ul>
        </div>
      </div>

      <div class="row">
        <div class="col-2">
          <div class="forecast-day">Mon</div>
          <span>🌥️</span>
          <div class="temperature">
            <span class="max-temp">16°</span>
            <span class="min-temp">10°</span>
          </div>
        </div>

        <div class="col-2">
          <div class="forecast-day">Mon</div>
          <span>🌥️</span>
          <div class="temperature">
            <span class="max-temp">16°</span>
            <span class="min-temp">10°</span>
          </div>
        </div>

        <div class="col-2">
          <div class="forecast-day">Mon</div>
          <span>🌥️</span>
          <div class="temperature">
            <span class="max-temp">16°</span>
            <span class="min-temp">10°</span>
          </div>
        </div>

        <div class="col-2">
          <div class="forecast-day">Mon</div>
          <span>🌥️</span>
          <div class="temperature">
            <span class="max-temp">16°</span>
            <span class="min-temp">10°</span>
          </div>
        </div>

        <div class="col-2">
          <div class="forecast-day">Mon</div>
          <span>🌥️</span>
          <div class="temperature">
            <span class="max-temp">16°</span>
            <span class="min-temp">10°</span>
          </div>
        </div>
        <div class="col-2">
          <div class="forecast-day">Mon</div>
          <span>🌥️</span>
          <div class="temperature">
            <span class="max-temp">16°</span>
            <span class="min-temp">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
