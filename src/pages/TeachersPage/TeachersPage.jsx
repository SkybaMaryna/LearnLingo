import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { getTeachers } from '../../redux/teachers/teachersOperations';

import {
  Button,
  Container,
  ContainerCenter,
  Loader,
  TeacherCard,
} from 'components';
import {
  StyledTeachersList,
  StyledTeachersPageBox,
} from './TeachersPage.styled';
import { selectIsLoading, selectTeachers } from 'redux/selectors';
import Filter from 'components/Filter/Filter';
import { StyledBlackTitle } from 'components/TeacherCard/TeacherCard.styled';

const CARDS_COUNT = 4;

const TeachersPage = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);
  const teachers = useSelector(selectTeachers);

  const [loadedTeachersCount, setLoadedTeachersCount] = useState(CARDS_COUNT);
  const [languageFilter, setLanguageFilter] = useState(false);
  const [levelFilter, setLevelFilter] = useState(false);
  const [priceFilter, setPriceFilter] = useState(false);

  const filteredTeachers = teachers?.filter(teacher => {
    if (!languageFilter && !levelFilter && !priceFilter) {
      return true;
    }
    const languageFilterResult =
      !languageFilter || teacher.languages.includes(languageFilter);
    const levelFilterResult =
      !levelFilter || teacher.levels.includes(levelFilter);
    const priceFilterResult =
      !priceFilter || `${teacher.price_per_hour}` === priceFilter;

    return languageFilterResult && levelFilterResult && priceFilterResult;
  });

  useEffect(() => {
    dispatch(getTeachers());
  }, [dispatch]);

  const handleLoadMore = () => {
    setLoadedTeachersCount(prevCount => prevCount + CARDS_COUNT);
  };

  return (
    <Container>
      <StyledTeachersPageBox>
        <Filter
          teachers={teachers}
          setLanguageFilter={data => setLanguageFilter(data)}
          setLevelFilter={data => setLevelFilter(data)}
          setPriceFilter={data => setPriceFilter(data)}
        />

        {isLoading ? (
          <Loader />
        ) : filteredTeachers?.length !== 0 ? (
          <StyledTeachersList>
            {filteredTeachers?.slice(0, loadedTeachersCount).map(el => (
              <TeacherCard key={nanoid()} teacher={el} />
            ))}
          </StyledTeachersList>
        ) : (
          <ContainerCenter>
            <StyledBlackTitle>
              No teacher was found according to your criteria
            </StyledBlackTitle>
          </ContainerCenter>
        )}
        {filteredTeachers?.length > loadedTeachersCount && !isLoading && (
          <ContainerCenter>
            <Button
              text="Load more"
              width="183px"
              height="60px"
              margintop="64px"
              onClick={handleLoadMore}
            />
          </ContainerCenter>
        )}
      </StyledTeachersPageBox>
    </Container>
  );
};

export default TeachersPage;
