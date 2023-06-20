import React from 'react'

const Button = ({children, styles}) => (
    <button type='button' className={`rounded-[15px] py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles}`}>
      {children}
    </button>
  )


export default Button