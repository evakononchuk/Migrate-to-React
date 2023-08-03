import React from "react";

export default function Temperature() {
    return (
      <div className="row">
        <div class="col">
          <div class="temperature">
            <div class="inline display-2">
              🌤️ <span id="degree">19</span>
            </div>
            <div class="inline celsius">
              <span id="fahr">°F</span> | <span id="celsius">°C</span>
            </div>
          </div>
        </div>

        <div class="col">
          <ul class="lead day">
              <li class="list-group-item">Precipitation: 0 %</li>
              <li class="list-group-item">Humidity: 20 %</li>
              <li class="list-group-item">Wind: 5 km/h</li>
          </ul>
        </div>
      </div>
    )
}