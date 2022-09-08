import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
       
          <form id="search-form" class="mb-3" >
            <div class="row">
              <div class="col-9">
                <input
                  type="search"
                  placeholder="Enter a city"
                  class="form-control"
                  id="city-input"
                  autocomplete="off"
                  autoFocus="on"
                  
                />
              </div>
              <div class="col-3">
                <input type="submit" value="Search" class="btn w-100" />
              </div>
            </div>
          </form>
        
      <h1>New york</h1>
      <ul>
        <li>Last updated: Monday 16:27</li>
        <li>Overcast clouds</li>
      </ul>
      <div class="row">
        <div class="col-6">
          <span className="unit-icon">☁️</span>
          <span className="unit-temperature">15</span>
          <span className="unit">℃</span>
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
