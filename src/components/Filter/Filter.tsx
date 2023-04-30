import { FC, ChangeEvent } from 'react';
import { follow, followings, showAll } from '../../shared/constants/filter';
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux';
import { selectStatusFilter } from '../../redux/filter/selectors';
import { setStatusFilter } from '../../redux/filter/slice';

export const Filter: FC = () => {
  const filter = useAppSelector(selectStatusFilter);
  const dispatch = useAppDispatch();

  const handleFilterChange = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(setStatusFilter(e.currentTarget.value));
  };

  return (
    <div>
      <label>
        Filter:
        <select id="filter-select" value={filter} onChange={handleFilterChange}>
          <option value={showAll}>Show all</option>
          <option value={follow}>Follow</option>
          <option value={followings}>Followings</option>
        </select>
      </label>
    </div>
  );
};
