import * as React from "react"

function SvgComponent(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      
      viewBox="0 0 256 256"
      {...props}
    >
      <path fill="none" d="M0 0h256v256H0z" />
      <path
        d="M122.343 71.431l19.8-19.799a44 44 0 1162.225 62.226l-28.285 28.284a44 44 0 01-62.225 0"
        fill="none"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
      <path
        d="M133.657 184.569l-19.8 19.799a44 44 0 11-62.225-62.226l28.285-28.284a44 44 0 0162.225 0"
        fill="none"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
    </svg>
  )
}

export default SvgComponent
