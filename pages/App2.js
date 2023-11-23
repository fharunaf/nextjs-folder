import { getImageUrl } from './utils.js'

export const Profile = () => {
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


function Item({name_n,isPacked}) {
  return (
    <li className="item">
      {name_n} {isPacked && '✔'}
    </li>
  );
}
export default function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item
         isPacked={true}
         name_n="Space suit"
        />
        <Item
         isPacked={true}
         name_n="Helmet with a golden leaf"
        />
        <Item
         isPacked={false}
         name_n="Photo of Tam"
        />
      </ul>
    </section>
  );
}


