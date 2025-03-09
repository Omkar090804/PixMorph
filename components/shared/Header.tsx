import React from 'react'

const Header = ({ title, subtitle }: { title: string, subtitle?: string }) => {
  return (
    <>
    <h2 className="text-4xl font-extrabold text-dark-600">{title}</h2>
    {subtitle && <p className="text-base text-gray-500 mt-4">{subtitle}</p>}
  </>
  )
}

export default Header