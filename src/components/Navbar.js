import "./navbar.css"
import React from 'react';
import {Link} from 'react-router-dom'
export default function Navbar() {
    return (
      <nav className="navigation">
          <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="130.000000pt" height="25.000000pt" viewBox="0 0 1597.000000 351.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,351.000000) scale(0.100000,-0.100000)"
fill="white" stroke="none">
<path d="M1311 2530 l-783 -600 -157 0 -156 0 -105 -105 -105 -105 259 0 258
0 789 -605 789 -605 262 2 261 3 -522 600 -522 600 521 3 520 2 0 105 0 105
-518 2 -519 3 444 510 c244 281 478 549 519 598 l75 87 -264 0 -264 0 -782
-600z"/>
<path d="M3280 1825 l0 -655 700 0 700 0 0 155 0 155 -512 2 -513 3 -3 98 -3
97 471 0 470 0 0 140 0 140 -470 0 -470 0 0 100 0 100 515 0 515 0 0 160 0
160 -700 0 -700 0 0 -655z"/>
<path d="M4870 1825 l0 -655 185 0 185 0 0 467 c0 256 3 463 7 459 5 -4 119
-213 254 -464 l246 -457 190 -3 189 -2 248 457 c136 252 252 462 257 468 5 5
9 -180 9 -458 l0 -467 190 0 190 0 0 655 0 655 -322 -2 -322 -3 -215 -402
c-119 -221 -219 -402 -222 -403 -3 0 -104 182 -224 405 l-217 405 -314 0 -314
0 0 -655z"/>
<path d="M7210 1825 l0 -656 663 3 662 3 68 33 c116 57 157 140 157 312 0 169
-42 249 -152 294 -55 22 -57 23 -34 34 40 18 96 73 119 116 19 35 22 56 22
156 0 99 -4 122 -24 167 -27 61 -94 126 -155 154 -77 34 -169 39 -753 39
l-573 0 0 -655z m1093 330 c14 -14 28 -41 31 -60 8 -41 -14 -99 -42 -114 -14
-7 -138 -11 -366 -11 l-346 0 0 105 0 105 349 0 348 0 26 -25z m36 -479 c52
-47 48 -158 -6 -194 -25 -15 -61 -17 -388 -17 l-360 0 -3 118 -3 118 370 -3
c347 -3 370 -4 390 -22z"/>
<path d="M8910 1825 l0 -655 185 0 185 0 0 165 0 165 375 0 c422 0 434 -2 460
-64 10 -24 15 -72 15 -151 l0 -115 404 0 403 0 60 103 59 102 398 0 398 0 58
-100 58 -100 921 -3 921 -2 0 155 0 155 -512 2 -513 3 -3 98 -3 97 471 0 470
0 0 140 0 140 -470 0 -470 0 0 100 0 100 515 0 515 0 0 160 0 160 -700 0 -700
0 0 -652 c0 -369 -4 -648 -9 -642 -4 5 -156 288 -336 629 -180 341 -334 630
-341 643 l-15 22 -251 -2 -251 -3 -346 -642 c-190 -354 -349 -643 -353 -643
-5 0 -8 69 -8 153 0 83 -5 169 -11 191 -13 47 -83 119 -132 135 l-37 12 53 28
c101 52 137 143 137 345 -1 286 -85 386 -351 416 -46 6 -346 10 -666 10 l-583
0 0 -655z m2669 108 c67 -123 121 -225 121 -228 0 -3 -108 -5 -241 -5 -197 0
-240 2 -237 14 4 16 231 446 234 443 1 -1 57 -102 123 -224z m-1513 202 c44
-18 64 -64 63 -142 0 -84 -17 -125 -59 -146 -32 -15 -69 -17 -410 -15 l-375 3
-3 158 -3 157 376 0 c307 0 382 -3 411 -15z"/>
<path d="M13990 1825 l0 -655 190 0 190 0 0 165 0 165 375 0 c404 0 429 -3
456 -52 8 -14 15 -74 17 -150 l4 -128 185 0 185 0 -4 178 c-3 179 -3 179 -33
228 -23 36 -45 57 -86 78 l-55 29 50 27 c94 48 136 155 136 346 -1 277 -91
384 -348 414 -48 5 -348 10 -674 10 l-588 0 0 -655z m1159 312 c50 -25 66 -62
66 -147 0 -64 -4 -84 -21 -107 -39 -53 -41 -53 -446 -53 l-378 0 0 160 0 160
378 0 c279 0 383 -3 401 -13z"/>
</g>
</svg>
        <a href="/" className="brand-name">
          Inspe????o Peri??dica
        </a>
        <button className="hamburger">
         
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="white"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div
          className="navigation-menu">
          <ul>
            <li>
              <Link to="/">Sair</Link>
            </li>
            <li>
            <Link to="/agendamento">Lista de Ferramental</Link>
            </li>
            <li>
            <Link to="/agendamento">Agendamento</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }