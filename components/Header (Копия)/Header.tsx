import { JSX } from 'react';
import { HeaderProps } from './Header.props';
import styles from './Header.module.css';
import LogoIcon from './logo.svg';
import GHLogo from './gh.svg';

export default function Header({
  className,
  ...props
}: HeaderProps): JSX.Element {
  return (
    <header className={styles.header} {...props}>
      <LogoIcon />
      <GHLogo />
    </header>
  );
}
