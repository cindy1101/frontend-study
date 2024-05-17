import React from 'react'

export default function JSX03() {
  
  const url = 'https://cdn.pixabay.com/photo/2019/02/24/12/58/maltese-4017525_1280.jpg';
  const baseUrl = 'https://cdn.pixabay.com/photo/';

  const dog = {
    date: '2019/02/24/',
    description: '12/58/',
    imageId: 'maltese-4017525_1280',
    name: '말티즈',
    theme: {
        backgroundColor: 'gray',
        color: 'pink'
    },
    imageTheme: {
        width: '300px',
        height: '200px',
        backgroundColor: 'gray',
        color: 'pink'
    }
  }

  const dogImage = '2019/02/24/12/58/maltese-4017525_1280.jpg';

  return (
    <div style={dog.theme}>
        <p style={dog.theme}>{dog.name}'s Picture</p>
        {/* JS의 표현식을 중괄호 내에서 작성 */}
        <img src={baseUrl + dog.date + dog.description + dog.imageId + '.jpg'} alt={dog.name} width={dog.imageTheme.width} height={dog.imageTheme.height}/>
        <hr />
    </div>
  )
}
