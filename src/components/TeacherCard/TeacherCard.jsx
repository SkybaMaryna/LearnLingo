import { PiBookOpen } from 'react-icons/pi';
import { AiFillStar, AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import {
  addFavorite,
  removeFavorite,
} from '../../redux/favorite/favoriteSlice';
import { toast } from 'react-toastify';

import { AvatarGenerator } from 'random-avatar-generator';
import { BookLessonForm, Button, Modal } from 'components';
import { selectFavorite, selectIsAuth } from 'redux/selectors';
import {
  StyledAddFavoriteBtn,
  StyledAvatarBox,
  StyledAvatarImg,
  StyledBlackTitle,
  StyledFeedbackAuthor,
  StyledFeedbackAvatar,
  StyledFeedbackItem,
  StyledFeedbackList,
  StyledFeedbackStars,
  StyledFeedbackUser,
  StyledGreyTitle,
  StyledLevelsItem,
  StyledLevelsList,
  StyledPrice,
  StyledReadMoreBtn,
  StyledTeacherDescrHead,
  StyledTeacherDescrHeadItem,
  StyledTeacherDescrHeadList,
  StyledTeacherItemBox,
  StyledTeacherName,
  StyledTeacherOpenDescr,
} from './TeacherCard.styled';

export const TeacherCard = ({ teacher }) => {
  const {
    id,
    name,
    surname,
    languages,
    levels,
    rating,
    reviews,
    price_per_hour,
    lessons_done,
    avatar_url,
    lesson_info,
    conditions,
    experience,
  } = teacher;

  const [isExpanded, setIsExpanded] = useState(false);
  const [isModalActive, setIsModalActive] = useState(false);

  const isAuth = useSelector(selectIsAuth);
  const favoriteList = useSelector(selectFavorite);

  const dispatch = useDispatch();

  const isTeacherFavorite = favoriteList.find(favorite => favorite.id === id);

  const generator = new AvatarGenerator();

  return (
    <>
      <StyledTeacherItemBox>
        <StyledAvatarBox>
          <StyledAvatarImg
            src={avatar_url}
            height="100px"
            width="100px"
            alt="Teacher avatar"
          />
        </StyledAvatarBox>
        <div className="teacherDescriptionBox">
          <StyledTeacherDescrHead>
            <div>
              <StyledGreyTitle>Teacher</StyledGreyTitle>
              <StyledTeacherName>
                {name} {surname}
              </StyledTeacherName>
            </div>
            <StyledTeacherDescrHeadList>
              <StyledTeacherDescrHeadItem
                style={{ display: 'flex', gap: '8px', alignItems: 'center' }}
              >
                <PiBookOpen size={16} color={'var(--black)'} />
                <span>Lessons online</span>
              </StyledTeacherDescrHeadItem>
              <StyledTeacherDescrHeadItem>
                Lessons done: {lessons_done}
              </StyledTeacherDescrHeadItem>
              <StyledTeacherDescrHeadItem
                style={{ display: 'flex', gap: '8px', alignItems: 'center' }}
              >
                <AiFillStar color={'var(--orange)'} size={16} />
                <span>Rating: {rating}</span>
              </StyledTeacherDescrHeadItem>
              <StyledTeacherDescrHeadItem
                style={{ display: 'flex', gap: '8px', alignItems: 'center' }}
              >
                Price / 1 hour:
                <StyledPrice> {price_per_hour}$</StyledPrice>
              </StyledTeacherDescrHeadItem>
            </StyledTeacherDescrHeadList>
          </StyledTeacherDescrHead>
          <div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                marginBottom: '16px',
              }}
            >
              <p>
                <StyledGreyTitle>Speaks: </StyledGreyTitle>
                <StyledBlackTitle style={{ textDecoration: 'underline' }}>
                  {languages.join(', ')}
                </StyledBlackTitle>
              </p>
              <p>
                <StyledGreyTitle>Lesson Info: </StyledGreyTitle>
                <StyledBlackTitle>{lesson_info}</StyledBlackTitle>
              </p>
              <p>
                <StyledGreyTitle>Conditions: </StyledGreyTitle>
                <StyledBlackTitle>{conditions}</StyledBlackTitle>
              </p>
            </div>

            {isExpanded && (
              <>
                <StyledTeacherOpenDescr>{experience}</StyledTeacherOpenDescr>
                <StyledFeedbackList>
                  {reviews.map(el => (
                    <StyledFeedbackItem key={nanoid()}>
                      <StyledFeedbackUser>
                        <StyledFeedbackAvatar
                          src={generator.generateRandomAvatar()}
                          alt="Feedback avatar"
                          height="44px"
                          width="44px"
                        />
                        <StyledFeedbackAuthor>
                          <StyledGreyTitle>{el.reviewer_name}</StyledGreyTitle>
                          <StyledFeedbackStars>
                            <AiFillStar color={'var(--orange)'} size={16} />
                            {el.reviewer_rating},0
                          </StyledFeedbackStars>
                        </StyledFeedbackAuthor>
                      </StyledFeedbackUser>
                      <StyledBlackTitle>{el.comment}</StyledBlackTitle>
                    </StyledFeedbackItem>
                  ))}
                </StyledFeedbackList>
              </>
            )}

            {!isExpanded && (
              <StyledReadMoreBtn onClick={() => setIsExpanded(true)}>
                Read more
              </StyledReadMoreBtn>
            )}

            <StyledLevelsList>
              {levels.map(el => (
                <StyledLevelsItem key={nanoid()}>{`#${el}`}</StyledLevelsItem>
              ))}
            </StyledLevelsList>
            {isExpanded && (
              <Button
                text="Book trial lesson"
                width="232px"
                height="60px"
                onClick={() => setIsModalActive(true)}
              />
            )}
          </div>
        </div>
        {isTeacherFavorite && isAuth ? (
          <StyledAddFavoriteBtn
            type="button"
            onClick={() => {
              if (!isAuth) {
                toast.warn(
                  'The functionality is available only to authorized users'
                );
                return;
              }
              dispatch(removeFavorite(id));
            }}
          >
            <AiFillHeart color={`var(--accent)`} size={26} />
          </StyledAddFavoriteBtn>
        ) : (
          <StyledAddFavoriteBtn
            type="button"
            className="heartbeat"
            onClick={() => {
              if (!isAuth) {
                toast.warn(
                  'The functionality is available only to authorized users'
                );
                return;
              }
              dispatch(addFavorite(teacher));
            }}
          >
            <AiOutlineHeart color={`var(--accent)`} size={26} />
          </StyledAddFavoriteBtn>
        )}
      </StyledTeacherItemBox>
      <Modal active={isModalActive} setActive={setIsModalActive}>
        <BookLessonForm
          teacherName={name}
          surname={surname}
          avatar_url={avatar_url}
          setIsModalActive={setIsModalActive}
        />
      </Modal>
    </>
  );
};
