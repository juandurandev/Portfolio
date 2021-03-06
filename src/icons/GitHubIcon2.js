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
        d="M84 232a24 24 0 0024-24v-48M172 232a24 24 0 01-24-24v-48M152 160h16a24 24 0 0124 24v8a24 24 0 0024 24M104 160H88a24 24 0 00-24 24v8a24 24 0 01-24 24M64.512 76.704A51.9 51.9 0 0168 32a51.96 51.96 0 0143.825 23.999V56h32.35v-.001A51.96 51.96 0 01188 32a51.9 51.9 0 013.488 44.704h0A47.779 47.779 0 01200 104v8a48 48 0 01-48 48h-48a48 48 0 01-48-48v-8a47.779 47.779 0 018.512-27.296z"
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
