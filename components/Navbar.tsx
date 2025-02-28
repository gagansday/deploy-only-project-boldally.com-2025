import boldallyLogo from '@/assets/logo.svg';
import Image from 'next/image';

export default function Navbar() {
  return (
    <div>
      <Image src={boldallyLogo} alt="Boldally Logo" height={50} />
    </div>
  );
}
