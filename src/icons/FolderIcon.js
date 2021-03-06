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
        d="M224 88v112.889a7.111 7.111 0 01-7.111 7.111H40a8 8 0 01-8-8V64a8 8 0 018-8h53.333a8 8 0 014.8 1.6l27.734 20.8a8 8 0 004.8 1.6H216a8 8 0 018 8z"
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
    </svg>
  )
}

export default SvgComponent
