import Link from 'next/link'
import React from 'react'

const AboutContent = () => {
  return (
    <div>
        <Link href={'/about/history'}>
        History
        </Link>
        <Link href={'/about/mission'}>
            Mission
        </Link>
    </div>
  )
}

export default AboutContent