import React, { useState, useEffect } from 'react';
import MockedApi from "../../api/mocks";
import useFriendName from '../../useFriendName';

export default function DataFetcherHooked() {
  const [ names, setNames ] = useState([]);
  let isNickHere = useFriendName('Nikolaos');

  useEffect(() => {
    const data = MockedApi.fetchData();
    data.then((res) => {
      setNames(res);
    });

    setTimeout(() => {
      console.log(`here: `, )
      setNames([{
        name: 'lizi',
        surname: 'hehe'
      }])
    }, 1000);

    return () => {
      console.log('Cleaning.')
    }
  }, []); // You can pass the special value of empty array [] as a way of saying “only run on mount and unmount”.


  return (
    <div>
      {isNickHere && <p className="special">{isNickHere} is here!</p>}
      <ul>{names.map((element, idx) => (<li key={idx}>{element.name + ' ' + element.surname}</li>))}</ul>
    </div>
  );
}
