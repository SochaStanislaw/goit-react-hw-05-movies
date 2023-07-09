import { Loader } from 'components/Loader/Loader';
import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import css from './Navigation.module.css';

export default function Navigation() {
  const StyledLink = styled(NavLink)`
    color: rgb(161, 161, 161);
    text-decoration: none;

    &.active {
      color: rgb(228, 228, 228);
      text-decoration: underline;
      font-weight: bolder;
    }
  `;

  return (
    <>
      <header className={css.wrapper}>
        <nav>
          <StyledLink className={css.link} to="/" end>
            <span className={css.color}>Start</span>
          </StyledLink>
          <StyledLink className={css.link} to="/movies" end>
            <span className={css.color}>Look for movies</span>
          </StyledLink>
        </nav>
      </header>

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
}
