import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {FiSearch} from 'react-icons/fi';

const Searchbar = () => {

  const [searchTerm, setSearchTerm] = useState('');

  const navigate = useNavigate();
  
  const handleClick = (e) =>{

    e.preventDefault();
    navigate(`/search/${searchTerm}`);
    setSearchTerm('');


  }
 
  return (

  <form onSubmit={handleClick} autoComplete='off' className='p-2 text-gray-400 focus-within:text-gray-600'>
    <label htmlFor='search-field' className='sr-only'>
      Search all Songs
    </label>
    <div className='flex flex-row justify-start items-center '>
    <FiSearch className='w-5 h-5 ml-5' />
    <input  autoComplete='off' id='search-field' type='search' value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}
    className='flex-1 bg-transparent outline-none placeholder-gray-500 text-base text-white p-4'/>
    </div>
  </form>
  )
}
export default Searchbar;