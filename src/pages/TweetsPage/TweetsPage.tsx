import { FC, ChangeEvent } from 'react';
import { TweetList } from '../../components/TweetList';
import { Section } from '../../shared/styles/components/Section.styled';
import { Container } from '../../shared/styles/components/Container.styled';
import { Helmet } from 'react-helmet-async';
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux';
import { selectStatusFilter } from '../../redux/filter/selectors';
import { follow, followings, showAll } from '../../shared/constants/filter';
import { setStatusFilter } from '../../redux/filter/slice';
// import { GoBackLink } from '../../shared/styles/components/GoBackLink.styled';

const TweetsPage: FC = () => {
  const filter = useAppSelector(selectStatusFilter);
  const dispatch = useAppDispatch();

  const handleFilterChange = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(setStatusFilter(e.currentTarget.value));
  };

  return (
    <>
      <Helmet>
        <title>Tweets</title>
      </Helmet>
      <Section>
        <Container>
          {/* <GoBackLink to={} /> */}
          <div>
            <label>
              Filter:
              <select
                id="filter-select"
                value={filter}
                onChange={handleFilterChange}
              >
                <option value={showAll}>Show all</option>
                <option value={follow}>Follow</option>
                <option value={followings}>Followings</option>
              </select>
            </label>
          </div>
          <TweetList />
        </Container>
      </Section>
    </>
  );
};

export default TweetsPage;
