import React from 'react'

export default function nav() {
  return (
    <div>
         <ul class="nav justify-content-center">
        <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Homepage</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Watchlist</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Movie History</a>
        </li>
        </ul>
    </div>
  )
}
