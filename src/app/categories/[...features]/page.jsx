import React from 'react'

const categoryDetailPage = ({params}) => {
    console.log(params);
    if (params.features.length === 3) {
        return (
            <div>
                <h2>{params.features[2]}</h2>
            </div>
        )
    }
    if (params.features.length === 2) {
        return (
            <div>
                <h2>{params.features[1]}</h2>
            </div>
        )
    }
  return (
    <div className='h-screen'>categoryDetailPage</div>
  )
}

export default categoryDetailPage