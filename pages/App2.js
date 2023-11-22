import { getImageUrl } from './utils.js'

export default function Profile() {
  return (
    <Card>
      <Avatar
      siz2={100}
      person2={{
          name: 'John',
          imageId:'7vQD0fP'
        }}/>
    </Card>
  );
}

function Avatar({ person2, size2 }) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person2)}
      alt={person2.name}
      width={size2}
      height={size2}
    />
  );
}

function Card({children}) {
  return (
    <div className='card'>
      {children}
    </div>
  );
}


