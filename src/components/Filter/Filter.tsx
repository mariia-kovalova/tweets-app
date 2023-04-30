import { FC, ChangeEvent } from 'react';
import { follow, followings, showAll } from '../../shared/constants/filter';
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux';
import { selectStatusFilter } from '../../redux/filter/selectors';
import { setStatusFilter } from '../../redux/filter/slice';
import { Select, Wrap } from './Filter.styled';
import { nanoid } from '@reduxjs/toolkit';

const selectId = nanoid();

export const Filter: FC = () => {
  const filter = useAppSelector(selectStatusFilter);
  const dispatch = useAppDispatch();

  const handleFilterChange = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(setStatusFilter(e.currentTarget.value));
  };

  return (
    <Wrap>
      <Select id={selectId} value={filter} onChange={handleFilterChange}>
        <option value={showAll}>Show all</option>
        <option value={follow}>Follow</option>
        <option value={followings}>Followings</option>
      </Select>
    </Wrap>
  );
};
