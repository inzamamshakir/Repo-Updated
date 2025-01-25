'use client';
import React, { useEffect } from 'react';
import styles from './HeaderSvg.module.css';
const HeaderSvg = () => {
  useEffect(() => {
    const x_logo = document.getElementById('x_logo');
    let i, j, k;
    i = 0;
    j = 0;
    setInterval(() => {
      if (i > 360) {
        i = 0;
      }
      i = i + 2;
      x_logo.style.transformOrigin = '357px';
      x_logo.style.transform = 'rotateZ(' + i + 'deg)';
      x_logo.style.transform = 'rotateX(' + i + 'deg)';
    }, j + 10);
  }, []);
  return (
    <div>
      <svg
        id={styles.logo}
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 885.56 377.41"
      >
        <defs>
          <linearGradient
            id="linear-gradient"
            x1="-1241.82"
            y1="792.66"
            x2="-1240.87"
            y2="792.66"
            gradientTransform="matrix(34.78, 0, 0, -34.78, 43330.62, 27767.15)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#fff" />
            <stop offset="0.14" stopColor="#e6e6e6" />
            <stop offset="0.65" stopColor="#fff" />
            <stop offset="1" stopColor="#fff" />
          </linearGradient>
          <linearGradient
            id="linear-gradient-2"
            x1="-1253.44"
            y1="790.09"
            x2="-1252.49"
            y2="790.09"
            gradientTransform="matrix(57.9, 0, 0, -57.9, 72715.37, 45983.35)"
            xlinkHref="#linear-gradient"
          />
          <linearGradient
            id="linear-gradient-3"
            x1="-1261.93"
            y1="788.15"
            x2="-1260.98"
            y2="788.15"
            gradientTransform="matrix(112.75, 0, 0, -112.75, 142383.11, 89044.26)"
            xlinkHref="#linear-gradient"
          />
          <linearGradient
            id="linear-gradient-4"
            x1="-1282.64"
            y1="779.62"
            x2="-1281.47"
            y2="779.62"
            gradientTransform="matrix(0, -79.51, -79.51, 0, 62301.99, -101731.89)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#fff" />
            <stop offset="0.32" stopColor="#fff" />
            <stop offset="0.78" stopColor="#fff" />
            <stop offset="1" stopColor="#e6e6e6" />
          </linearGradient>
          <linearGradient
            id="linear-gradient-5"
            x1="-1286.47"
            y1="791.96"
            x2="-1285.31"
            y2="791.96"
            gradientTransform="matrix(-64.1, 0, 0, 64.1, -82097.5, -50587.74)"
            xlinkHref="#linear-gradient-4"
          />
          <clipPath id="clipPath">
            <path
              d="M144.47,195.2l-3.27,8H169c1.28,0,5.28-8,5.28-8Z"
              fill="none"
            />
          </clipPath>
          <mask
            id="mask"
            x="141.2"
            y="195.2"
            width="33.1"
            height="8"
            maskUnits="userSpaceOnUse"
          >
            <rect
              x="141.2"
              y="195.2"
              width="33.1"
              height="8"
              fill="url(#linear-gradient)"
            />
          </mask>
          <linearGradient
            id="linear-gradient-6"
            x1="-1241.82"
            y1="792.66"
            x2="-1240.87"
            y2="792.66"
            gradientTransform="matrix(34.78, 0, 0, -34.78, 43330.62, 27767.15)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#a7dde2" />
            <stop offset="0.14" stopColor="#22bcbf" />
            <stop offset="0.65" stopColor="#3b99d4" />
            <stop offset="1" stopColor="#2a55a6" />
          </linearGradient>
          <clipPath id="clipPath-2">
            <polygon
              points="139.2 230.85 142.11 240.67 194.3 240.67 191.4 230.85 139.2 230.85"
              fill="none"
            />
          </clipPath>
          <mask
            id="mask-2"
            x="139.2"
            y="230.85"
            width="55.11"
            height="9.82"
            maskUnits="userSpaceOnUse"
          >
            <rect
              x="139.2"
              y="230.85"
              width="55.11"
              height="9.82"
              fill="url(#linear-gradient-2)"
            />
          </mask>
          <linearGradient
            id="linear-gradient-7"
            x1="-1253.44"
            y1="790.09"
            x2="-1252.49"
            y2="790.09"
            gradientTransform="matrix(57.9, 0, 0, -57.9, 72715.36, 45983.34)"
            xlinkHref="#linear-gradient-6"
          />
          <clipPath id="clipPath-3">
            <path
              d="M151.56,175l9.61-16.16,20.59.13-8,16.18ZM143,137,118.64,179.2l-3.44-5.64,12.9-21.47-7.64-2.71S105,174.11,104.83,175.55s24.92,43.66,24.92,43.66L123,219l-13.45-24-4.72,6.91L119,228.47h73.11l-2.92-9.82H138.66l-15.3-30.54,26.2-43.29h40.75L187.4,151l-31.65-.32L151,158.82l-14.79,24.92,7.06.11,0,.06,52.86.19,16-33.83h-8.9l-12.56,23.84h-7.28L203.23,137Z"
              fill="none"
            />
          </clipPath>
          <mask
            id="mask-3"
            x="104.63"
            y="136.99"
            width="107.5"
            height="91.48"
            maskUnits="userSpaceOnUse"
          >
            <rect
              x="104.63"
              y="136.99"
              width="107.5"
              height="91.48"
              fill="url(#linear-gradient-3)"
            />
          </mask>
          <linearGradient
            id="linear-gradient-8"
            x1="-1261.93"
            y1="788.15"
            x2="-1260.98"
            y2="788.15"
            gradientTransform="matrix(112.75, 0, 0, -112.75, 142383.11, 89044.26)"
            xlinkHref="#linear-gradient-6"
          />
          <clipPath id="clipPath-4">
            <polygon
              points="296.93 195.49 269.02 229 303.91 203.54 324.72 229 361.72 229 269.02 160.6 296.93 195.49"
              fill="none"
            />
          </clipPath>
          <mask
            id="mask-4"
            x="250.38"
            y="135.35"
            width="129.97"
            height="118.91"
            maskUnits="userSpaceOnUse"
          >
            <rect
              x="269.41"
              y="140.64"
              width="91.92"
              height="108.32"
              transform="translate(38.98 441.81) rotate(-73.49)"
              fill="url(#linear-gradient-4)"
            />
          </mask>
          <linearGradient
            id="linear-gradient-9"
            x1="-1282.64"
            y1="779.62"
            x2="-1281.47"
            y2="779.62"
            gradientTransform="matrix(0, -79.51, -79.51, 0, 62301.99, -101731.89)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#4556a6" />
            <stop offset="0.32" stopColor="#4677bc" />
            <stop offset="0.78" stopColor="#57c5cb" />
            <stop offset="1" stopColor="#22bcbf" />
          </linearGradient>
          <clipPath id="clipPath-5">
            <path
              d="M324.36,160.6l-15.08,18.25L287,169.59l30.34,22.68s44.77-31.67,44.39-31.67Z"
              fill="none"
            />
          </clipPath>
          <mask
            id="mask-5"
            x="272.6"
            y="126.47"
            width="103.89"
            height="99.93"
            maskUnits="userSpaceOnUse"
          >
            <rect
              x="284.38"
              y="142.84"
              width="80.32"
              height="67.2"
              transform="translate(-43.9 203.1) rotate(-32.67)"
              fill="url(#linear-gradient-5)"
            />
          </mask>
          <linearGradient
            id="linear-gradient-10"
            x1="-1286.47"
            y1="791.96"
            x2="-1285.31"
            y2="791.96"
            gradientTransform="matrix(-64.1, 0, 0, 64.1, -82097.51, -50587.75)"
            xlinkHref="#linear-gradient-9"
          />
          <linearGradient
            id="linear-gradient-11"
            x1="5.48"
            y1="188.7"
            x2="317.38"
            y2="188.7"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#a7dde2" />
            <stop offset="0" stopColor="#9cdae8" />
            <stop offset="0.14" stopColor="#40c1c4" />
            <stop offset="0.57" stopColor="#3a91b8" />
            <stop offset="0.97" stopColor="#3360ac" />
          </linearGradient>
          <linearGradient
            id="linear-gradient-12"
            x1="18.67"
            y1="188.7"
            x2="303.83"
            y2="188.7"
            xlinkHref="#linear-gradient-11"
          />
          <linearGradient
            id="linear-gradient-13"
            x1="32.2"
            y1="188.7"
            x2="290.77"
            y2="188.7"
            xlinkHref="#linear-gradient-11"
          />
          <linearGradient
            id="linear-gradient-14"
            x1="45.91"
            y1="188.7"
            x2="277.01"
            y2="188.7"
            xlinkHref="#linear-gradient-11"
          />
          <linearGradient
            id="linear-gradient-15"
            x1="58.51"
            y1="189.17"
            x2="264.32"
            y2="189.17"
            xlinkHref="#linear-gradient-11"
          />
          <linearGradient
            id="linear-gradient-16"
            x1="71.17"
            y1="188.7"
            x2="252.22"
            y2="188.7"
            xlinkHref="#linear-gradient-11"
          />
          <linearGradient
            id="linear-gradient-17"
            x1="407.26"
            y1="174.3"
            x2="874.59"
            y2="174.3"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#a7dde2" />
            <stop offset="0" stopColor="#9cdae8" />
            <stop offset="0.14" stopColor="#40c1c4" />
            <stop offset="0.6" stopColor="#3b99d4" />
            <stop offset="0.98" stopColor="#4a7abd" />
          </linearGradient>
          <clipPath id="clipPath-6">
            <text
              transform="translate(502.51 284.2)"
              //fontSize="32.13"
              fill="none"
              //fontFamily="MyriadPro-Regular, Myriad Pro"
            >
              <tspan letterSpacing="-0.01em">L</tspan>
              <tspan x="14.75" y="0">
                e
              </tspan>
              <tspan x="30.84" y="0" letterSpacing="0.02em">
                t
              </tspan>
              <tspan x="42.15" y="0" letterSpacing="-0.07em">
                ’
              </tspan>
              <tspan x="46.52" y="0" letterSpacing="0em">
                s be de
              </tspan>
              <tspan x="141.45" y="0" letterSpacing="-0.01em">
                c
              </tspan>
              <tspan x="155.65" y="0" letterSpacing="0em">
                e
              </tspan>
              <tspan x="171.75" y="0" letterSpacing="0em">
                n
              </tspan>
              <tspan x="189.48" y="0">
                t
              </tspan>
              <tspan x="200.11" y="0" letterSpacing="0em">
                r
              </tspan>
              <tspan x="210.49" y="0" letterSpacing="0em">
                ali
              </tspan>
              <tspan x="241.07" y="0" letterSpacing="-0.01em">
                z
              </tspan>
              <tspan x="254.63" y="0">
                ed
              </tspan>
            </text>
          </clipPath>
          <linearGradient
            id="linear-gradient-18"
            x1="421.57"
            y1="230.82"
            x2="905.11"
            y2="230.82"
            xlinkHref="#linear-gradient-17"
          />
        </defs>
        <title>encodixNavLogo</title>
        <g clipPath="url(#clipPath)">
          <g mask="url(#mask)">
            <rect
              x="141.2"
              y="195.2"
              width="33.1"
              height="8"
              fill="url(#linear-gradient-6)"
            />
          </g>
        </g>
        <g clipPath="url(#clipPath-2)">
          <g mask="url(#mask-2)">
            <rect
              x="139.2"
              y="230.85"
              width="55.11"
              height="9.82"
              fill="url(#linear-gradient-7)"
            />
          </g>
        </g>
        <g clipPath="url(#clipPath-3)">
          <g mask="url(#mask-3)">
            <rect
              x="104.63"
              y="136.99"
              width="107.5"
              height="91.48"
              fill="url(#linear-gradient-8)"
            />
          </g>
        </g>
        <g id="x_logo">
          <g clipPath="url(#clipPath-4)">
            <g mask="url(#mask-4)">
              <rect
                x="269.41"
                y="140.64"
                width="91.92"
                height="108.32"
                transform="translate(38.98 441.81) rotate(-73.49)"
                fill="url(#linear-gradient-9)"
              />
            </g>
          </g>
          <g clipPath="url(#clipPath-5)">
            <g mask="url(#mask-5)">
              <rect
                x="284.38"
                y="142.84"
                width="80.32"
                height="67.2"
                transform="translate(-43.9 203.1) rotate(-32.67)"
                fill="url(#linear-gradient-10)"
              />
            </g>
          </g>
        </g>
        <path
          d="M308.4,273.92,160.29,358.11,12.77,272.9l.59-169.41,148.11-84.2,3.18,1.84,8.76,5.06,13.15,7.6,16.37,9.45,18.4,10.63L240.58,65l18.93,10.93L276.93,86l24.14,13.94,5.58,3.22c2.12,1.22,4.37,2.36,6.91,2.1,2.13-.22,4-3,2.52-4.87-.86-1.12-2.55-1.61-3.75-2.3L307,95l-8.48-4.89L288,84l-12.17-7-13.34-7.71L248.4,61.15,234,52.85,219.8,44.63l-13.63-7.87-12.6-7.28-11.11-6.42-9.2-5.31-6.83-3.95-4-2.32L161.5,11,6.1,99.29,5.48,277.05l154.79,89.4L171.58,360l28.34-16.11,37-21,37.2-21.15,29.05-16.51,8.83-5c1.67-.95,3.5-2,4.48-3.68.81-1.43,1.68-4.59-.15-5.47-2.15-1.05-6.16,1.74-7.9,2.86m0,0"
          fill="url(#linear-gradient-11)"
        />
        <path
          d="M295.23,266.31,160.35,343,26,265.38l.53-154.28L161.41,34.42,295.76,112a9.45,9.45,0,0,0,5.46,1.26c2.27-.34,2.86-3.44,1.8-5.15a5.18,5.18,0,0,0-2.17-1.75c-2.61-1.3-5.1-2.77-7.62-4.23l-9-5.21L273,90.49,260.3,83.13l-13.8-8-14.32-8.27-14.33-8.27-13.78-8L191.34,43.3l-11.13-6.43-9-5.2L164.86,28l-3.16-1.83-.26-.15L19.23,106.88l-.56,162.67,141.65,81.82,11.92-6.77,29.3-16.66,37.09-21.09,35.26-20,23.83-13.55c2.8-1.59,7.25-3.58,5.83-7.73C302.35,262,297.24,265.16,295.23,266.31Z"
          fill="url(#linear-gradient-12)"
        />
        <path
          d="M281.51,258.39,160.4,327.24,39.77,257.56,40.25,119,161.36,50.17,282,119.85a12.36,12.36,0,0,0,5,1.55c2.29.16,3.64-2.26,3.09-4.32-.46-1.72-2-2.36-3.38-3.17l-6.29-3.64-9.17-5.3-11.42-6.59-13-7.52-14-8.08-14.32-8.27-14-8.1-13.05-7.54L180,52.25l-9.24-5.34-6.38-3.68-2.87-1.66-.1-.06L32.71,114.67,32.2,261.86l128.17,74,13.44-7.63,32-18.2L244,288.37l31.89-18.13L285,265c2.12-1.2,7.73-4.53,5.07-7.84C288.31,255,283.29,257.6,281.51,258.39Z"
          fill="url(#linear-gradient-13)"
        />
        <path
          d="M268.26,250.73,160.45,312,53.08,250l.42-123.31L161.31,65.39l2.43,1.41,6.66,3.85,10,5.76,12.37,7.15,13.84,8L221,99.85l14,8.08,12.68,7.33,10.45,6,7.3,4.22c2.19,1.26,4.36,2.68,6.84,3.27a10,10,0,0,0,2.73.28,3,3,0,0,0,1.08-.21c1.83-.85.67-3.86-.25-5a16.18,16.18,0,0,0-4.51-3.21l-5.68-3.28-10.05-5.81-12.29-7.1-13.72-7.92L215.2,88.31l-14.14-8.17-13.15-7.6L176.58,66l-8.72-5-5.29-3.06-1.23-.71-115,65.36-.45,131.51,114.52,66.15,15-8.5,34.24-19.47,37.63-21.39,25.13-14.29c2.15-1.22,5.3-4,3.17-6.83C273.85,247.46,270,249.72,268.26,250.73Z"
          fill="url(#linear-gradient-14)"
        />
        <path
          d="M255.43,244.26l-95.05,54.45L65.7,243.61l.38-109.54,95.05-54.44,94.68,55.09a20.78,20.78,0,0,0,5.23,2.55,2.69,2.69,0,0,0,2.35-.19c1.41-1.15,1-3.24.27-4.64-.89-1.74-2.45-2.69-4.09-3.63L252,124.4l-10.82-6.28-13-7.54L214,102.36l-14.31-8.3-13.41-7.78-11.5-6.67-8.55-5L161.65,72l-.49-.29L58.92,130.09l-.41,117.45,101.84,59.08,16.56-9.45L213,276.57l35.29-20.15,9.7-5.54c2.45-1.4,7.13-3.83,5.32-7.57C261.88,240.37,257.22,243.24,255.43,244.26Z"
          fill="url(#linear-gradient-15)"
        />
        <path
          d="M242.3,236.17l-.6.34L160.43,283,78.89,235.59l.33-94.34,81.86-46.89L242,141.43c2.39,1.39,5.54,3.11,8.41,2.49,3.2-.7,1.65-4.2,0-5.91a23,23,0,0,0-5.19-3.47l-6.39-3.71-11.53-6.69-13.58-7.88L199.34,108l-13.73-8L173.8,93.15l-8.56-5-4-2.32-.13-.08L71.52,136.93l-.35,102.92,89.23,51.77,19.39-11.07,38.74-22.12,29-16.55c2.54-1.45,5.22-5.92.71-7.12C246.21,234.22,244.16,235.14,242.3,236.17Z"
          fill="url(#linear-gradient-16)"
        />
        <path
          d="M821.48,163.13,839,188.64l-19,27.59a6.38,6.38,0,1,0,10.63,7.06l15.78-24.59,16.3,24.63a6.46,6.46,0,1,0,10.72-7.22l-18.87-27.47,18.1-25.92a6.2,6.2,0,1,0-10.26-7l-15.16,23-14.91-22.85a6.54,6.54,0,1,0-10.87,7.27m-333.85-2.57a30,30,0,0,0-9.1,22V220a5.83,5.83,0,0,0,1.85,4.38,6,6,0,0,0,4.38,1.85h.2a6,6,0,0,0,4.39-1.85,5.85,5.85,0,0,0,1.84-4.38V182.54a18.39,18.39,0,1,1,36.77,0V220a5.86,5.86,0,0,0,1.85,4.38,6.1,6.1,0,0,0,4.45,1.85h.14a6.32,6.32,0,0,0,6.23-6.23V182.54a31,31,0,0,0-53-22m75.6,1.85a37.35,37.35,0,0,0,0,52.86,36,36,0,0,0,26.43,11,37.75,37.75,0,0,0,11.3-1.71,5.78,5.78,0,0,0,4.38-6,6,6,0,0,0-2.53-5.07,6.07,6.07,0,0,0-5.62-.89,24.39,24.39,0,0,1-7.53,1.17,24.76,24.76,0,1,1,0-49.51,23.3,23.3,0,0,1,7.53,1.23,6,6,0,0,0,5.62-1,5.89,5.89,0,0,0,2.53-5v-.34a5.7,5.7,0,0,0-4.38-5.95,37.13,37.13,0,0,0-37.73,9.17m71.55,44.1a24.76,24.76,0,0,1,17.53-42.25,24.74,24.74,0,0,1,17.46,42.25,24.71,24.71,0,0,1-35,0m-8.9-44.1a37.37,37.37,0,0,0,0,52.86,37.39,37.39,0,0,0,63.82-26.43,37.38,37.38,0,0,0-63.82-26.43m170.7-11a6.32,6.32,0,0,0-6.3,6.3V220a5.86,5.86,0,0,0,1.85,4.38,6.1,6.1,0,0,0,4.45,1.85h.14A6.32,6.32,0,0,0,803,220V157.75a6.06,6.06,0,0,0-1.85-4.45,5.83,5.83,0,0,0-4.38-1.85Zm-77.44,55.06a24.76,24.76,0,0,1,17.53-42.25,24.74,24.74,0,0,1,17.46,42.25,24.71,24.71,0,0,1-35,0m48.48-83.13a6.2,6.2,0,0,0-6.23,6.23v31.22a37.37,37.37,0,0,0-51.15,54.44,37.39,37.39,0,0,0,63.82-26.22V129.61a6.2,6.2,0,0,0-6.23-6.23ZM430.5,122.21a23.22,23.22,0,0,0-23.24,23.24v57.71a23.22,23.22,0,0,0,23.24,23.23H460a6.06,6.06,0,0,0,4.44-1.87,5.91,5.91,0,0,0,1.87-4.44v-.14a6.15,6.15,0,0,0-1.87-4.51,6.06,6.06,0,0,0-4.44-1.87H430.5a10.43,10.43,0,0,1-10.41-10.4V180.68h27.23a6.28,6.28,0,0,0,6.31-6.31v-.14a6.28,6.28,0,0,0-6.31-6.31H420.09V145.45A10.43,10.43,0,0,1,430.5,135H460a6.06,6.06,0,0,0,4.44-1.87,6.14,6.14,0,0,0,1.87-4.51v-.14a5.94,5.94,0,0,0-1.87-4.44,6.1,6.1,0,0,0-4.44-1.87Z"
          fill="url(#linear-gradient-17)"
        />
        {/* <g clipPath="url(#clipPath-6)">
          <rect
            x="421.57"
            y="43.62"
            width="483.54"
            height="374.4"
            fill="url(#linear-gradient-18)"
          />
        </g> */}
      </svg>
    </div>
  );
};

export default HeaderSvg;
