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
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={term}
          onChange={e => setTerm(e.target.value)}
        />
        <button>Search</button>
      </form>
      {error && <h3>{error}</h3>}
      {loading && <h3>{loading}</h3>}
      {!error &&
        !loading &&
        data.map((name: string) => <li key={name}>{name}</li>)}
    </div>
  );
};

export default RepositoriesList;
