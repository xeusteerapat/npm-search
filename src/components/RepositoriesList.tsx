import { useState } from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypeSelector';

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState('');
  const { searchRepositories } = useActions();
  const { data, loading, error } = useTypedSelector(
    state => state.repositories
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    searchRepositories(term);
    setTerm('');
  };

  return (
    <div className='form-control'>
      <form onSubmit={handleSubmit}>
        <input
          className='form-control'
          type='text'
          value={term}
          onChange={e => setTerm(e.target.value)}
        />
        <button className='btn btn-primary mt-3'>Search</button>
      </form>
      <div>
        {error && <h3>{error}</h3>}
        {loading && <h3>{loading}</h3>}
        <ul className='list-group mt-3'>
          {!error &&
            !loading &&
            data.map((name: string) => (
              <li key={name} className='list-group-item'>
                {name}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default RepositoriesList;
