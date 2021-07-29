import React, { useState } from 'react';
import { useQuery, gql } from '@apollo/client';

import CharacterItem from '../components/CharacterItem.component';
import Pagination from '../components/Pagination';
import Search from '../components/Search.component';
import Error from '../components/Error.component';
import Loader from '../components/Loader/Loader.component';

const GET_ALL_PEOPLE = gql`
    query GetAllData {
        allPeople {
            people { id name gender birthYear eyeColor hairColor height mass homeworld {
              name
            } vehicleConnection {
              edges {
                node {
                  name
                }
              }
            } 
          }
        }
    }
  `

const CharacterList = () => {
    const { loading, error, data } = useQuery(GET_ALL_PEOPLE);
    const [searchField, setSearchField] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [personPerPage] = useState(10);

    if (error) return  <Error message={ error } />;
    if(loading) return <Loader />;

    //Pagination
    const indexOfLastPerson = currentPage * personPerPage;
    const indexOfFirstPerson = indexOfLastPerson - personPerPage;
    const visiblePersons = data.allPeople.people.slice(indexOfFirstPerson, indexOfLastPerson);
    const pageNumbers = [];
    for(let i = 1; i <= Math.ceil(data.allPeople.people.length / personPerPage); i++){
        pageNumbers.push(i);
    }
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    //Search
    const handleChange = (e) => {
      setSearchField(e.target.value);
    }
    const searchData = (data, searchField) => {
      if(searchField.length === 0){
        return visiblePersons;
      }
      // if(isNaN(searchField)) {
        return data.allPeople.people.filter((item) => {
          return item.name.toLowerCase().indexOf(searchField.toLowerCase()) > -1;
        })
      // }
      // else{
      //   setCurrentPage(searchField);
      //   return visiblePersons;
      // }
    }
    const visible = searchData(data, searchField);

    return(
        <div className="container">
            <h1>Characters List Page</h1>
            <Search placeholder='start searching' handleChange={handleChange} />
            <div className="character-item-list">
                {visible.map(item => (
                    <CharacterItem key={item.id} people={item} /> 
                ))}
            </div>
            <Pagination pageNumbers={pageNumbers} paginate={paginate} />
        </div>
   )
}

export default CharacterList;