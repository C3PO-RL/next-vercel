import { CSSProperties, FC } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const style: CSSProperties = {
  color: 'blue',
  textDecoration: 'underline',
};

interface Props {
  text: string;
  href: string;
}

const ActiveLink: FC<Props> = ({ text, href }) => {
  const router = useRouter();
  return (
    <Link href={href}>
      <a style={router.asPath === href ? style : undefined}>{text}</a>
    </Link>
  );
};

export default ActiveLink;
