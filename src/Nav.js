import React from 'react'

export default function Nav() {
  return (
    <>
      <div>
        <ul class="nav justify-content-center">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/">Homepage</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="watchlist">Watchlist</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="trending">Trending Movies</a>
          </li>
        </ul>
      </div>
    </>

  )
}
