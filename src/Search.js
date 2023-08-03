import React from "react";

export default function Search() {
    return (
        <form id="city-form">
            <div class="row">
              <div class="col">
                <input
                  type="text"
                  placeholder="Type a city..."
                  class="form-control"
                  id="cityName"
                />
              </div>
              <div class="col">
                <input type="submit" value="Search" class="btn btn-primary" />
              </div>
            </div>
          </form>
    )
}