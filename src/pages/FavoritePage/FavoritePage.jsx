import { nanoid } from '@reduxjs/toolkit';
import { Button, Container, ContainerCenter, TeacherCard } from 'components';
import {
  StyledTeachersList,
  StyledTeachersPageBox,
} from './FavoritePage.styled';
import { selectFavorite } from 'redux/selectors';
import Filter from 'components/Filter/Filter';
import { StyledBlackTitle } from 'components/TeacherCard/TeacherCard.styled';
import { useSelector } from 'react-redux';
import { useState } from 'react';

const CARDS_COUNT = 4;

const FavoritePage = () => {
  const favorites = useSelector(selectFavorite);

  const [loadedTeachersCount, setLoadedTeachersCount] = useState(CARDS_COUNT);
  const [languageFilter, setLanguageFilter] = useState(false);
  const [levelFilter, setLevelFilter] = useState(false);
  const [priceFilter, setPriceFilter] = useState(false);

  const filteredFavorites = favorites?.filter(favorite => {
    if (!languageFilter && !levelFilter && !priceFilter) {
      return true;
    }
    const languageFilterResult =
      !languageFilter || favorite.languages.includes(languageFilter);
    const levelFilterResult =
      !levelFilter || favorite.levels.includes(levelFilter);
    const priceFilterResult =
      !priceFilter || `${favorite.price_per_hour}` === priceFilter;

    return languageFilterResult && levelFilterResult && priceFilterResult;
  });

  const handleLoadMore = () => {
    setLoadedTeachersCount(prevCount => prevCount + CARDS_COUNT);
  };

  return (
    <Container>
      <StyledTeachersPageBox>
        <Filter
          teachers={favorites}
          setLanguageFilter={data => setLanguageFilter(data)}
          setLevelFilter={data => setLevelFilter(data)}
          setPriceFilter={data => setPriceFilter(data)}
        />

        {filteredFavorites?.length !== 0 ? (
          <StyledTeachersList>
            {filteredFavorites?.slice(0, loadedTeachersCount).map(el => (
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
        {filteredFavorites?.length > loadedTeachersCount && (
          <ContainerCenter>
            <Button
              text="Load more"
              width="183px"
              height="60px"
              onClick={handleLoadMore}
            />
          </ContainerCenter>
        )}
      </StyledTeachersPageBox>
    </Container>
  );
};

export default FavoritePage;
